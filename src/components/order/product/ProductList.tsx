import { Product } from '@prisma/client';
import { ProductItem } from '.';

interface ProductListProps {
  products: Product[];
}

export default function ProductList({ products }: ProductListProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 items-start">
      {
        products.map(product => (
          <ProductItem
            key={product.id}
            product={product}
          />
        ))
      }
    </div>
  )
}