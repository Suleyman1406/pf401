'use client';

import { ShoppingCartIcon } from 'lucide-react';

import { useCartModal } from '@/hooks/use-cart-modal';

import { Button } from '../ui/button';

export const CartButton = () => {
  const { open } = useCartModal();

  return (
    <Button onClick={open} variant="ghost" size={'sm'}>
      <ShoppingCartIcon />
    </Button>
  );
};
