// Used only by the static export: next/image with `unoptimized` does not
// prepend basePath, so local images 404 when the site lives in a subfolder.
export default function staticImageLoader({ src }: { src: string }) {
  return `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}${src}`;
}
