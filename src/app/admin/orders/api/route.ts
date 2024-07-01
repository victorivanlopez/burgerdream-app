import { prisma } from '@/libs';

export async function GET() {
  const orders = await prisma.order.findMany({
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
  });

  return Response.json(orders);
}