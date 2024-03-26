'use client'
import { Category } from '@prisma/client';
import { CategoryItem } from '.';
import { useParams } from 'next/navigation';

interface CategoryListProps {
  categories: Category[];
}

export default function CategoryList({ categories }: CategoryListProps) {

  const params = useParams<{category: string}>();
  
  return (
    <div className='flex gap-10 overflow-x-auto xl:py-0 xl:block xl:overflow-hidden'>
      {
        categories.map(category => (
          <CategoryItem
            key={category.id}
            category={category}
            currentCategory={params.category}
          />
        ))
      }
    </div>
  )
}