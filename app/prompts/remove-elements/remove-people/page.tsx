import Link from "next/link";
import { ArrowLeft, ArrowRight, Copy, Sparkles } from "lucide-react";

export const metadata = {
  title: "AI Prompt to Remove People from Photo | RemixKit",
  description:
    "Use this AI prompt to remove people or subjects from a photo cleanly and naturally.",
};

const promptText = `Remove all people from the scene while preserving the original background. Fill the empty space naturally, keeping textures and lighting consistent.`;

export default function RemovePeoplePage() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
      <nav className="mb-8 flex items-center gap-2 text-xs text-neutral-400">
        <Link href="/prompts" className="flex items-center gap-1.5 transition hover:text-neutral-700">
          <ArrowLeft className="h-3.5 w-3.5" /> Prompt Categories
        </Link>
        <span>/</span>
        <span className="text-neutral-600">Remove People</span>
      </nav>

      <article className="space-y-8">
        <header>
          <p className="section-label"><Sparkles className="h-3.5 w-3.5" />AI Image Prompt</p>
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl">
            AI Prompt to Remove People from Photo
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-7 text-neutral-500">
            Copy this prompt to erase people from a photo while reconstructing the background naturally.
          </p>
        </header>

        <section className="overflow-hidden rounded-2xl border border-violet-100 bg-gradient-to-br from-violet-50/60 to-fuchsia-50/30 shadow-sm">
          <div className="flex items-center justify-between border-b border-violet-100/70 px-6 py-4">
            <p className="text-xs font-bold uppercase tracking-[.2em] text-violet-600">Prompt</p>
            <div className="flex items-center gap-2 rounded-full border border-violet-200 bg-white px-3 py-1.5 text-xs font-semibold text-violet-700 shadow-sm">
              <Copy className="h-3 w-3" />Copy to use
            </div>
          </div>
          <pre className="px-6 py-5 text-sm leading-7 text-neutral-700 whitespace-pre-wrap break-words font-sans">{promptText}</pre>
        </section>

        <section className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm sm:p-7">
          <h2 className="text-xl font-bold text-neutral-900">Why this prompt works</h2>
          <p className="mt-3 text-sm leading-7 text-neutral-500">
            It focuses the AI on removing people while reconstructing the background in place.
            That avoids generating unrelated content and keeps the edit looking seamless.
          </p>
        </section>

        <section className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm sm:p-7">
          <h2 className="text-xl font-bold text-neutral-900">How to use this prompt</h2>
          <ol className="mt-4 space-y-3">
            {["Paste the prompt into your AI editor.", "Upload the original photo with people you want removed.", "Select an inpainting or background repair mode.", "Run the edit and inspect the filled background for consistency."].map((step, i) => (
              <li key={i} className="flex items-start gap-3 text-sm text-neutral-500 leading-6">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-violet-100 text-xs font-bold text-violet-600">{i + 1}</span>
                {step}
              </li>
            ))}
          </ol>
        </section>

        <section className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm sm:p-7">
          <h2 className="text-xl font-bold text-neutral-900">Best settings for removing people</h2>
          <ul className="mt-4 space-y-2.5">
            {["Model: inpainting or photo repair", "Resolution: 1920x1080 or higher", "Lighting: match existing scene lighting", "Detail: preserve texture and background depth"].map((item) => (
              <li key={item} className="flex items-center gap-3 text-sm text-neutral-500">
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-violet-400" />{item}
              </li>
            ))}
          </ul>
        </section>

        <section className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm sm:p-7">
          <h2 className="text-xl font-bold text-neutral-900">Example result</h2>
          <p className="mt-3 text-sm leading-7 text-neutral-500">
            The final image should show the scene without people, with natural background continuation
            and no obvious repairs. Shadows and textures should remain consistent with the original photo.
          </p>
        </section>

        <section className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm sm:p-7">
          <h2 className="text-lg font-bold text-neutral-900">Related prompts</h2>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            {[
              { href: "/prompts/remove-elements/remove-watermark", label: "AI prompt to remove watermark from image" },
              { href: "/prompts/change-background/office", label: "AI prompt to change background to office" },
            ].map(({ href, label }) => (
              <Link key={href} href={href} className="flex items-center justify-between rounded-xl border border-neutral-200 bg-neutral-50 px-4 py-3 text-sm font-medium text-neutral-800 transition-all hover:border-violet-200 hover:bg-white hover:text-violet-700 hover:shadow-sm">
                <span>{label}</span>
                <ArrowRight className="h-3.5 w-3.5 shrink-0 text-neutral-400" />
              </Link>
            ))}
          </div>
        </section>
      </article>
    </main>
  );
}
