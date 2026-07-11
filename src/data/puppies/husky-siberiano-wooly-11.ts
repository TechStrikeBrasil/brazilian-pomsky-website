import type { Puppy } from "@/types/puppy";
import photo1 from "../../assets/puppies/husky-siberiano-wooly-11/photo-1.jpg"
import photo2 from "../../assets/puppies/husky-siberiano-wooly-11/photo-2.jpg"
import photo3 from "../../assets/puppies/husky-siberiano-wooly-11/photo-3.jpg"

export const huskyWooly11 = [
  {
    id: 11,
    name: "Husky Wolly - Chocolate Velvet Macho",
    description: "Raríssimo exemplar da raça, com genética extremamente selecionada. Marcações perfeitas.",
    price: "R$ 6.900,00",
    youtubeId: "YgMYVg89zHM",
    image: photo1,
    age: "2 meses",
    rare: true,
    sex: "Macho",
    gallery: [
      photo1,
      photo2,
      photo3,
    ],
    detail: "Husky Siberiano Wolly - Chocolate Velvet é um exemplar raro da raça, com genética extremamente selecionada. Marcações perfeitas."
  }
] satisfies Puppy[];