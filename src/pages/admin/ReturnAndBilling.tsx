import RentalListItem from '@/components/RentalListItem';
import { Spinner } from '@/components/shared/Icons';
import { useGetAllUserRentalQuery } from '@/redux/features/rental/rentalApi';

export default function ReturnAndBilling() {
  const {
    data: rentalData,
    error,
    isLoading,
  } = useGetAllUserRentalQuery([
    // { name: 'isReturned', value: 'false' },
    { name: 'sort', value: 'isReturned' },
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

  console.log({ rentalData });

  return (
    <div className='max-w-[900px]'>
      <div className='bg-stone-200 items-center px-6 py-2.5 font-semibold text-stone-900 rounded-t-lg flex justify-between border-b border-b-stone-200'>
        <p className='flex-[2]'>Bike Name</p>
        <p className='flex-[2]'>Start Time</p>
        <p className='flex-[2]'>Return Time</p>
        <p className='flex-1 text-center'></p>
      </div>

      <div className=' flex flex-col '>
        {rentalData?.data?.map((item) => (
          <RentalListItem key={item._id} item={item} />
        ))}
      </div>
    </div>
  );
}
