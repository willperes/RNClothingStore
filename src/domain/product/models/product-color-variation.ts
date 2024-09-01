export type ProductSelectedColorVariation = {
  id: number;
  description: string;
};

export type ProductColorVariation = ProductSelectedColorVariation & {
  imageURL: string;
};
