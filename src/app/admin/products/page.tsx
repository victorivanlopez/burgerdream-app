import { ProductsListAdmin } from "@/components/admin/products";
import { prisma } from "@/libs"

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

  const products = await getProducts(currentPage, pageSize);

  return (
    <>
      <ProductsListAdmin products={products} />
    </>
  )
}