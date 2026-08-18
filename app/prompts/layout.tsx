import { SiteHeader } from "@/components/site-header";
import Link from "next/link";
import { Wand2 } from "lucide-react";

export default function PromptsLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-white">
      <SiteHeader />
      {children}
      <footer className="border-t border-neutral-800 bg-neutral-950 px-4 py-8">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 sm:flex-row">
          <div className="flex items-center gap-2">
            <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-white">
              <Wand2 className="h-3.5 w-3.5 text-neutral-900" />
            </span>
            <span className="text-sm font-semibold text-white">RemixKit</span>
          </div>
          <p className="text-xs text-neutral-500">RemixKit — curated AI image editing prompts</p>
          <div className="flex items-center gap-4">
            <Link href="/library" className="text-xs text-neutral-500 transition hover:text-neutral-300">Library</Link>
            <Link href="/generate" className="text-xs text-neutral-500 transition hover:text-neutral-300">Generate</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
