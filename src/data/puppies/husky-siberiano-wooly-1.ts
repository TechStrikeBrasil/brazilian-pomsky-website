import type { Puppy } from "@/types/puppy";
import photo1 from "../../assets/puppies/husky-siberiano-wooly-1/photo-1.jpg"
import photo2 from "../../assets/puppies/husky-siberiano-wooly-1/photo-2.jpg"
import photo3 from "../../assets/puppies/husky-siberiano-wooly-1/photo-3.jpg"
import photo4 from "../../assets/puppies/husky-siberiano-wooly-1/photo-4.jpg"

export const huskyWooly1 = [
  {
    id: 1,
    name: "Husky Wolly - Lilac Light Fêmea",
    description: "Perfeito exemplar da raça, com genética extremamente selecionada. Marcações perfeitas.",
    price: "R$ 7.500,00",
    youtubeId: "SgkSGEIPW3s",
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
    detail: "Husky Siberiano Wolly - Lilac Light é um exemplar perfeito da raça, com genética extremamente selecionada. Marcações perfeitas."
  }
] satisfies Puppy[];