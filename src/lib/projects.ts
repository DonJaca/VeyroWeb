export interface Project {
  title: string;
  tag: string;
  img: string;
  span?: "wide"; // for portfolio grid layout
}

export const PROJECTS: Project[] = [
  {
    title: "Krypton OS",
    tag: "Web Design • 2024",
    img: "/images/krypton-os.webp",
    span: "wide",
  },
  {
    title: "Flux Identity",
    tag: "Branding • 2023",
    img: "/images/flux-identity.webp",
  },
  {
    title: "Lumina Identity",
    tag: "Branding • 2024",
    img: "/images/lumina-identity.webp",
  },
  {
    title: "Veyro Motion",
    tag: "Digital Art • 2023",
    img: "/images/veyro-motion.webp",
    span: "wide",
  },
];
