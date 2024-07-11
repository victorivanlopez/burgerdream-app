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
    <div className='w-24 p-2 border rounded-full my-4'>
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