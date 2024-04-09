import { OrderItem } from '@/types';
import { ProductItemDetails } from '.';

interface OrderDetailsListProps {
  order: OrderItem[];
}

export default function ProductListDetails({ order }: OrderDetailsListProps) {
  return (
    <div className='pt-5 grid grid-cols-1'>
      {
        order.map(product => (
          <ProductItemDetails
            key={product.id}
            product={product} />
        ))
      }
    </div>
  )
}