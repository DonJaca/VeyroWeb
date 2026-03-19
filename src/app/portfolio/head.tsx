import { siteConfig } from "@/lib/site";

export default function Head() {
  return (
    <>
      <title>Portfolio | Veyro</title>
      <meta
        name="description"
        content="Portfolio Veyro: realizacje z zakresu brandingu, stron internetowych, UI/UX i nowoczesnego frontendu dla ambitnych marek."
      />
      <link rel="canonical" href={`${siteConfig.url}/portfolio`} />
    </>
  );
}
