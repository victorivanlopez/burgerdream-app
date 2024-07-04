import { prisma } from '@/libs';

export async function GET() {
  const orders = await prisma.order.findMany({
    take: 5,
    where: {
      orderReadyAt: {
        not: null
      }
    },
    orderBy: {
      orderReadyAt: 'desc'
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