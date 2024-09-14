import * as React from 'react';
import type { Metadata } from 'next';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { Category } from '@prisma/client';

import { config } from '@/config';
import prisma from '@/lib/prisma';
import { CreateCategoryDialog } from '@/components/dashboard/categories/create-dialog';
import { CategoriesTable } from '@/components/dashboard/categories/table';

export const metadata = { title: `Customers | Dashboard | ${config.site.name}` } satisfies Metadata;

export default async function Page(): Promise<React.JSX.Element> {
  const categories = await prisma.category.findMany();
  const page = 0;
  const rowsPerPage = 5;

  const paginatedCategories = applyPagination(categories, page, rowsPerPage);

  return (
    <Stack spacing={3}>
      <Stack direction="row" spacing={3}>
        <Stack spacing={1} sx={{ flex: '1 1 auto' }}>
          <Typography variant="h4">Categories</Typography>
        </Stack>
        <div>
          <CreateCategoryDialog />
        </div>
      </Stack>
      <CategoriesTable
        count={paginatedCategories.length}
        page={page}
        rows={paginatedCategories}
        rowsPerPage={rowsPerPage}
      />
    </Stack>
  );
}

function applyPagination(rows: Category[], page: number, rowsPerPage: number): Category[] {
  return rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);
}
