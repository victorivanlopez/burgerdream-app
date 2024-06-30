
import { revalidatePath } from 'next/cache';
import { OrderListAdmin } from '@/components/admin/order';
import { prisma } from '@/libs';

async function getPendingOrders() {
  return await prisma.order.findMany({
    where: {
      status: false
    },
    include: {
      products: {
        include: {
          product: true
        }
      }
    }
  })
}

const refreshOrders = async () => {
  'use server'
  revalidatePath('/admin/orders');
}

export default async function OrdersPage() {
  const orders = await getPendingOrders();
  return (
    <>
      <h1 className="text-xl font-bold mb-5">Administrar ordenes</h1>
      <form
        action={refreshOrders}
      >
        <input
          type="submit"
          value="Actualizar ordenes"
          className='py-2 px-8 cursor-pointer bg-orangeburger-400 text-black font-bold hover:bg-opacity-90 transition-colors rounded-md w-full lg:w-auto text-center'
        />
      </form>

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