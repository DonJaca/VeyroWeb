export default function googleImageLoader({
  src,
  width,
}: {
  src: string;
  width: number;
  quality?: number;
}): string {
  // Strip existing =w or =s params from Google image URLs and append requested width
  if (src.includes("lh3.googleusercontent.com")) {
    return src.replace(/=[ws]\d+$/, "") + `=w${width}`;
  }
  return src;
}
