// Static export has no image optimizer, so serve the files as-is,
// prefixed with the GitHub Pages sub-path when there is one.
export default function loader({ src }: { src: string; width: number; quality?: number }) {
  const base = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
  return src.startsWith("/") ? `${base}${src}` : src;
}
