import { StateCreator, create } from 'zustand';
import { devtools } from 'zustand/middleware';
import type { Product } from '@prisma/client';
import type { OrderItem } from '@/types';

interface OrderStore {
  order: OrderItem[];
  addProductToOrder: (product: Product) => void;
}

const storeAPI: StateCreator<OrderStore, [['zustand/devtools', never]]> = (set) => ({
  order: [],

  addProductToOrder: (product: Product) => {
    const { id, name, price } = product;
    const newProduct = {
      id,
      name,
      price,
      qty: 1,
      subtotal: 1 * price,
    }

    set(state => ({
      order: [...state.order, newProduct]
    }), false, 'addProductToOrder');
  },
})

export const useOrderStore = create<OrderStore>()(
  devtools(
    storeAPI
  )
);