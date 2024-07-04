import type { OrderWhitProducts } from '@/types';
import LatestOrderItem from './LatestOrderItem';

interface LatestOrdersListProps {
  orders: OrderWhitProducts[];
}

export default function LatestOrdersList({ orders }: LatestOrdersListProps) {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-6'>
      {
        orders.map(order => (
          <LatestOrderItem
            key={order.id}
            order={order}
          />
        ))
      }
    </div>
  )
}