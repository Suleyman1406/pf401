'use client';

import { useRef } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import MuiButton from '@mui/material/Button';
import { Plus as PlusIcon } from '@phosphor-icons/react/dist/ssr/Plus';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import { z } from 'zod';

import { createCategory } from '@/actions/category';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';

const formSchema = z.object({
  name: z.string().min(2),
});

export function CreateCategoryDialog(): React.ReactElement {
  const cancelButtonRef = useRef<HTMLButtonElement>(null);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
    },
  });

  async function onSubmit(data: z.infer<typeof formSchema>) {
    const promise = createCategory(data).then(() => {
      form.reset();
      cancelButtonRef.current?.click();
    });
    toast.promise(promise, {
      loading: 'Creating category...',
      success: 'Category created successfully',
      error: 'Failed to create category',
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
          <DialogTitle>Create Category</DialogTitle>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Category Name</FormLabel>
                  <FormControl>
                    <Input placeholder="shadcn" {...field} />
                  </FormControl>
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
