'use server'
import { prisma } from '@/libs';
import { ProductSchema } from '@/schemas';
import type { FormProductData } from '@/types';

export async function createProduct(data: FormProductData) {
  const result = ProductSchema.safeParse(data);

  if (!result.success) {
    return {
      errors: result.error.issues
    }
  }

  try {
    await prisma.product.create({
      data: result.data
    })
  } catch (error) {
    console.log(error);
  }
}