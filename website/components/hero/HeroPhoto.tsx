import fs from "node:fs";
import path from "node:path";
import Image from "next/image";
import { ImageIcon } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * Homepage hero photograph.
 *
 * ─────────────────────────────────────────────────────────────────────
 * TO FINISH THE HERO: drop the real photo at
 *   website/public/images/hero-home.jpg
 * (recommended ~1200×1000, JPG). That is the ONLY remaining step — the
 * page will pick it up automatically.
 * ─────────────────────────────────────────────────────────────────────
 *
 * Until the file exists, a tasteful styled placeholder panel renders in
 * its place so the page never shows a broken image.
 */
const HERO_IMAGE_PATH = "/images/hero-home.jpg";

function heroImageExists(): boolean {
  try {
    return fs.existsSync(
      path.join(process.cwd(), "public", "images", "hero-home.jpg"),
    );
  } catch {
    return false;
  }
}

export function HeroPhoto({ className }: { className?: string }) {
  const hasPhoto = heroImageExists();

  return (
    <div
      className={cn(
        "relative aspect-[6/5] w-full overflow-hidden rounded-xl",
        className,
      )}
    >
      {hasPhoto ? (
        <Image
          src={HERO_IMAGE_PATH}
          alt="A person comparing telehealth treatment options with confidence"
          fill
          priority
          sizes="(max-width: 1024px) 100vw, 560px"
          className="object-cover"
        />
      ) : (
        // Graceful styled fallback — shown only until hero-home.jpg lands.
        <div className="flex h-full w-full flex-col items-center justify-center gap-3 bg-gradient-to-br from-brand-100 to-brand-50 text-brand-600">
          <span className="flex h-14 w-14 items-center justify-center rounded-full bg-white/70">
            <ImageIcon className="h-7 w-7" aria-hidden />
          </span>
          <p className="px-6 text-center text-sm font-medium text-brand-600">
            Add your hero photo at
            <br />
            <code className="text-xs text-brand-700">
              public/images/hero-home.jpg
            </code>
          </p>
        </div>
      )}
    </div>
  );
}
