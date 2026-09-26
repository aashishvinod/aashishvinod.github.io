import { existsSync } from "node:fs";
import { join } from "node:path";

const publicDir = join(process.cwd(), "public");

/**
 * Astro frontmatter runs in Node at build time, so we can check the
 * public/ directory directly instead of rendering a path that 404s.
 */
export function publicFileExists(publicPath: string | null | undefined): boolean {
  if (!publicPath) return false;
  const relative = publicPath.startsWith("/") ? publicPath.slice(1) : publicPath;
  return existsSync(join(publicDir, relative));
}

export function resolveImage(publicPath: string | null | undefined): string | null {
  return publicFileExists(publicPath) ? (publicPath as string) : null;
}
