"use client";

import { ChangeEvent, DragEvent, useEffect, useRef, useState } from "react";
import { Check, Copy, ImagePlus, Sparkles, Upload } from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import Link from "next/link";
import { Wand2 } from "lucide-react";

type Feature = "pose" | "background" | "lighting" | "outfit";
const options: { key: Feature; label: string; detail: string; emoji: string }[] = [
  { key: "pose", label: "Pose & framing", detail: "Subject position and camera composition", emoji: "🎭" },
  { key: "background", label: "Background", detail: "Scene and environment", emoji: "🌅" },
  { key: "lighting", label: "Lighting & vibe", detail: "Atmosphere and colour", emoji: "✨" },
  { key: "outfit", label: "Outfit & styling", detail: "Clothing and accessories", emoji: "👗" },
];
const valid = (file: File) =>
  file.type.startsWith("image/") && file.size <= 10 * 1024 * 1024;

export default function GeneratePage() {
  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [selected, setSelected] = useState<Record<Feature, boolean>>({
    pose: true,
    background: false,
    lighting: true,
    outfit: false,
  });
  const [prompt, setPrompt] = useState("");
  const [error, setError] = useState("");
  const [busy, setBusy] = useState(false);
  const [copied, setCopied] = useState(false);
  const input = useRef<HTMLInputElement>(null);

  useEffect(
    () => () => {
      if (preview) URL.revokeObjectURL(preview);
    },
    [preview]
  );

  function setPhoto(next?: File) {
    if (!next) return;
    if (!valid(next)) {
      setError("Choose a JPG, PNG, or WEBP image up to 10 MB.");
      return;
    }
    setError("");
    setFile(next);
    setPrompt("");
    setPreview((old) => {
      if (old) URL.revokeObjectURL(old);
      return URL.createObjectURL(next);
    });
  }

  async function generate() {
    if (!file) { setError("Add a reference image first."); return; }
    if (!Object.values(selected).some(Boolean)) {
      setError("Choose at least one detail to include.");
      return;
    }
    setBusy(true);
    setError("");
    setPrompt("");
    const data = new FormData();
    data.append("reference", file);
    data.append("preserve", JSON.stringify(selected));
    try {
      const response = await fetch("/api/edit", { method: "POST", body: data });
      const body = await response.json();
      if (!response.ok) throw new Error(body.error || "We could not generate a prompt.");
      setPrompt(body.prompt);
    } catch (cause) {
      setError(cause instanceof Error ? cause.message : "Something went wrong.");
    } finally {
      setBusy(false);
    }
  }

  async function copy() {
    try {
      await navigator.clipboard.writeText(prompt);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setError("Unable to copy the prompt. Please copy it manually.");
    }
  }

  return (
    <div className="min-h-screen bg-neutral-50">
      <SiteHeader />

      <main className="mx-auto max-w-5xl px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
        {/* Page header */}
        <div className="mb-10 max-w-2xl">
          <p className="section-label">
            <Sparkles className="h-3.5 w-3.5" />
            Image to prompt
          </p>
          <h1 className="mt-4 text-4xl font-bold tracking-tight text-neutral-900 sm:text-5xl">
            Turn a look into the right words.
          </h1>
          <p className="mt-4 text-base leading-7 text-neutral-500">
            Upload a reference image, choose what to capture, then copy a
            ready-to-use prompt.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2 lg:gap-8">
          {/* ── Step 1: Upload ─────────────────────────────── */}
          <div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm sm:p-7">
            <Step n="01" title="Add your reference image" text="JPG, PNG, or WEBP up to 10 MB." />

            <button
              type="button"
              onClick={() => input.current?.click()}
              onDrop={(e: DragEvent<HTMLButtonElement>) => {
                e.preventDefault();
                setPhoto(e.dataTransfer.files[0]);
              }}
              onDragOver={(e) => e.preventDefault()}
              className="mt-5 group flex aspect-[4/3] w-full flex-col items-center justify-center overflow-hidden rounded-xl border-2 border-dashed border-neutral-200 bg-neutral-50 p-4 transition-all duration-200 hover:border-violet-300 hover:bg-violet-50/30"
            >
              {preview ? (
                <img
                  src={preview}
                  alt="Reference preview"
                  className="h-full w-full object-cover rounded-lg"
                />
              ) : (
                <>
                  <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white shadow-md shadow-neutral-100 ring-1 ring-neutral-200 transition-transform duration-200 group-hover:scale-105">
                    <Upload className="h-6 w-6 text-neutral-500" />
                  </span>
                  <strong className="mt-3.5 text-sm font-semibold text-neutral-700">
                    Drop image here or tap to browse
                  </strong>
                  <span className="mt-1.5 text-xs text-neutral-400">
                    Your image is used only to generate this prompt.
                  </span>
                </>
              )}
            </button>
            <input
              ref={input}
              className="hidden"
              type="file"
              accept="image/jpeg,image/png,image/webp"
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setPhoto(e.target.files?.[0])
              }
            />
          </div>

          {/* ── Step 2: Options ────────────────────────────── */}
          <div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm sm:p-7">
            <Step
              n="02"
              title="What should the prompt include?"
              text="Select the visual details you want us to describe."
            />
            <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
              {options.map((option) => (
                <button
                  key={option.key}
                  type="button"
                  onClick={() =>
                    setSelected((current) => ({
                      ...current,
                      [option.key]: !current[option.key],
                    }))
                  }
                  className={`flex items-center gap-3.5 rounded-xl border p-4 text-left transition-all duration-200 ${
                    selected[option.key]
                      ? "border-violet-300 bg-indigo-900 text-white shadow-md shadow-violet-600/20"
                      : "border-neutral-200 bg-white hover:border-neutral-300 hover:bg-neutral-50"
                  }`}
                >
                  <span
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-base transition-all ${
                      selected[option.key]
                        ? "bg-white/20 ring-1 ring-white/30"
                        : "bg-neutral-100"
                    }`}
                  >
                    {selected[option.key] ? (
                      <Check className="h-4 w-4" />
                    ) : (
                      option.emoji
                    )}
                  </span>
                  <span>
                    <strong className="block text-sm font-semibold">
                      {option.label}
                    </strong>
                    <small
                      className={`text-xs ${
                        selected[option.key]
                          ? "text-violet-200"
                          : "text-neutral-500"
                      }`}
                    >
                      {option.detail}
                    </small>
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Error */}
        {error && (
          <div
            role="alert"
            className="mt-5 flex items-center gap-3 rounded-xl border border-red-200 bg-red-50 px-4 py-3.5 text-sm text-red-700"
          >
            <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-red-100 text-red-600 text-xs font-bold">!</span>
            {error}
          </div>
        )}

        {/* Generate button */}
        <button
          type="button"
          disabled={busy}
          onClick={generate}
          className="mt-6 flex w-full items-center justify-center gap-2.5 rounded-xl bg-neutral-900 py-4 text-sm font-semibold text-white shadow-lg shadow-neutral-600/25 transition-all duration-200 hover:bg-neutral-700 hover:shadow-violet-600/35 disabled:cursor-wait disabled:opacity-60 active:scale-[0.99]"
        >
          <Sparkles className="h-4 w-4" />
          {busy ? "Reading your reference…" : "Generate prompt"}
        </button>

        {/* Generated prompt */}
        {prompt && (
          <section className="mt-6 overflow-hidden rounded-2xl border border-violet-100 bg-gradient-to-br from-violet-50/50 to-fuchsia-50/30 shadow-sm">
            <div className="flex items-center justify-between gap-4 border-b border-violet-100/70 px-5 py-4 sm:px-6">
              <p className="section-label">
                <Sparkles className="h-3.5 w-3.5" />
                Generated prompt
              </p>
              <button
                type="button"
                onClick={copy}
                className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-semibold transition-all duration-200 ${
                  copied
                    ? "bg-emerald-500 text-white shadow-sm shadow-emerald-500/25"
                    : "border border-violet-200 bg-white text-violet-700 hover:bg-violet-50"
                }`}
              >
                {copied ? (
                  <Check className="h-3.5 w-3.5" />
                ) : (
                  <Copy className="h-3.5 w-3.5" />
                )}
                {copied ? "Copied!" : "Copy prompt"}
              </button>
            </div>
            <p className="whitespace-pre-wrap px-5 py-5 text-sm leading-7 text-neutral-700 sm:px-6">
              {prompt}
            </p>
          </section>
        )}
      </main>

      <footer className="border-t border-neutral-800 bg-neutral-950 px-4 py-8">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 sm:flex-row">
          <div className="flex items-center gap-2">
            <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-white">
              <Wand2 className="h-3.5 w-3.5 text-neutral-900" />
            </span>
            <span className="text-sm font-semibold text-white">RemixKit</span>
          </div>
          <p className="text-xs text-neutral-500">
            © {new Date().getFullYear()} RemixKit — image prompts, made practical.
          </p>
          <div className="flex items-center gap-4">
            <Link href="/library" className="text-xs text-neutral-500 transition hover:text-neutral-300">Library</Link>
            <Link href="/prompts" className="text-xs text-neutral-500 transition hover:text-neutral-300">Prompts</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}

function Step({ n, title, text }: { n: string; title: string; text: string }) {
  return (
    <div className="flex gap-3.5 border-b border-neutral-100 pb-5 mb-1">
      <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-violet-100 text-xs font-bold text-violet-600">
        {n}
      </span>
      <div>
        <h2 className="text-base font-bold text-neutral-900">{title}</h2>
        <p className="mt-0.5 text-xs text-neutral-500">{text}</p>
      </div>
    </div>
  );
}
