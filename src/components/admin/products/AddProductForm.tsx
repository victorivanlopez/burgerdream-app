import ProductForm from "./ProductForm";

export default function AddProductForm() {
  return (
    <div className="bg-white mt-10 px-5 py-10 rounded-md max-w-3xl mx-auto shadow">
      <form
        className="space-y-5"
      >
        <ProductForm />
        <input
          type="submit"
          className="py-2 px-8 cursor-pointer bg-orangeburger-400 text-black font-bold hover:bg-opacity-90 transition-colors rounded-md w-full"
          value="Crear producto"
        />
      </form>
    </div>
  )
}