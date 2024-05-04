import { prisma } from "@/libs"

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

export default async function OrdersPage() {
  const orders = await getPendingOrders();
  return (
    <div>OrdersPage</div>
  )
}