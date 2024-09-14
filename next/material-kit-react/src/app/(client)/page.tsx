import { type } from 'os';

import { SortOrder } from '@/types';
import prisma from '@/lib/prisma';
import { Product } from '@/components/common/product';

type Props = {
  searchParams: {
    sort: SortOrder;
    [key: string]: string;
  };
};
export default async function Page({ searchParams }: Props) {
  const orderBy: Record<string, string> = {};
  const { sort, ...filters } = searchParams;
  if (sort) {
    const searchKey = sort.split('_')[0];
    const searchValue = sort.split('_')[1];
    orderBy[searchKey] = searchValue;
  }

  const filter: Record<string, any> = {};

  Object.keys(filters).forEach((key) => {
    filter[key] = {
      id: {
        in: Array.isArray(filters[key]) ? filters[key] : [filters[key]],
      },
    };
  });

  const products = await prisma.product.findMany({
    where: { ...filter },
    orderBy,
  });

  return (
    <section
      id="Projects"
      className="w-fit mx-auto grid grid-cols-1 xl:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-8 mb-5"
    >
      {products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </section>
  );
}
