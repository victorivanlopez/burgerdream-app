
export default function EditProductForm({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-white mt-10 px-5 py-10 rounded-md max-w-3xl mx-auto shadow">
      <form
        className="space-y-5"
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