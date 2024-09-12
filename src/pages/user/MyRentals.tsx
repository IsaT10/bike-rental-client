import { useGetAllRentalQuery } from '@/redux/features/rental/rentalApi';

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Spinner } from '@/components/shared/Icons';
import UnpaidRent from '@/components/UnpaidRent';
import { TRental } from '@/types';

export default function MyRentals() {
  const { data, error, isLoading } = useGetAllRentalQuery([
    { name: 'isRental', value: 'false' },
  ]);

  if (isLoading)
    return (
      <div className='h-screen flex justify-center items-center'>
        <Spinner className='h-10 w-10' />
      </div>
    );

  if (error)
    return (
      <div className='h-screen flex justify-center items-center text-red-600 font-semibold text-center sm:text-xl md:text-2xl'>
        Unable to load data. Please check your internet connection and try
        again.
      </div>
    );

  const upaidRent = data.data.filter((item: TRental) => item.isPaid === false);
  const paidRent = data.data.filter((item: TRental) => item.isPaid === true);

  console.log(data.data);

  return (
    <Tabs defaultValue='unpaid' className='min-w-[400px] max-w-[1000px]'>
      <TabsList className='w-[400px] grid  grid-cols-2'>
        <TabsTrigger value='unpaid'>Unpaid</TabsTrigger>
        <TabsTrigger value='paid'>Paid</TabsTrigger>
      </TabsList>
      <TabsContent className='mt-0' value='unpaid'>
        <div className='bg-stone-100 items-center px-6 py-2.5 font-semibold text-stone-900 rounded-t-lg flex justify-between border-b border-b-stone-200'>
          <p className='flex-[2]'>Bike Name</p>
          <p className='flex-[2]'>Start Time</p>
          <p className='flex-[2]'>Return Time</p>
          <p className='flex-1'>Total Cost</p>
          <p className='flex-1 text-center'>Actions</p>
        </div>
        {upaidRent.map((item: TRental) => (
          <UnpaidRent key={item._id} item={item} />
        ))}
      </TabsContent>
      <TabsContent className='mt-0' value='paid'>
        <div className='bg-stone-100 items-center px-6 py-2.5 font-semibold text-stone-900 rounded-t-lg flex justify-between border-b border-b-stone-200'>
          <p className='flex-[2]'>Bike Name</p>
          <p className='flex-[2]'>Start Time</p>
          <p className='flex-[2]'>Return Time</p>
          <p className='flex-1'>Total Cost</p>
        </div>
        {paidRent.map((item: TRental) => (
          <UnpaidRent key={item._id} item={item} isPaid={true} />
        ))}
      </TabsContent>
    </Tabs>
  );
}
