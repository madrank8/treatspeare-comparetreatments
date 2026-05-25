import fs from "node:fs";
import path from "node:path";
import Image from "next/image";
import { ImageIcon } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * Homepage hero photograph.
 *
 * The hero photo lives at website/public/hero-home.png and is served from
 * /hero-home.png. next/image optimizes it on delivery (resize + WebP/AVIF),
 * so a PNG source is fine. If the file is ever missing, a styled placeholder
 * renders in its place so the page never shows a broken image.
 */
const HERO_IMAGE_PATH = "/hero-home.png";

function heroImageExists(): boolean {
  try {
    return fs.existsSync(
      path.join(process.cwd(), "public", "hero-home.png"),
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
          alt="A happy couple dancing together in their bright, modern kitchen"
          fill
          priority
          sizes="(max-width: 1024px) 100vw, 560px"
          className="object-cover"
        />
      ) : (
        <div className="flex h-full w-full flex-col items-center justify-center gap-3 bg-gradient-to-br from-brand-100 to-brand-50 text-brand-600">
          <span className="flex h-14 w-14 items-center justify-center rounded-full bg-white/70">
            <ImageIcon className="h-7 w-7" aria-hidden />
          </span>
          <p className="px-6 text-center text-sm font-medium text-brand-600">
            Add your hero photo at
            <br />
            <code className="text-xs text-brand-700">
              public/hero-home.png
            </code>
          </p>
        </div>
      )}
    </div>
  );
}
