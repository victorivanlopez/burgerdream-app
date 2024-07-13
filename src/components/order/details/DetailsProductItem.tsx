import { ProductQty } from '../product';
import { convertToCurrency } from '@/helpers';
import type { OrderItem } from '@/types';

interface OrderDetailsItemProps {
  product: OrderItem;
}

export default function DetailsProductItem({ product }: OrderDetailsItemProps) {
  return (
    <div className='bg-white border p-4 space-y-4'>
      <div className='flex justify-between'>
        <h5 className='font-bold'>{product.name}</h5>
        <span className='text-redburger-500 font-black'>{convertToCurrency(product.price)}</span>
      </div>

      <ProductQty product={product} />

      <div className='flex justify-between text-sm'>
        <p className='font-bold'>Subtotal:</p>
        <span>{convertToCurrency(product.subtotal)}</span>
      </div>
    </div>
  )
}