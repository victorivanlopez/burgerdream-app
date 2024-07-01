'use client'
import useSWR from 'swr';
import { OrderListAdmin } from '@/components/admin/order';
import { Spinner } from '@/components/ui';
import type { OrderWhitProducts } from '@/types';

const url = '/admin/orders/api';
const fetcher = () => fetch(url).then(res => res.json()).then(data => data);

export default function OrdersPage() {
  const { data: orders, error, isLoading } = useSWR<OrderWhitProducts[]>(url, fetcher);

  if (isLoading) return <Spinner />

  if (orders) return (
    <>
      <h1 className="text-xl font-bold mb-5">Administrar ordenes</h1>

      <div className='mt-5'>
        {
          orders.length === 0
            ? <p>No hay ordenes pendientes.</p>
            : <OrderListAdmin orders={orders} />
        }
      </div>
    </>
  )
}