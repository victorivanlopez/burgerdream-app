import { Product } from '@prisma/client';

export type OrderItem = Pick<Product, 'id' | 'name' | 'price'> & {
  qty: number;
  subtotal: number;
}

export type FormDetailsData = {
  name: FormDataEntryValue | null;
}