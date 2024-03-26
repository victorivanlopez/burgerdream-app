import { create } from 'zustand';
import type { OrderItem } from '@/types';

interface OrderStore {
  order: OrderItem[];
}

export const useOrderStore = create<OrderStore>(() => ({
  order: [],
}));