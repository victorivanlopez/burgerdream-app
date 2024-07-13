import { ButtonProduct, ProductQtyContainer } from '.';
import { convertToCurrency, getImagePath } from '@/helpers';
import type { Product } from '@prisma/client';

interface ProductItemProps {
  product: Product;
}

export default function ProductItem({ product }: ProductItemProps) {

  const imagePath = getImagePath(product.image);

  return (
    <div className=" bg-white border border-gray-200 rounded-lg shadow md:flex-row">
      <img className="object-cover rounded-t-lg h-44 w-full md:rounded-none md:rounded-s-lg" src={imagePath} alt={`Imagen del producto ${product.name}`} />
      <div className="p-4">
        <h5 className="text-2xl font-bold mb-4">{product.name}</h5>
        <div className='flex items-center justify-between gap-2 mb-4'>
          <span className='font-black text-2xl text-redburger-500 py-1'>{convertToCurrency(product.price)}</span>
          <ProductQtyContainer product={product} />
        </div>
        <ButtonProduct product={product} />
      </div>
    </div>
  )
}