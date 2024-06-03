
export default function SearchFormProducts() {
  return (
    <form className="flex items-center">
      <input
        type="text"
        placeholder="Buscar producto"
        className="p-2.5 text-sm border border-r-0 border-gray-200 placeholder-gray-400 focus:outline-none focus:border-orangeburger-200 w-full rounded-l-md"
        name="search"
      />
      <button
        type="submit"
        className="flex justify-center items-center gap-2 py-2.5 px-4 border border-l-0 border-orangeburger-400 rounded-r-md cursor-pointer bg-orangeburger-400 text-black font-bold hover:bg-opacity-90 transition-colors"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
          <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
        </svg>
        <span className="sr-only">Buscar</span>
      </button>
    </form>
  )
}