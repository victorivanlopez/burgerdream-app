import { prisma } from '@/libs';
import { CategoryList } from './category';

async function getCategories() {
  return await prisma.category.findMany();
}

export default async function OrderSidebar() {
  const categories = await getCategories();

  return (
    <aside className="xl:w-64 xl:h-screen bg-white shadow">
      <nav className='mt-10'>
        <CategoryList categories={categories} />
      </nav>
    </aside>
  )
}