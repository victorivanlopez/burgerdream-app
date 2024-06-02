import { PaginationProducts, ProductsListAdmin, SearchFormProducts } from '@/components/admin/products';
import { prisma } from '@/libs';
import Link from 'next/link';
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
    <div className='px-4 sm:px-6 xl:px-8 mt-10'>
      <div className='flex flex-col lg:flex-row lg:justify-between gap-6 mb-10'>
        <SearchFormProducts />

        <Link
          href={'/admin/products/new'}
          className='py-2 px-8 cursor-pointer bg-orangeburger-400 text-black font-bold hover:bg-opacity-90 transition-colors rounded-md w-full lg:w-auto text-center'
        >
          Agregar producto
        </Link>
      </div>

      <ProductsListAdmin products={products} />

      <PaginationProducts
        currentPage={currentPage}
        totalPages={totalPages}
      />
    </div>
  )
}