import { AddProductForm, ProductForm } from '@/components/admin/products';
import { GoBackButton } from '@/components/ui';

export default function NewProductPage() {
  return (
    <>
      <h1 className="text-xl font-bold">Nuevo Producto</h1>

      <GoBackButton />

      <AddProductForm>
        <ProductForm />
      </AddProductForm>
    </>
  )
}