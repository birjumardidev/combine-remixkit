import Link from "next/link";
import {
  ArrowRight,
  Check,
  Copy,
  ImageIcon,
  Search,
  Sparkles,
  Wand2,
  Zap,
  Layers,
  Star,
} from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { HomePromptPreview } from "@/components/home-prompt-preview";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white text-neutral-900">
      <SiteHeader />

      <main>
        {/* ── Hero ───────────────────────────────────────────── */}
        <section className="relative isolate overflow-hidden border-b border-neutral-100">
          {/* Mesh gradient background */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 -z-10"
            style={{
              background: `
                radial-gradient(ellipse 80% 60% at 50% -10%, rgba(139,92,246,0.14) 0%, transparent 65%),
                radial-gradient(ellipse 40% 40% at 85% 30%, rgba(168,85,247,0.10) 0%, transparent 60%),
                radial-gradient(ellipse 40% 50% at 15% 60%, rgba(236,72,153,0.08) 0%, transparent 60%)
              `,
            }}
          />
          {/* Subtle grid */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 -z-10 opacity-[0.025]"
            style={{
              backgroundImage: `linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)`,
              backgroundSize: "64px 64px",
            }}
          />

          <div className="mx-auto max-w-6xl px-4 pb-20 pt-20 sm:px-6 sm:pb-28 sm:pt-28 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              {/* Badge */}
              <div className="animate-fade-up inline-flex items-center gap-2 rounded-full border border-violet-200/80 bg-violet-50 px-3.5 py-1.5 text-xs font-bold uppercase tracking-[.18em] text-violet-700 shadow-sm">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-violet-500 opacity-60" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-violet-600" />
                </span>
                One toolkit, two ways to create
              </div>

              {/* Headline */}
              <h1 className="animate-fade-up animate-fade-up-delay-1 mt-7 text-[2.75rem] font-bold leading-[1.05] tracking-[-0.04em] sm:text-6xl lg:text-7xl">
                The creative shortcut for{" "}
                <span className="gradient-text">better prompts.</span>
              </h1>

              {/* Sub */}
              <p className="animate-fade-up animate-fade-up-delay-2 mx-auto mt-6 max-w-xl text-base leading-7 text-neutral-500 sm:text-lg">
                Generate a detailed prompt from any visual reference, or
                discover a look you love and copy it instantly.
              </p>

              {/* CTAs */}
              <div className="animate-fade-up animate-fade-up-delay-3 mt-9 flex flex-col justify-center gap-3 sm:flex-row">
                <Link
                  href="/generate"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-neutral-900 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-neutral-900/20 transition-all duration-200 hover:bg-neutral-700 hover:shadow-neutral-900/30 active:scale-[0.98]"
                >
                  <Sparkles className="h-4 w-4" />
                  Generate from image
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/library"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-neutral-200 bg-white px-6 py-3 text-sm font-semibold text-neutral-700 shadow-sm transition-all duration-200 hover:border-neutral-300 hover:bg-neutral-50 active:scale-[0.98]"
                >
                  <Search className="h-4 w-4" />
                  Explore prompt library
                </Link>
              </div>
            </div>

            {/* Feature cards */}
            <div className="mx-auto mt-16 grid max-w-5xl gap-4 sm:gap-5 md:grid-cols-[1.1fr_0.9fr]">
              {/* Dark card — image to prompt */}
              <div className="group relative overflow-hidden rounded-[1.75rem] border border-neutral-800 bg-neutral-950 p-6 text-white shadow-2xl shadow-neutral-900/30 transition-all duration-300 hover:shadow-neutral-900/40 sm:p-8">
                {/* Glow */}
                <div
                  aria-hidden
                  className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-violet-600/20 blur-3xl transition-all duration-500 group-hover:bg-violet-600/30"
                />
                <div className="relative">
                  <div className="flex items-center justify-between">
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 ring-1 ring-white/10">
                      <Wand2 className="h-5 w-5" />
                    </span>
                    <span className="rounded-full bg-white/10 px-3 py-1 text-[11px] font-bold uppercase tracking-[.18em] text-neutral-300">
                      Image to prompt
                    </span>
                  </div>
                  <div className="mt-10 max-w-sm">
                    <p className="text-2xl font-bold leading-[1.2] tracking-tight sm:text-[1.6rem]">
                      Your reference, translated into a creative direction.
                    </p>
                    <div className="mt-6 space-y-2.5">
                      {["Pose & framing", "Lighting & vibe", "Outfit & styling"].map(
                        (item) => (
                          <div
                            key={item}
                            className="flex items-center gap-3 rounded-xl bg-white/8 px-3.5 py-2.5 ring-1 ring-white/10"
                          >
                            <Check className="h-4 w-4 shrink-0 text-violet-400" />
                            <span className="text-sm font-medium text-neutral-200">
                              {item}
                            </span>
                          </div>
                        )
                      )}
                    </div>
                  </div>
                  <Link
                    href="/generate"
                    className="mt-8 inline-flex items-center gap-2 text-sm font-bold text-violet-400 transition-colors hover:text-violet-300"
                  >
                    Open generator <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Stats / Social Proof Strip ──────────────────── */}
        <section className="border-b border-neutral-100 bg-neutral-50/60">
          <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
              {[
                { icon: <Layers className="h-4 w-4" />, value: "7+", label: "Prompt categories" },
                { icon: <Zap className="h-4 w-4" />, value: "Instant", label: "Copy any prompt" },
                { icon: <Star className="h-4 w-4" />, value: "Curated", label: "Hand-picked results" },
                { icon: <ImageIcon className="h-4 w-4" />, value: "AI-ready", label: "Works everywhere" },
              ].map(({ icon, value, label }) => (
                <div
                  key={label}
                  className="flex flex-col items-center gap-2 rounded-2xl border border-neutral-200 bg-white p-5 text-center shadow-sm"
                >
                  <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-violet-50 text-violet-600">
                    {icon}
                  </span>
                  <p className="text-lg font-bold text-neutral-900">{value}</p>
                  <p className="text-xs text-neutral-500">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Latest Prompts ──────────────────────────────── */}
        <HomePromptPreview />

        {/* ── How it works ────────────────────────────────── */}
        <section className="border-t border-neutral-100 bg-white">
          <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
            <div className="mb-12 text-center">
              <p className="section-label">
                <Sparkles className="h-3.5 w-3.5" />
                How it works
              </p>
              <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
                Two tools. Zero friction.
              </h2>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  step: "01",
                  icon: <ImageIcon className="h-5 w-5 text-violet-600" />,
                  title: "Upload a reference",
                  desc: "Drop any image and RemixKit reads the visual details for you.",
                },
                {
                  step: "02",
                  icon: <Wand2 className="h-5 w-5 text-violet-600" />,
                  title: "Generate a prompt",
                  desc: "Choose what to capture — pose, lighting, styling, background.",
                },
                {
                  step: "03",
                  icon: <Copy className="h-5 w-5 text-violet-600" />,
                  title: "Copy and create",
                  desc: "Paste the result straight into any AI image editor.",
                },
              ].map(({ step, icon, title, desc }) => (
                <div
                  key={step}
                  className="group relative rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm transition-all duration-300 hover:border-violet-200 hover:shadow-md hover:-translate-y-0.5"
                >
                  <div className="mb-4 flex items-center justify-between">
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-50 transition-colors group-hover:bg-violet-100">
                      {icon}
                    </span>
                    <span className="text-3xl font-black text-neutral-100 transition-colors group-hover:text-violet-100">
                      {step}
                    </span>
                  </div>
                  <h3 className="text-base font-bold text-neutral-900">{title}</h3>
                  <p className="mt-2 text-sm leading-6 text-neutral-500">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Bottom CTA ──────────────────────────────────── */}
        <section className="border-t border-neutral-100 bg-neutral-950 text-white">
          <div className="relative mx-auto max-w-6xl overflow-hidden px-4 py-16 text-center sm:px-6 sm:py-20 lg:px-8">
            {/* Glow */}
            <div
              aria-hidden
              className="pointer-events-none absolute left-1/2 top-0 -z-0 h-64 w-64 -translate-x-1/2 rounded-full bg-violet-600/20 blur-3xl"
            />
            <div className="relative">
              <p className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3.5 py-1.5 text-xs font-bold uppercase tracking-[.18em] text-violet-400">
                <Sparkles className="h-3.5 w-3.5" />
                Built for the next idea
              </p>
              <h2 className="mt-6 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
                Start creating in seconds.
              </h2>
              <p className="mx-auto mt-4 max-w-lg text-base text-neutral-400">
                A focused space for the two moments that slow creative work
                down: finding the right words and finding the right reference.
              </p>
              <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Link
                  href="/generate"
                  className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-neutral-900 shadow-lg transition-all hover:bg-neutral-100 active:scale-[0.98]"
                >
                  <Sparkles className="h-4 w-4" />
                  Generate from image
                </Link>
                <Link
                  href="/library"
                  className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/8 px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-white/12 active:scale-[0.98]"
                >
                  Browse library
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>
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
            <Link href="/library" className="text-xs text-neutral-500 transition hover:text-neutral-300">
              Library
            </Link>
            <Link href="/generate" className="text-xs text-neutral-500 transition hover:text-neutral-300">
              Generate
            </Link>
            <Link href="/prompts" className="text-xs text-neutral-500 transition hover:text-neutral-300">
              Prompts
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
