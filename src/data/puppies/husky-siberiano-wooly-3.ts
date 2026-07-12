import type { Puppy } from "@/types/puppy";
import photo1 from "../../assets/puppies/husky-siberiano-wooly-3/photo-1.jpg"
import photo2 from "../../assets/puppies/husky-siberiano-wooly-3/photo-2.jpg"
import photo3 from "../../assets/puppies/husky-siberiano-wooly-3/photo-3.jpg"


export const huskyWooly3 = [
  {
    id: 3,
    name: "Husky Wooly - Silver Mist Macho",
    description: "Perfeito exemplar da raça, com genética extremamente selecionada. Marcações perfeitas.",
    price: "R$ 6.900,00",
    youtubeId: "3liZc1Kcd9w",
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