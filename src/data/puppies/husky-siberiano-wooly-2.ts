import type { Puppy } from "@/types/puppy";
import photo1 from "../../assets/puppies/husky-siberiano-wooly-2/photo-1.webp"
import photo2 from "../../assets/puppies/husky-siberiano-wooly-2/photo-2.webp"
import photo3 from "../../assets/puppies/husky-siberiano-wooly-2/photo-3.webp"

export const huskyWooly2 = [
  {
    id: 2,
    name: "Husky Wooly - Silver Mist Macho",
    description: "Perfeito exemplar da raça, com genética extremamente selecionada. Marcações perfeitas.",
    price: "R$ 6.900,00",
    youtubeId: "GsxzKSAbc70",
    image: photo1,
    age: "2 meses",
    rare: false,
    sex: "Macho",
    gallery: [
      photo1,
      photo2,
      photo3,
    ],
    detail: "Husky Siberiano Wooly - Silver Mist é um exemplar perfeito da raça, com genética extremamente selecionada. Marcações perfeitas."
  }
] satisfies Puppy[];