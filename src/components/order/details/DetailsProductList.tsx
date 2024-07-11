import { DetailsProductItem } from '.';
import type { OrderItem } from '@/types';

interface OrderDetailsListProps {
  order: OrderItem[];
}

export default function DetailsProductList({ order }: OrderDetailsListProps) {
  return (
    <div className='pt-5 grid grid-cols-1'>
      {
        order.map(product => (
          <DetailsProductItem
            key={product.id}
            product={product} />
        ))
      }
    </div>
  )
}