import Link from "next/link";

interface PaginationProductsProps {
  currentPage: number;
  totalPages: number;
}

export default function PaginationProducts({ currentPage, totalPages }: PaginationProductsProps) {
  return (
    <nav className="flex justify-center items-center py-10">
      {
        (currentPage > 1) && (
          <Link
            href={`/admin/products?page=${currentPage - 1}`}
            className="flex items-center justify-center gap-2 px-3 py-2 text-sm font-medium bg-white border border-gray-300 rounded-lg hover:bg-gray-100 text-gray-500 transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
            </svg>
            Anterior
          </Link>
        )
      }
      {
        (currentPage < totalPages) && (
          <Link
            href={`/admin/products?page=${currentPage + 1}`}
            className="flex items-center justify-center gap-2 px-3 py-2 text-sm font-medium bg-white border border-gray-300 rounded-lg hover:bg-gray-100 text-gray-500 transition-colors"
          >
            Siguiente
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
            </svg>
          </Link>
        )
      }
    </nav>
  )
}