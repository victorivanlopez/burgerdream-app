import { ProductList } from '@/components/order/product';
import { prisma } from '@/libs';

interface CategoryParams {
  params: {
    category: string;
  }
}

async function getProducts(category: string) {
  return await prisma.product.findMany({
    where: {
      category: {
        slug: category
      }
    }
  });
}

export default async function CategoryPage({ params }: CategoryParams) {
  const products = await getProducts(params.category);
  return (
    <div className='my-5'>
      <ProductList products={products} />
    </div>
  )
}