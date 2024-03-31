import { ButtonProduct } from '.';
import { formatToDollars } from '@/helpers';
import type { Product } from '@prisma/client';

interface ProductItemProps {
  product: Product;
}

export default function ProductItem({ product }: ProductItemProps) {

  return (
    <div className=" bg-white border border-gray-200 rounded-lg shadow md:flex-row">
      <img className="object-cover rounded-t-lg h-48 w-full md:rounded-none md:rounded-s-lg" src={`/assets/products/${product.image}.webp`} alt={`Imagenen del producto ${product.name}`} />
      <div className="p-4">
        <h5 className="text-2xl font-bold mb-4">{product.name}</h5>
        <div className='flex items-center justify-between gap-2 mb-4'>
          <span className='font-black text-2xl text-redburger-500'>{formatToDollars(product.price)}</span>
        </div>
        <ButtonProduct product={product} />
      </div>
    </div>
  )
}