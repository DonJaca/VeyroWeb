import { siteConfig } from "@/lib/site";

export default function Head() {
  return (
    <>
      <title>Polityka prywatności | Veyro</title>
      <meta
        name="description"
        content="Polityka prywatności Veyro. Informacje o przetwarzaniu danych, cookies oraz prawach użytkownika serwisu."
      />
      <link rel="canonical" href={`${siteConfig.url}/polityka-prywatnosci`} />
    </>
  );
}
