import { convertToCurrency } from '@/helpers';
import type { OrderWhitProducts } from '@/types';

interface OrderItemAdminProps {
  order: OrderWhitProducts
}


export default function OrderItemAdmin({ order }: OrderItemAdminProps) {
  return (
    <div className="bg-white border border-gray-200 rounded-lg shadow p-8 flex flex-col">
      <h3 className="text-2xl font-bold mb-4">{order.name}</h3>
      <p className='font-bold text-lg'>Productos ordenados: </p>
      <ul className='flex-1 pb-4'>
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

      <div className='flex items-center justify-between py-4 text-xl'>
        <p className='font-bold'>Total a pagar:</p>
        <span className='font-black'>{convertToCurrency(order.total)}</span>
      </div>

      <form>
        <input
          type="submit"
          value="Completar orden"
          className='py-2 px-8 cursor-pointer bg-orangeburger-400 text-black font-bold hover:bg-opacity-90 transition-colors rounded-md w-full'
        />
      </form>
    </div>
  )
}