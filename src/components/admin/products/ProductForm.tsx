import { prisma } from '@/libs';

async function getCategories() {
  return prisma.category.findMany();
}

export default async function ProductForm() {
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
        />
      </div>

      <div className="space-y-2">
        <label
          className="font-bold"
          htmlFor="price"
        >Precio</label>
        <input
          id="price"
          name="price"
          className="p-2.5 text-sm border border-gray-200 bg-[#FCFDFE] focus:outline-none focus:border-orangeburger-200 w-full rounded-l-md"
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
        >
          <option value="" disabled selected>-- Seleccione --</option>
          {
            categories.map(category => (
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
    </>
  )
}