import type { Category } from '@prisma/client';
import Link from 'next/link';

interface CategoryIconProps {
  category: Category;
}

export default function CategoryIcon({ category }: CategoryIconProps) {
  return (
    <Link
      href={`/order/${category.slug}`}
      className={` flex items-center gap-4 w-full border-t border-gray-200 p-3 last-of-type:border-b hover:bg-orangeburger-400 transition-colors`}
    >
      <img
        src={`/assets/icon-${category.slug}.png`}
        alt={`Icono ${category.name}`}
        width={64}
        height={64}
      />
      <span
        className='text-xl font-bold'>{category.name}
      </span>
    </Link>
  )
}