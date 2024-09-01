import {
  ProductColorVariation,
  ProductSelectedColorVariation,
} from './product-color-variation';
import { ProductImage } from './product-image';
import { ProductSize } from './product-size';

export interface Product {
  id: number;
  name: string;
  price: number;
  discountedPrice: number;
  colorInfo: ProductSelectedColorVariation;
  colorVariations: ProductColorVariation[];
  images: ProductImage[];
  sizes: ProductSize[];
}
