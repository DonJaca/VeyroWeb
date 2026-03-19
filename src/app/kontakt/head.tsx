import { siteConfig } from "@/lib/site";

export default function Head() {
  return (
    <>
      <title>Kontakt | Veyro</title>
      <meta
        name="description"
        content="Skontaktuj się z Veyro w sprawie strony internetowej, frontendu, brandingu lub projektu UI/UX. Odpowiadamy szybko i konkretnie."
      />
      <link rel="canonical" href={`${siteConfig.url}/kontakt`} />
    </>
  );
}
