import { prisma } from '@/libs';
import { categories, products } from './data';

async function main() {
  try {
    await prisma.category.createMany({
      data: categories
    });
    await prisma.product.createMany({
      data: products
    });
  } catch (error) {
    console.log(error);
  }
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  })