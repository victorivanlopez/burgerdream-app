import {
  BtnDeleteProductOrder,
  BtnDecreaseQty,
  BtnIncreaseQty
} from '.';
import type { OrderItem } from '@/types';

interface ProductQtyProps {
  product: OrderItem;
}

export default function ProductQty({ product }: ProductQtyProps) {
  return (
    <div className='w-28 px-2 py-1 border rounded-full'>
      <div className='flex justify-between items-center'>
        {
          product.qty === 1
            ? <BtnDeleteProductOrder idProduct={product.id} />
            : <BtnDecreaseQty idProduct={product.id} />
        }

        <p>{product.qty}</p>

        <BtnIncreaseQty idProduct={product.id} />
      </div>
    </div>
  )
}