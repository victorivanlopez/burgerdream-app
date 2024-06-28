'use client'
import { useParams, useRouter } from 'next/navigation';
import { toast } from 'react-toastify';
import { ProductSchema } from '@/schemas';
import { updateProduct } from '@/actions';

export default function EditProductForm({ children }: { children: React.ReactNode }) {

  const router = useRouter();
  const { id } = useParams();

  const handleSubmit = async (formdata: FormData) => {
    const data = {
      name: formdata.get('name'),
      price: formdata.get('price'),
      categoryId: formdata.get('categoryId'),
      image: formdata.get('image'),
    }
    const result = ProductSchema.safeParse(data);

    if (!result.success) {
      result.error.issues.forEach(issue => {
        toast.error(issue.message)
      });
      return;
    }

    const response = await updateProduct(result.data, Number(id));

    if (response?.errors) {
      response.errors.forEach(issue => {
        toast.error(issue.message);
      });
    }

    toast.success('Producto actualizado correctamente.');
    router.push('/admin/products');
  }

  return (
    <div className="bg-white mt-10 px-5 py-10 rounded-md max-w-3xl mx-auto shadow">
      <form
        className="space-y-5"
        action={handleSubmit}
      >
        {children}
        <input
          type="submit"
          className="py-2 px-8 cursor-pointer bg-orangeburger-400 text-black font-bold hover:bg-opacity-90 transition-colors rounded-md w-full"
          value="Guardar cambios"
        />
      </form>
    </div>
  )
}