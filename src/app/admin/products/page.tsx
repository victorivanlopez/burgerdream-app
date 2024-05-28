import { ProductsListAdmin } from "@/components/admin/products";
import { prisma } from "@/libs"

async function getProducts() {
  return await prisma.product.findMany();
}

export default async function ProductsPage() {
  const products = await getProducts();
  return (
    <>
      <ProductsListAdmin products={products} />
    </>
  )
}