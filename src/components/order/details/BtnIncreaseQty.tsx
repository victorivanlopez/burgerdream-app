'use client'
import { PlusIcon } from '@/components/ui/icons';
import { useOrderStore } from '@/stores';
import { Product } from '@prisma/client';

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