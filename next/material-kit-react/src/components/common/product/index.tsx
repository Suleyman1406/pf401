import React from 'react';
import { Product as PrismaProduct } from '@prisma/client';

import { AddToCartButton } from '../AddToCartButton';

export const Product = ({ product }: { product: PrismaProduct }) => {
  return (
    <div>
      <div className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
        <a href="#">
          <img src={product.imageUrl} alt={product.name} className="h-80 w-72 object-cover rounded-t-xl" />
          <div className="px-4 py-3 w-72">
            <span className="text-gray-400 mr-3 uppercase text-xs">Brand</span>
            <p className="text-lg font-bold text-black truncate block capitalize">{product.name}</p>
            <div className="flex items-center">
              <p className="text-lg font-semibold text-black cursor-auto my-3">${product.price}</p>
              <del>
                <p className="text-sm text-gray-600 cursor-auto ml-2">${parseInt(String(product.price * 1.2))}</p>
              </del>
              <AddToCartButton productId={product.id} />
            </div>
          </div>
        </a>
      </div>
    </div>
  );
};
