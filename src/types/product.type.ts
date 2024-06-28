import { Category, Product } from '@prisma/client';

export type ProductWithCategories = Product & {
  category: Category
}

export type FormProductData = {
  name: string;
  price: number;
  categoryId: number;
  image: string;
}