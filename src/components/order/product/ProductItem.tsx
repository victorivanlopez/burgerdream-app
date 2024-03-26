import { formatToDollars } from '@/helpers';
import { Product } from '@prisma/client';

interface ProductItemProps {
  product: Product;
}
export default function ProductItem({ product }: ProductItemProps) {
  return (
    <div className=" bg-white border border-gray-200 rounded-lg shadow md:flex-row">
      <img className="object-cover rounded-t-lg h-52 w-full md:rounded-none md:rounded-s-lg" src={`/assets/products/${product.image}.webp`} alt={`Imagenen del producto ${product.name}`} />
      <div className="p-4">
        <h5 className="text-2xl font-bold mb-5">{product.name}</h5>
        <div className='flex items-center justify-between gap-2'>
          <span className='font-black text-2xl text-redburger-500'>{formatToDollars(product.price)}</span>
          <button
            type='button'
            className='rounded-md border bg-orange-400 py-2 px-8 text-white font-bold transition-colors hover:bg-opacity-90'
          >
            Agregar
          </button>
        </div>
      </div>
    </div>
  )
}