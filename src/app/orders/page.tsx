'use client'
import useSWR from 'swr';
import { Logo, Spinner } from '@/components/ui';
import type { OrderWhitProducts } from '@/types';
import { LatestOrdersList } from '@/components/orders';

const url = '/orders/api';
const fetcher = () => fetch(url).then(res => res.json()).then(data => data);

export default function OrdersPage() {
  const { data: orders, isLoading } = useSWR<OrderWhitProducts[]>(url, fetcher);

  if (isLoading) return <Spinner />

  if (orders) return (
    <div className='px-2 md:px-6 py-4 lg:py-8'>
      <Logo />

      <h1 className="text-center mt-5 text-4xl lg:text-6xl font-black">Ordenes listas</h1>

      <div className='mt-5 md:mt-10'>
        {
          orders.length === 0
            ? <p className='text-center'>No hay ordenes pendientes.</p>
            : <LatestOrdersList orders={orders} />
        }
      </div>
    </div>
  )
}