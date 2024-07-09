import { notFound } from 'next/navigation';
import { EditProductForm, ProductForm } from '@/components/admin/products';
import { prisma } from '@/libs';
import GoBackButton from '@/components/ui/GoBackButton';

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
    <>
      <GoBackButton 
        btnText='Volver a Productos' 
      />

      <h1 className="text-xl font-bold">Editando producto: {product.name}</h1>

      <EditProductForm>
        <ProductForm product={product} />
      </EditProductForm>
    </>
  )
}
