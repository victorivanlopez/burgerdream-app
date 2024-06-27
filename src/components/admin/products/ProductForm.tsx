import { prisma } from '@/libs';
import ImageUpload from './ImageUpload';
import { Product } from '@prisma/client';

async function getCategories() {
  try {
    return prisma.category.findMany();
  } catch (error) {
    console.log(error);
    throw new Error('Hubo un error en el servidor');
  }
}

interface ProductFormProps {
  product?: Product;
}

export default async function ProductForm({ product }: ProductFormProps) {

  const categories = await getCategories();

  return (
    <>
      <div className="space-y-2">
        <label
          className="font-bold"
          htmlFor="name"
        >Nombre del producto</label>
        <input
          id="name"
          type="text"
          name="name"
          className="p-2.5 text-sm border border-gray-200 bg-[#FCFDFE] focus:outline-none focus:border-orangeburger-200 w-full rounded-l-md"
          defaultValue={product?.name}
        />
      </div>

      <div className="space-y-2">
        <label
          className="font-bold"
          htmlFor="price"
        >Precio</label>
        <input
          id="price"
          type='number'
          name="price"
          className="p-2.5 text-sm border border-gray-200 bg-[#FCFDFE] focus:outline-none focus:border-orangeburger-200 w-full rounded-l-md"
          defaultValue={product?.price}
        />
      </div>

      <div className="space-y-2">
        <label
          className="font-bold"
          htmlFor="categoryId"
        >Categoría</label>
        <select
          className="p-2.5 text-sm border border-gray-200 bg-[#FCFDFE] focus:outline-none focus:border-orangeburger-200 w-full rounded-l-md"
          id="categoryId"
          name="categoryId"
          defaultValue={product?.categoryId}
        >
          <option value="">-- Seleccione --</option>
          {
            categories?.map(category => (
              <option
                key={category.id}
                value={category.id}
              >
                {category.name}
              </option>
            ))
          }
        </select>
      </div>

      <ImageUpload image={product?.image} />
    </>
  )
}