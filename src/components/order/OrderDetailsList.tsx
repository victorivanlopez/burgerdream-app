import { OrderItem } from '@/types';

interface OrderDetailsListProps {
  order: OrderItem[];
}

export default function OrderDetailsList({ order }: OrderDetailsListProps) {
  return (
    <div className='py-5 grid grid-cols-1 gap-2'>
      OrderDetailList
    </div>
  )
}