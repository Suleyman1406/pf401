import React, { PropsWithChildren } from 'react';
import { redirect } from 'next/navigation';
import { auth, clerkClient } from '@clerk/nextjs/server';

import { SafeCart } from '@/types';
import prisma from '@/lib/prisma';
import Cart from '@/components/common/cart';
import { Header } from '@/components/common/header';

import TableLayout from './_components/filter';

const ClientLayout = async ({ children }: PropsWithChildren) => {
  const { userId, sessionId } = auth();
  const categories = await prisma.category.findMany();
  const user = await prisma.user.findUnique({
    where: {
      externalId: userId!,
    },
  });
  if (!user) {
    console.log('User not found');

    clerkClient().sessions.revokeSession(sessionId!);
  }

  const cart = await prisma.cart.findUnique({
    where: {
      userId: user!.id,
    },
    include: {
      items: {
        include: {
          product: true,
        },
      },
    },
  });
  return (
    <>
      <Header />
      <Cart cart={cart as SafeCart} />
      <TableLayout categories={categories}>{children}</TableLayout>
    </>
  );
};

export default ClientLayout;
