import type { Puppy } from "@/types/puppy";
import photo1 from "../../assets/puppies/husky-siberiano-wooly-6/photo-1.webp"
import photo2 from "../../assets/puppies/husky-siberiano-wooly-6/photo-2.webp"
import photo3 from "../../assets/puppies/husky-siberiano-wooly-6/photo-3.webp"

export const huskyWooly6 = [
  {
    id: 6,
    name: "Husky Wooly - Lilac Champagne Fêmea",
    description: "Perfeito exemplar da raça, com genética extremamente selecionada. Marcações perfeitas.",
    price: "R$ 7.500,00",
    youtubeId: "-f-x7rOcNWg",
    image: photo1,
    age: "2 meses",
    rare: false,
    sex: "Fêmea",
    gallery: [
      photo1,
      photo2,
      photo3,
    ],
    detail: "Husky Siberiano Wooly - Lilac Champagne é um exemplar perfeito da raça, com genética extremamente selecionada. Marcações perfeitas."
  }
] satisfies Puppy[];