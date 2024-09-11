/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Button } from './ui/button';
import { MoreHorizontal } from 'lucide-react';

type TThreeDotButtonProps = {
  handleDelete: () => void;
  handleAdmin?: () => void;
  itemType: string; // 'bike' or 'user' or other item types
  EditModal?: React.FC<{ item: any }> | null; // Optional EditModal
  item: any; // Generic item (could be a bike, user, etc.)
};

export default function ThreeDotButton({
  handleDelete,
  itemType,
  EditModal = null,
  handleAdmin,
  item,
}: TThreeDotButtonProps) {
  console.log(itemType);
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant='ghost' className='h-8 w-8 p-0'>
          <span className='sr-only'>Open menu</span>
          <MoreHorizontal className='h-4 w-4' />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align='end'>
        <DropdownMenuLabel>Actions</DropdownMenuLabel>

        {/* Render EditModal only if it is provided */}
        {EditModal ? <EditModal item={item} /> : ''}

        {itemType === 'user' && (
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <button
                disabled={item.role === 'admin'}
                className='flex items-center disabled:cursor-not-allowed rounded-sm px-2 py-1.5 text-sm outline-none hover:bg-stone-100 transition-colors focus:bg-accent focus:text-accent-foreground cursor-pointer data-[disabled]:opacity-50 w-full'
              >
                Make Admin
              </button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Are you sure?</AlertDialogTitle>
                <AlertDialogDescription>
                  This action cannot be undone.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction onClick={handleAdmin}>
                  Continue
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        )}

        <AlertDialog>
          <AlertDialogTrigger asChild>
            <button className='flex items-center rounded-sm px-2 py-1.5 text-sm outline-none hover:bg-stone-100 transition-colors focus:bg-accent focus:text-accent-foreground cursor-pointer data-[disabled]:opacity-50 w-full'>
              Delete
            </button>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Are you sure?</AlertDialogTitle>
              <AlertDialogDescription>
                This action cannot be undone. This will permanently delete the{' '}
                {itemType}.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <AlertDialogAction onClick={handleDelete}>
                Continue
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
