import ametrineOsDesktop from "../assets/ametrine-os-desktop-new.png";
import astriaBillboard from "../assets/astria-billboard.png";
import californiaCodersBillboard from "../assets/california-coders-billboard.png";

export type Project = {
  slug: string;
  title: string;
  category: string;
  year: string;
  image: string;
  alt: string;
  description: string;
  services: string[];
};

export const projects: Project[] = [
  {
    slug: "astria",
    title: "Astria",
    category: "Identity",
    year: "2026",
    image: astriaBillboard,
    alt: "Astria identity displayed on a vivid purple outdoor billboard",
    description:
      "A vibrant identity system built to make technical ideas feel clear, energetic, and immediately recognizable.",
    services: ["Brand strategy", "Visual identity", "Campaign design"],
  },
  {
    slug: "ametrine-os",
    title: "AmetrineOS",
    category: "Digital",
    year: "2026",
    image: ametrineOsDesktop,
    alt: "AmetrineOS identity presented on a desktop computer display",
    description:
      "A precise digital identity balancing confident geometry with a calm, approachable visual language.",
    services: ["Art direction", "Identity design", "Digital experience"],
  },
  {
    slug: "california-coders",
    title: "California Coders",
    category: "Identity",
    year: "2026",
    image: californiaCodersBillboard,
    alt: "California Coders identity displayed on a green outdoor billboard",
    description:
      "A community-focused identity that turns the structure of code into a flexible and energetic graphic system.",
    services: ["Brand identity", "Graphic system", "Campaign design"],
  },
];
