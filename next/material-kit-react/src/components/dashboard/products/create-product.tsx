'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { UploadButton } from '@/utils/uploadthing';
import { zodResolver } from '@hookform/resolvers/zod';
import MuiButton from '@mui/material/Button';
import { Plus as PlusIcon } from '@phosphor-icons/react/dist/ssr/Plus';
import { Category } from '@prisma/client';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import { z } from 'zod';

import { createProduct } from '@/actions/product';
import { Button } from '@/components/ui/button';
import { Dialog, DialogClose, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';

const formSchema = z.object({
  name: z.string().min(2),
  description: z.string(),
  price: z
    .number({
      invalid_type_error: 'Price must be a number',
      required_error: 'Price is required',
    })
    .positive(),
  categoryId: z.string().min(2, { message: 'Category is required' }),
  imageUrl: z.string().url('Please upload an image'),
});

export function CreateProductDialog({ categories }: { categories: Category[] }): React.ReactElement {
  const cancelButtonRef = useRef<HTMLButtonElement>(null);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      description: '',
      price: 0,
      categoryId: '',
      imageUrl: '',
    },
  });

  function onSubmit(data: z.infer<typeof formSchema>) {
    const promise = createProduct(data).then(() => {
      form.reset();
      cancelButtonRef.current?.click();
    });
    toast.promise(promise, {
      loading: 'Creating product...',
      success: 'Product created successfully',
      error: 'Failed to create product',
    });
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <MuiButton startIcon={<PlusIcon fontSize="var(--icon-fontSize-md)" />} variant="contained">
          Add
        </MuiButton>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Create Product</DialogTitle>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Product Name</FormLabel>
                  <FormControl>
                    <Input placeholder="type..." {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="price"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Product Price</FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      placeholder="type..."
                      {...field}
                      onChange={(e) => {
                        field.onChange({ target: { value: parseFloat(e.target.value) } });
                      }}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="categoryId"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select category" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {categories.map((category) => (
                        <SelectItem key={category.id} value={category.id}>
                          {category.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Product Description</FormLabel>
                  <FormControl>
                    <Textarea placeholder="type..." {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="imageUrl"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Product Image</FormLabel>
                  {field.value ? (
                    <>
                      <Image src={field.value} width={100} height={100} alt="Product" />
                      <button onClick={() => field.onChange({ target: { value: '' } })}>X</button>
                    </>
                  ) : (
                    <UploadButton
                      endpoint="imageUploader"
                      onClientUploadComplete={(res) => {
                        const { url } = res[0];
                        console.log('res', res);

                        field.onChange({ target: { value: url } });
                      }}
                    />
                  )}
                  <FormMessage />
                </FormItem>
              )}
            />
            <DialogClose asChild>
              <Button type="button" ref={cancelButtonRef} variant="secondary" className="mr-2">
                Cancel
              </Button>
            </DialogClose>
            <Button type="submit">Submit</Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
