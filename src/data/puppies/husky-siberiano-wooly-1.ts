import type { Puppy } from "@/types/puppy";
import photo1 from "../../assets/puppies/husky-siberiano-wooly-1/photo-1.webp"
import photo2 from "../../assets/puppies/husky-siberiano-wooly-1/photo-2.webp"
import photo3 from "../../assets/puppies/husky-siberiano-wooly-1/photo-3.webp"
import photo4 from "../../assets/puppies/husky-siberiano-wooly-1/photo-4.webp"

export const huskyWooly1 = [
  {
    id: 1,
    name: "Husky Wooly - Lilac Light Fêmea",
    description: "Perfeito exemplar da raça, com genética extremamente selecionada. Marcações perfeitas.",
    price: "R$ 7.500,00",
    youtubeId: "2ZEA6RaHYfw",
    image: photo1,
    age: "2 meses",
    rare: false,
    sex: "Fêmea",
    gallery: [
      photo1,
      photo2,
      photo3,
      photo4
    ],
    detail: "Husky Siberiano Wooly - Lilac Light é um exemplar perfeito da raça, com genética extremamente selecionada. Marcações perfeitas."
  }
] satisfies Puppy[];