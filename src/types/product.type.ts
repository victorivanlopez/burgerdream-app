import { Category, Product } from '@prisma/client';

export type ProductWithCategories = Product & {
  category: Category
}

export type FormProductData = {
  name: FormDataEntryValue | null;
  price: number;
  categoryId: number;
  image: string;
}