import { ProductsListAdmin, SearchFormProducts } from "@/components/admin/products";
import { prisma } from "@/libs";

async function searchProducts(searchTerm: string) {
  try {
    return await prisma.product.findMany({
      where: {
        name: {
          contains: searchTerm,
          mode: 'insensitive'
        }
      },
      include: {
        category: true
      }
    })
  } catch (error) {
    console.log(error);
    throw new Error('Hubo un error en el servidor');
  }
}

export default async function SearchProductsPage({ searchParams }: {
  searchParams: { search: string }
}) {
  const products = await searchProducts(searchParams.search);
  return (
    <>
      <div className='px-4 sm:px-6 xl:px-8 mt-10'>
        <div className='flex flex-col lg:flex-row lg:justify-between gap-6 mb-10'>
          <SearchFormProducts />
        </div>

        {
          products.length === 0
            ? <p>No hay resultados para tu búsqueda.</p>
            : <ProductsListAdmin products={products} />
        }
      </div>
    </>
  )
}