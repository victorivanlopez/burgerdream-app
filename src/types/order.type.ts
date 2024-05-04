import { Product, Prisma } from '@prisma/client';

export type OrderItem = Pick<Product, 'id' | 'name' | 'price'> & {
  qty: number;
  subtotal: number;
}

export type FormDetailsData = {
  name: FormDataEntryValue | null;
}

export type OrderWhitProducts =
  Prisma.OrderGetPayload<{
    include: {
      products: {
        include: {
          product: true
        }
      }
    }
  }>