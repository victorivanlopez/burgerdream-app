'use server'
import { prisma } from '@/libs';
import { OrderIdSchema } from '@/schemas';

export async function completeOrder(formData: FormData) {
  const data = {
    orderId: formData.get('order-id'),
  }

  const result = OrderIdSchema.safeParse(data);

  if (result.success) {
    try {
      await prisma.order.update({
        where: {
          id: result.data.orderId
        },
        data: {
          status: true,
          orderReadyAt: new Date(Date.now())
        }
      })
    } catch (error) {
      console.log(error);
    }
  }

}