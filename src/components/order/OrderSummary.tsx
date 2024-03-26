'use client'
import { useOrderStore } from '@/stores';

export default function OrderSummary() {

  const order = useOrderStore((state) => state.order);

  return (
    <aside className="lg:h-screen lg:overflow-y-auto md:w-64 lg:w-80 p-5 bg-white shadow">
      <h1 className="text-3xl text-center font-black">Mi pedido</h1>

      {
        order.length === 0
          ? <p className='py-5 text-center'>No hay productos en el pedido.</p>
          : <p>Se seleccionó algo.</p>
      }
    </aside>
  )
}