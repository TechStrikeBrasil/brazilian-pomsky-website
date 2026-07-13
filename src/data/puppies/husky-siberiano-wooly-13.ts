import type { Puppy } from "@/types/puppy";
import photo1 from "../../assets/puppies/husky-siberiano-wooly-13/photo-1.webp"
import photo2 from "../../assets/puppies/husky-siberiano-wooly-13/photo-2.webp"
import photo3 from "../../assets/puppies/husky-siberiano-wooly-13/photo-3.webp"

export const huskyWooly13 = [
  {
    id: 13,
    name: "Husky Wooly - Lilac Light Fêmea",
    description: "Perfeito exemplar da raça, com genética extremamente selecionada. Marcações perfeitas.",
    price: "R$ 7.500,00",
    youtubeId: "44hR7vmDLSY",
    image: photo1,
    age: "2 meses",
    rare: false,
    sex: "Fêmea",
    gallery: [
      photo1,
      photo2,
      photo3,
    ],
    detail: "Husky Siberiano Wooly - Lilac Light é um exemplar perfeito da raça, com genética extremamente selecionada. Marcações perfeitas."
  }
] satisfies Puppy[];