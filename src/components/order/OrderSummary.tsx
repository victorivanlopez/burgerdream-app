'use client'
import { useOrderStore } from '@/stores';
import { DetailsMainContainer } from './details';

export default function OrderSummary() {

  const order = useOrderStore((state) => state.order);

  return (
    <aside className="lg:h-screen lg:overflow-y-auto lg:w-80 p-5 bg-white shadow">
      <h1 className="text-3xl text-center font-black">Mi orden</h1>

      {
        order.length === 0
          ? <p className='py-5 text-center'>No hay productos aún.</p>
          : <DetailsMainContainer />
      }
    </aside>
  )
}