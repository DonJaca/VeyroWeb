import { siteConfig } from "@/lib/site";

export default function Head() {
  return (
    <>
      <title>O nas | Veyro</title>
      <meta
        name="description"
        content="Poznaj Veyro: niezależne studio projektowe i frontendowe, które stawia na jakość, odważny design i dopracowane wdrożenia."
      />
      <link rel="canonical" href={`${siteConfig.url}/o-nas`} />
    </>
  );
}
