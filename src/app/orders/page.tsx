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
    <div className='p-2 md:p-4 lg:p-6'>
      <h1 className="text-center mt-20 text-3xl lg:text-6xl font-black">Ordenes listas</h1>

      <Logo />

      <div className='mt-10'>
        {
          orders.length === 0
            ? <p className='text-center'>No hay ordenes pendientes.</p>
            : <LatestOrdersList orders={orders} />
        }
      </div>
    </div>
  )
}