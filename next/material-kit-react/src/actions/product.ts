'use server';

import { revalidatePath } from 'next/cache';
import { Product } from '@prisma/client';

import { paths } from '@/paths';
import prisma from '@/lib/prisma';

type Props = Omit<Product, 'id' | 'createdAt' | 'updatedAt'>;

export async function createProduct(data: Props) {
  const product = await prisma.product.create({
    data,
  });
  revalidatePath(paths.dashboard.products);
  return product;
}
