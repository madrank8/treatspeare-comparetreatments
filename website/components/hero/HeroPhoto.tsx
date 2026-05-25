import fs from "node:fs";
import path from "node:path";
import Image from "next/image";
import { ImageIcon } from "lucide-react";

/**
 * Homepage hero photograph. Fills its parent — the parent must be
 * `position: relative` and sized; this component just lays the image
 * (or a graceful placeholder) into it with `object-cover`.
 *
 * The photo lives at website/public/hero-home.png and is served from
 * /hero-home.png. next/image optimizes it on delivery (resize + WebP/AVIF).
 */
const HERO_IMAGE_PATH = "/hero-home.png";

function heroImageExists(): boolean {
  try {
    return fs.existsSync(path.join(process.cwd(), "public", "hero-home.png"));
  } catch {
    return false;
  }
}

export function HeroPhoto({
  objectPosition = "object-center",
  sizes = "100vw",
  priority = true,
}: {
  /** Tailwind object-position class, e.g. "object-center" or "object-[60%_40%]". */
  objectPosition?: string;
  sizes?: string;
  priority?: boolean;
}) {
  if (!heroImageExists()) {
    return (
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-gradient-to-br from-brand-100 to-brand-50 text-brand-600">
        <span className="flex h-14 w-14 items-center justify-center rounded-full bg-white/70">
          <ImageIcon className="h-7 w-7" aria-hidden />
        </span>
        <p className="px-6 text-center text-sm font-medium">
          Add the hero photo at public/hero-home.png
        </p>
      </div>
    );
  }

  return (
    <Image
      src={HERO_IMAGE_PATH}
      alt="A happy couple dancing together in their bright, modern kitchen"
      fill
      priority={priority}
      sizes={sizes}
      className={`object-cover ${objectPosition}`}
    />
  );
}
