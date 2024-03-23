import { Category } from '@prisma/client';
import { CategoryIcon } from '.';

interface CategoryListProps {
  categories: Category[];
}

export default function CategoryList({ categories }: CategoryListProps) {
  return (
    <>
      {
        categories.map(category => (
          <CategoryIcon
            key={category.id}
            category={category}
          />
        ))
      }
    </>
  )
}