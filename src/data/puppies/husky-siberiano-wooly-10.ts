import type { Puppy } from "@/types/puppy";
import photo1 from "../../assets/puppies/husky-siberiano-wooly-10/photo-1.webp"
import photo2 from "../../assets/puppies/husky-siberiano-wooly-10/photo-2.webp"
import photo3 from "../../assets/puppies/husky-siberiano-wooly-10/photo-3.webp"

export const huskyWooly10 = [
  {
    id: 10,
    name: "Husky Wooly - Chocolate Velvet Fêmea",
    description: "Raríssimo exemplar da raça, com genética extremamente selecionada. Marcações perfeitas.",
    price: "R$ 7.500,00",
    youtubeId: "VyCBCZAV9gk",
    image: photo1,
    age: "2 meses",
    rare: true,
    sex: "Fêmea",
    gallery: [
      photo1,
      photo2,
      photo3,
    ],
    detail: "Husky Siberiano Wooly - Chocolate Velvet é um exemplar raro da raça, com genética extremamente selecionada. Marcações perfeitas."
  }
] satisfies Puppy[];