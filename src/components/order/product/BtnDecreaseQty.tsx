'use client'
import { useOrderStore } from '@/stores';
import { MinusIcon } from '@/components/ui/icons';
import type { Product } from '@prisma/client';

interface BtnDecreaseQtyProps {
  idProduct: Product['id'];
}

export default function BtnDecreaseQty({ idProduct }: BtnDecreaseQtyProps) {

  const decreaseQty = useOrderStore(state => state.decreaseQty);

  return (
    <button
      type='button'
      onClick={() => decreaseQty(idProduct)}
    >
      <MinusIcon />
    </button>
  )
}