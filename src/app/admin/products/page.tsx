import { PaginationProducts, ProductsListAdmin } from '@/components/admin/products';
import { prisma } from '@/libs';
import { redirect } from 'next/navigation';

async function getProductsCount() {
  return await prisma.product.count();
}

async function getProducts(currentPage: number, pageSize: number) {
  const skip = (currentPage - 1) * pageSize;

  return await prisma.product.findMany({
    take: pageSize,
    skip,
    include: {
      category: true
    }
  });
}

export default async function ProductsPage({ searchParams }: {
  searchParams: { page: string }
}) {
  const currentPage = Number(searchParams.page) || 1;
  const pageSize = 10;

  if (currentPage < 0) redirect('/admin/products');

  const productsData = getProducts(currentPage, pageSize);
  const totalProductsData = getProductsCount();

  const [products, totalProducts] = await Promise.all([productsData, totalProductsData]);
  const totalPages = Math.ceil(totalProducts / pageSize);

  if (currentPage > totalPages) redirect('/admin/products');

  return (
    <>
      <ProductsListAdmin products={products} />

      <PaginationProducts
        currentPage={currentPage}
        totalPages={totalPages}
      />
    </>
  )
}