import { Product } from "@/app/types";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Image from "next/image";

const ProductTable = ({ products }: { products: Product[] }) => {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="">Id</TableHead>
          <TableHead>Image</TableHead>
          <TableHead>Title</TableHead>
          <TableHead>Price</TableHead>
          <TableHead>Description</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {products.map((p) => (
          <TableRow key={p.id}>
            <TableCell className="font-medium">{p.id}</TableCell>
            <TableCell>
              <Image
                width={100}
                height={100}
                src={p.imageUrl}
                alt={`Product ${p.title}`}
              />
            </TableCell>
            <TableCell>{p.title}</TableCell>
            <TableCell>{p.price}</TableCell>
            <TableCell>{p.description}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default ProductTable;
