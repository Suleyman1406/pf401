import * as React from 'react';
import type { Metadata } from 'next';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { Product } from '@prisma/client';

import { config } from '@/config';
import prisma from '@/lib/prisma';
import { CreateProductDialog } from '@/components/dashboard/products/create-product';
import { ProductsTable } from '@/components/dashboard/products/table';

export const metadata = { title: `Customers | Dashboard | ${config.site.name}` } satisfies Metadata;

export default async function Page(): Promise<React.JSX.Element> {
  const productsPromise = prisma.product.findMany({
    include: {
      category: {
        select: {
          name: true,
        },
      },
    },
    // select: {
    //   id: true,
    //   name: true,
    //   description: true,
    //   price: true,
    //   categoryId: true,
    //   category: {
    //     select: {
    //       name: true,
    //     },
    //   },
    // },
  });
  const [products, categories] = await Promise.all([productsPromise, prisma.category.findMany()]);

  const page = 0;
  const rowsPerPage = 5;

  const paginatedProducts = applyPagination(products, page, rowsPerPage);

  return (
    <Stack spacing={3}>
      <Stack direction="row" spacing={3}>
        <Stack spacing={1} sx={{ flex: '1 1 auto' }}>
          <Typography variant="h4">Products</Typography>
        </Stack>
        <div>
          <CreateProductDialog categories={categories} />
        </div>
      </Stack>
      <ProductsTable count={paginatedProducts.length} page={page} rows={products} rowsPerPage={rowsPerPage} />
    </Stack>
  );
}

function applyPagination(rows: Product[], page: number, rowsPerPage: number): Product[] {
  return rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);
}
