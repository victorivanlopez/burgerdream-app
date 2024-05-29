import { EditIcon } from '@/components/ui/icons';
import { convertToCurrency } from '@/helpers';
import { ProductWithCategories } from '@/types';

interface ProductsListAdminProps {
  products: ProductWithCategories[];
}

export default function ProductsListAdmin({ products }: ProductsListAdminProps) {
  return (
    <div className="px-4 sm:px-6 lg:px-8 mt-10">
      <div className='relative overflow-x-auto shadow-md sm:rounded-lg'>
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 bg-white">
          <thead className='text-xs text-gray-700 uppercase bg-gray-50'>
            <tr>
              <th scope="col" className="px-6 py-3 text-sm font-semibold text-gray-900">
                Nombre del producto
              </th>
              <th scope="col" className="px-6 py-3 text-sm font-semibold text-gray-900">
                Precio
              </th>
              <th scope="col" className="px-6 py-3 text-sm font-semibold text-gray-900">
                Categoría
              </th>
              <th scope="col" className="px-6 py-3 text-sm font-semibold text-gray-900">
                Acciones
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {
              products.map(product => (
                <tr key={product.id}>
                  <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-900">
                    {product.name}
                  </td>
                  <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500">
                    {convertToCurrency(product.price)}
                  </td>
                  <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500">
                    {product.category.name}
                  </td>
                  <td className="relative whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-500">
                    <button
                      type='button'
                      className='hover:text-orangeburger-600 transition-colors'
                    >
                      <EditIcon />
                      <span className="sr-only">Editar producto {product.name}</span>
                    </button>
                  </td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    </div>
  )
}