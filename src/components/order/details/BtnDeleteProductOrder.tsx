'use client'
import { useOrderStore } from '@/stores';
import { TrashIcon } from '@/components/ui/icons';
import type { Product } from '@prisma/client';

interface BtnDeleteProductOrderProps {
  idProduct: Product['id'];
}

export default function BtnDeleteProductOrder({ idProduct }: BtnDeleteProductOrderProps) {

  const deleteProductOrder = useOrderStore(state => state.deleteProductOrder);

  return (
    <button
      type='button'
      onClick={() => deleteProductOrder(idProduct)}
    >
      <TrashIcon />
    </button>
  )
}