import { StateCreator, create } from 'zustand';
import { devtools } from 'zustand/middleware';
import type { Product } from '@prisma/client';
import type { OrderItem } from '@/types';

interface OrderStore {
  order: OrderItem[];
  isProductInOrder: (product: Product) => boolean;
  orderTotal: () => number;
  addProductToOrder: (product: Product) => void;
  increaseQty: (idProduct: Product['id']) => void;
  decreaseQty: (idProduct: Product['id']) => void;
  deleteProductOrder: (idProduct: Product['id']) => void;
}

const storeAPI: StateCreator<OrderStore, [['zustand/devtools', never]]> = (set, get) => ({
  order: [],

  isProductInOrder: (product: Product) => get().order.some(item => item.id === product.id),

  orderTotal: () => get().order.reduce((total, item) => total + item.subtotal, 0),

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

  increaseQty: (idProduct: Product['id']) => {
    const order = get().order.map(item => {
      return item.id === idProduct
        ? { ...item, qty: item.qty + 1, subtotal: item.price * (item.qty + 1) }
        : item
    });

    set({ order }, false, 'increaseQty');
  },

  decreaseQty: (idProduct: Product['id']) => {
    const order = get().order.map(item => {
      return item.id === idProduct && item.qty > 1
        ? { ...item, qty: item.qty - 1, subtotal: item.price * (item.qty - 1) }
        : item
    });

    set({ order }, false, 'decreaseQty');
  },

  deleteProductOrder: (idProduct: Product['id']) => {
    const order = get().order.filter(item => item.id !== idProduct);
    set({ order }, false, 'deleteProductOrder');
  },
})

export const useOrderStore = create<OrderStore>()(
  devtools(
    storeAPI
  )
);