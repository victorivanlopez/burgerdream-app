import { convertToCurrency } from '@/helpers';
import type { OrderWhitProducts } from '@/types';

interface LatestOrderItemProps {
  order: OrderWhitProducts;
}

export default function LatestOrderItem({ order }: LatestOrderItemProps) {
  return (
    <div className="bg-white border border-gray-200 rounded-lg shadow p-8 flex flex-col">
      <div className='flex flex-col-reverse md:flex-row md:justify-between mb-4'>
        <h3 className="text-2xl font-bold">{order.name}</h3>
        <p className='text-lg'>Orden #{order.id}</p>
      </div>
      <p className='font-bold text-lg'>Productos ordenados: </p>
      <ul className='flex-1'>
        {
          order.products.map(product => (
            <li
              key={product.id}
              className="flex items-center gap-2 py-2 border-b-2 border-gray-100 last-of-type:border-b-0">
              {product.product.name}
              <span className='font-bold text-sm'>({product.qty})</span>
            </li>
          ))
        }
      </ul>
    </div>
  )
}