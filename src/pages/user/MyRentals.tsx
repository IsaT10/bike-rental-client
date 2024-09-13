import { useGetAllRentalQuery } from '@/redux/features/rental/rentalApi';

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

import UnpaidRent from '@/components/UnpaidRent';
import { TRental } from '@/types';
import GridLoader from 'react-spinners/GridLoader';
import PaidRent from '@/components/PaidRent';

export default function MyRentals() {
  const { data, error, isLoading } = useGetAllRentalQuery([
    { name: 'isRental', value: 'false' },
  ]);

  if (isLoading)
    return (
      <div className='h-[calc(100vh-80px)] flex flex-col items-center justify-center'>
        <GridLoader
          color='#97A253'
          size={10}
          aria-label='Loading Spinner'
          data-testid='loader'
        />
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
    <Tabs defaultValue='unpaid' className=' max-w-[1200px]'>
      <TabsList className='w-[400px] grid  grid-cols-2'>
        <TabsTrigger value='unpaid'>Unpaid</TabsTrigger>
        <TabsTrigger value='paid'>Paid</TabsTrigger>
      </TabsList>
      <TabsContent className='mt-0' value='unpaid'>
        <div className='bg-stone-100 items-center lg:text-base text-sm px-4 lg:px-6 py-2.5 font-semibold text-stone-900 flex justify-between border-b border-b-stone-200'>
          <p className='flex-[2]'>Brand</p>
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
        <div className='bg-stone-100 lg:text-base text-xs gap-4 items-center px-4 lg:px-6 py-2.5 font-semibold text-stone-900  flex justify-between border-b border-b-stone-200'>
          <p className='flex-1'>Brand</p>
          <p className='flex-[2]'>Start Time</p>
          <p className='flex-[2]'>Return Time</p>
          <p className='flex-1'>Total Cost</p>
          <p className='flex-1'>Return Amount</p>
        </div>
        {paidRent.map((item: TRental) => (
          <PaidRent key={item._id} item={item} isPaid={true} />
        ))}
      </TabsContent>
    </Tabs>
  );
}
