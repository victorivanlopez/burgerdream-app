'use client'
import { useOrderStore } from '@/stores';
import type { Product } from '@prisma/client';

interface ButtonAddProductProps {
  product: Product;
}

export default function ButtonAddProduct({ product }: ButtonAddProductProps) {
  const addProductToOrder = useOrderStore((state) => state.addProductToOrder);

  return (
    <button
      type='button'
      className='flex gap-2 items-center rounded-md border bg-orangeburger-400 py-2 px-8 font-bold transition-colors hover:bg-opacity-90'
      onClick={() => addProductToOrder(product)}
    >
      <span>Agregar</span>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
      </svg>
    </button>
  )
}