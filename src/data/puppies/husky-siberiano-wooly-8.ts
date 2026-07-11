import type { Puppy } from "@/types/puppy";
import photo1 from "../../assets/puppies/husky-siberiano-wooly-8/photo-1.jpg"
import photo2 from "../../assets/puppies/husky-siberiano-wooly-8/photo-2.jpg"
import photo3 from "../../assets/puppies/husky-siberiano-wooly-8/photo-3.jpg"

export const huskyWooly8 = [
  {
    id: 8,
    name: "Husky S. Wolly - Chocolate Velvet Fêmea",
    description: "Perfeito exemplar da raça, com genética extremamente selecionada. Marcações perfeitas.",
    price: "R$ 7.500,00",
    youtubeId: "UTeBELdYY4E",
    image: photo1,
    age: "2 meses",
    rare: false,
    sex: "Fêmea",
    gallery: [
      photo1,
      photo2,
      photo3,
    ],
    detail: "Husky S. Wolly - Chocolate Velvet é um exemplar perfeito da raça, com genética extremamente selecionada. Marcações perfeitas."
  }
] satisfies Puppy[];