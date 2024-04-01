import {
  BtnDecreaseQty,
  BtnDeleteProductOrder,
  BtnIncreaseQty
} from '.';
import { formatToDollars } from '@/helpers';
import type { OrderItem } from '@/types';

interface OrderDetailsItemProps {
  product: OrderItem;
}

export default function DetailsProductItem({ product }: OrderDetailsItemProps) {
  return (
    <div className='bg-white border p-4'>
      <div className='flex justify-between'>
        <h5 className='font-bold'>{product.name}</h5>
        <span className='text-redburger-500 font-black'>{formatToDollars(product.price)}</span>
      </div>

      <div className='w-24 p-2 border rounded-full my-4'>
        <div className='flex justify-between items-center'>
          {
            product.qty === 1
              ? <BtnDeleteProductOrder />
              : <BtnDecreaseQty idProduct={product.id} />
          }

          <p>{product.qty}</p>

          <BtnIncreaseQty idProduct={product.id} />
        </div>
      </div>

      <div className='flex justify-between text-sm'>
        <p className='font-bold'>Subtotal:</p>
        <span>{formatToDollars(product.subtotal)}</span>
      </div>
    </div>
  )
}