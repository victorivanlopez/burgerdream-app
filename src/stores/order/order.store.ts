import { StateCreator, create } from 'zustand';
import { devtools } from 'zustand/middleware';
import type { Product } from '@prisma/client';
import type { OrderItem } from '@/types';

interface OrderStore {
  order: OrderItem[];
  isProductInOrder: (product: Product) => boolean;
  addProductToOrder: (product: Product) => void;
}

const storeAPI: StateCreator<OrderStore, [['zustand/devtools', never]]> = (set, get) => ({
  order: [],

  isProductInOrder: (product: Product) => get().order.some(item => item.id === product.id),

  addProductToOrder: (product: Product) => {
    const { id, name, price } = product;

    const newProduct: OrderItem = {
      id,
      name,
      price,
      qty: 1,
      subtotal: price
    }
    set((state) => ({ order: [...state.order, newProduct] }), false, 'addProductToOrder');
  },
})

export const useOrderStore = create<OrderStore>()(
  devtools(
    storeAPI
  )
);