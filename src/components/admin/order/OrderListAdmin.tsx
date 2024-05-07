import OrderItemAdmin from './OrderItemAdmin';
import type { OrderWhitProducts } from '@/types';

interface OrderListProps {
  orders: OrderWhitProducts[]
}

export default function OrderListAdmin({ orders }: OrderListProps) {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-6'>
      {
        orders.map(order => (
          <OrderItemAdmin
            key={order.id}
            order={order}
          />
        ))
      }
    </div>
  )
}