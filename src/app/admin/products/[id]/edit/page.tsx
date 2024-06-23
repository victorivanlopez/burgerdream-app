import { prisma } from '@/libs';
import { notFound } from 'next/navigation';

async function getProductById(id: number) {
  try {
    const product = await prisma.product.findUnique({
      where: {
        id
      },
      include: {
        category: true
      }
    });

    if (!product) undefined;

    return product;

  } catch (error) {
    console.log(error);
    throw new Error('Error en el servidor');
  }
}

export default async function EditProductPage({ params }: { params: { id: string } }) {
  const product = await getProductById(Number(params.id));

  if (!product) {
    notFound();
  }

  return (
    <div>EditProductPage</div>
  )
}
