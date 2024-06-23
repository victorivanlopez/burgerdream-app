import Link from 'next/link';

export default function NotFoundProduct() {
  return (
    <div className='mt-20 text-center'>
      <h2 className='text-2xl font-black mb-5'>Producto no encontrado</h2>
      <Link
        className='py-2 px-8 cursor-pointer bg-orangeburger-400 text-black font-bold hover:bg-opacity-90 transition-colors rounded-md w-full lg:w-auto text-center'
        href="/admin/products"
      >
        Regresar a productos
      </Link>
    </div>
  )
}