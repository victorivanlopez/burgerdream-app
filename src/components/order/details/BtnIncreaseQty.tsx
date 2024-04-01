'use client'
import { useOrderStore } from '@/stores';
import { PlusIcon } from '@/components/ui/icons';
import type { Product } from '@prisma/client';

interface BtnIncreaseQtyProps {
  idProduct: Product['id'];
}

export default function BtnIncreaseQty({ idProduct }: BtnIncreaseQtyProps) {

  const increaseQty = useOrderStore(state => state.increaseQty);

  return (
    <button
      type='button'
      onClick={() => increaseQty(idProduct)}
    >
      <PlusIcon />
    </button>
  )
}