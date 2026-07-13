import type { Puppy } from "@/types/puppy";
import photo1 from "../../assets/puppies/husky-siberiano-wooly-12/photo-1.webp"
import photo2 from "../../assets/puppies/husky-siberiano-wooly-12/photo-2.webp"
import photo3 from "../../assets/puppies/husky-siberiano-wooly-12/photo-3.webp"

export const huskyWooly12 = [
  {
    id: 12,
    name: "Husky Wooly - Chocolate Velvet Macho",
    description: "Raríssimo exemplar da raça, com genética extremamente selecionada. Marcações perfeitas.",
    price: "R$ 6.900,00",
    youtubeId: "D2nJ-Io5cr8",
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