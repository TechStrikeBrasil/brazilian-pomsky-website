import type { Puppy } from "@/types/puppy";
import photo1 from "../../assets/puppies/husky-siberiano-wooly-11/photo-1.webp"
import photo2 from "../../assets/puppies/husky-siberiano-wooly-11/photo-2.webp"
import photo3 from "../../assets/puppies/husky-siberiano-wooly-11/photo-3.webp"

export const huskyWooly11 = [
  {
    id: 11,
    name: "Husky Wooly - Chocolate Velvet Macho",
    description: "Raríssimo exemplar da raça, com genética extremamente selecionada. Marcações perfeitas.",
    price: "R$ 6.900,00",
    youtubeId: "aVH02MLBrpg",
    image: photo1,
    age: "2 meses",
    rare: true,
    sex: "Macho",
    gallery: [
      photo1,
      photo2,
      photo3,
    ],
    detail: "Husky Siberiano Wooly - Chocolate Velvet é um exemplar raro da raça, com genética extremamente selecionada. Marcações perfeitas."
  }
] satisfies Puppy[];