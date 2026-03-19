import { siteConfig } from "@/lib/site";

export default function Head() {
  return (
    <>
      <title>Regulamin | Veyro</title>
      <meta
        name="description"
        content="Regulamin korzystania z serwisu Veyro oraz zasady świadczenia usług drogą elektroniczną."
      />
      <link rel="canonical" href={`${siteConfig.url}/regulamin`} />
    </>
  );
}
