'use server'
import { revalidatePath } from 'next/cache';
import { prisma } from '@/libs';
import { ProductSchema } from '@/schemas';
import type { FormProductData } from '@/types';

export async function updateProduct(data: FormProductData, id: number) {
  const result = ProductSchema.safeParse(data);

  if (!result.success) {
    return {
      errors: result.error.issues
    }
  }

  try {
    await prisma.product.update({
      where: {
        id
      },
      data: result.data
    });
    revalidatePath('/admin/products');
  } catch (error) {
    console.log(error);
  }
}