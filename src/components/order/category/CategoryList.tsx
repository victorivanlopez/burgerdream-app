import { Category } from '@prisma/client';
import { CategoryItem } from '.';

interface CategoryListProps {
  categories: Category[];
}

export default function CategoryList({ categories }: CategoryListProps) {
  return (
    <>
      {
        categories.map(category => (
          <CategoryItem
            key={category.id}
            category={category}
          />
        ))
      }
    </>
  )
}