import { Copy } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  title: string;
  imageUrl: string;
  description: string;
  price: number;
};

export function CreateProductModal() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Create Product</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Create Product</DialogTitle>
        </DialogHeader>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="my-4 flex flex-col gap-y-6"
        >
          <div className="flex flex-col gap-2">
            <Label>Product Title</Label>
            <Input {...register("title")} placeholder="Type here" />
          </div>
          <div className="flex flex-col gap-2">
            <Label>Product Price</Label>
            <Input
              {...register("price")}
              type="number"
              placeholder="Type here"
            />
          </div>
          <div className="flex flex-col gap-2">
            <Label>Image URL</Label>
            <Input {...register("imageUrl")} placeholder="Type here" />
          </div>
          <div className="flex flex-col gap-2">
            <Label>Description</Label>
            <Textarea {...register("description")} placeholder="Type here" />
          </div>
          <DialogFooter className="justify-end">
            <Button type="submit" variant="default">
              Create
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
