'use client'
import { useOrderStore } from '@/stores';
import { MinusIcon, PlusIcon } from '@/components/ui/icons';
import type { Product } from '@prisma/client';

interface ButtonProductProps {
  product: Product;
}

export default function ButtonProduct({ product }: ButtonProductProps) {
  const addProductToOrder = useOrderStore((state) => state.addProductToOrder);
  const deleteProductOrder = useOrderStore(state => state.deleteProductOrder);
  const isProductInOrder = useOrderStore(state => state.isProductInOrder(product));

  const onClickButton = () => {
    if (isProductInOrder) {
      deleteProductOrder(product.id);
    } else {
      addProductToOrder(product);
    }
  }

  return (
    <button
      type='button'
      className={`${isProductInOrder ? 'bg-redburger-100 text-redburger-500' : 'bg-orangeburger-400 text-black'} flex justify-center gap-2 items-center rounded-md py-2 px-8 font-bold hover:bg-opacity-90 transition-colors w-full`}
      onClick={onClickButton}
    >
      <span>
        {
          isProductInOrder
            ? 'Eliminar de orden'
            : 'Agregar a orden'
        }
      </span>
      {
        isProductInOrder
          ? <MinusIcon />
          : <PlusIcon />
      }
    </button>
  )
}