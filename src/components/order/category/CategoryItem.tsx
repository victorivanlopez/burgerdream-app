import Link from 'next/link';
import type { Category } from '@prisma/client';

interface CategoryIconProps {
  category: Category;
  currentCategory: string;
}

export default function CategoryItem({ category, currentCategory }: CategoryIconProps) {
  return (
    <Link
      href={`/order/${category.slug}`}
      className={`${category.slug === currentCategory ? 'bg-orangeburger-400' : ''} flex items-center gap-4 xl:border-t border-gray-200 p-5 xl:p-4 xl:last-of-type:border-b xl:hover:bg-orangeburger-400 transition-colors`}
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