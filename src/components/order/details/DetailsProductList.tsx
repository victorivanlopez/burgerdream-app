import { OrderItem } from '@/types';
import { DetailsProductItem } from '.';

interface OrderDetailsListProps {
  order: OrderItem[];
}

export default function DetailsProductList({ order }: OrderDetailsListProps) {
  return (
    <div className='py-5 grid grid-cols-1'>
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