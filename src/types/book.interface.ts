export type IBook = {
  id: string;
  title: string;
  author: string;
  uploadedBy: string;
  publicationYear: number;
  genre: string[];
  price: number;
  imageUrl?: string;
};
