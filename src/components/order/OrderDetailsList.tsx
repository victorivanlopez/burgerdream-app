import { OrderItem } from '@/types';
import { OrderDetailsItem } from '.';

interface OrderDetailsListProps {
  order: OrderItem[];
}

export default function OrderDetailsList({ order }: OrderDetailsListProps) {
  return (
    <div className='py-5 grid grid-cols-1'>
      {
        order.map(product => (
          <OrderDetailsItem
            key={product.id}
            product={product} />
        ))
      }
    </div>
  )
}