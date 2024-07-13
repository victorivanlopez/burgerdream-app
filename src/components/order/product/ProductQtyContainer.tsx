'use client'
import { useOrderStore } from '@/stores';
import { Product } from '@prisma/client';
import ProductQty from './ProductQty';

interface ProductQtyContainerProps {
  product: Product;
}

export default function ProductQtyContainer({ product }: ProductQtyContainerProps) {
  const productInOrder = useOrderStore(state => state.getProductInOrder(product.id));

  return (
    <>
      {
        productInOrder && (
          <ProductQty product={productInOrder} />
        )
      }
    </>
  )
}