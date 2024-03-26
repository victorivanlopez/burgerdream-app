import type { Category } from '@prisma/client';
import Link from 'next/link';

interface CategoryIconProps {
  category: Category;
}

export default function CategoryItem({ category }: CategoryIconProps) {
  return (
    <Link
      href={`/order/${category.slug}`}
      className={` flex items-center gap-4 xl:border-t border-gray-200 p-5 xl:p-4 xl:last-of-type:border-b xl:hover:bg-orangeburger-400 transition-colors`}
    >
      <img
        src={`/assets/icon-${category.slug}.png`}
        alt={`Icono ${category.name}`}
        className='w-8 xl:w-auto'
        width={64}
        height={64}
      />
      <span className='xl:text-xl font-bold'>{category.name}</span>
    </Link>
  )
}