import { siteConfig } from "@/lib/site";

export default function Head() {
  return (
    <>
      <title>Podejście | Veyro</title>
      <meta
        name="description"
        content="Zobacz proces pracy w Veyro: discovery, strategia, projekt, development i wdrożenie nastawione na jakość i wyniki."
      />
      <link rel="canonical" href={`${siteConfig.url}/podejscie`} />
    </>
  );
}
