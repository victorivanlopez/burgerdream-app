import { Category, Product } from '@prisma/client';

export type ProductWithCategories = Product & {
  category: Category
}