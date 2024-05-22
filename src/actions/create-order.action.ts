'use server'
import { prisma } from '@/libs';
import { OrderSchema } from '@/schemas';
import { FormDetailsData } from '@/types';

export async function createOrder(data: FormDetailsData) {
  const result = OrderSchema.safeParse(data);

  if (!result.success) {
    return {
      errors: result.error.issues
    }
  }

  try {
    await prisma.order.create({
      data: {
        name: result.data.name,
        total: result.data.total,
        products: {
          create: result.data.order.map(product => ({
            productId: product.id,
            qty: product.qty
          }))
        }
      }
    })
  } catch (error) {
    console.log(error);
  }
}