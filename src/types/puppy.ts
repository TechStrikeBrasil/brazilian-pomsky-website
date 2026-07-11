export type Puppy = {
  id: number;
  name: string;
  description: string;
  detail: string;
  price: string;
  image: string;
  age: string;
  sex: "Macho" | "Fêmea";
  rare: boolean;
  // Substitua pelos IDs dos vídeos não listados do YouTube (ex: "dQw4w9WgXcQ").
  youtubeId: string;
  // Fotos adicionais do filhote para exibir na galeria do modal.
  gallery: string[];
};