import { prisma } from '@/libs';
import { CategoryList } from './category';

async function getCategories() {
  return await prisma.category.findMany();
}

export default async function OrderSidebar() {
  const categories = await getCategories();

  return (
    <aside className="md:w-72 md:h-screen bg-white">
      <nav className='mt-10'>
        <CategoryList categories={categories} />
      </nav>
    </aside>
  )
}