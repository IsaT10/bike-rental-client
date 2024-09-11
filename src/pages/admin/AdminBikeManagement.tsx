import AddBikeModal from '@/components/AddBikeModal';
import BikeListItem from '@/components/BikeListItem';
import FilterSelect from '@/components/FilterSelect';
import { Spinner } from '@/components/shared/Icons';
import useBrand from '@/hooks/useBrand';
import { useGetAllBikesQuery } from '@/redux/features/bikes/bikesApi';
import { TBike } from '@/types';
import React from 'react';

export default function AdminBikeManagement() {
  const [availability, setAvailability] = React.useState<string>('');
  const [brand, setBrand] = React.useState<string>('');
  const [model, setModel] = React.useState<string>('');

  const { brandOptions, modelOptions } = useBrand();

  const {
    data: bikeData,
    error,
    isLoading,
  } = useGetAllBikesQuery([
    { name: 'isAvailable', value: availability },
    { name: 'brand', value: brand },
    { name: 'model', value: model },
  ]);

  if (isLoading)
    return (
      <div className='h-[calc(100vh-150px)] flex justify-center items-center'>
        <Spinner className='h-10 w-10' />
      </div>
    );

  if (error)
    return (
      <div className='h-[calc(100vh-150px)] flex justify-center items-center text-red-600 font-semibold text-2xl'>
        Unable to load data. Please check your internet connection and try
        again.
      </div>
    );
  return (
    <div className=''>
      <div className='flex justify-between gap-10'>
        <div className='flex flex-col gap-5'>
          <AddBikeModal />
          {/* <SortByStock byStock={byStock} setByStock={setByStock} /> */}
          <FilterSelect
            label='Models'
            options={modelOptions}
            setValue={setModel}
            value={model}
          />
        </div>
        <div className='flex flex-col gap-5 md:w-[30%] lg:w-[25%] items-end'>
          <FilterSelect
            label='Brands'
            options={brandOptions}
            setValue={setBrand}
            value={brand}
          />
          <FilterSelect
            label='Availability'
            options={[
              { value: 'true', label: 'Available' },
              { value: 'false', label: ' Not-Available' },
            ]}
            setValue={setAvailability}
            value={availability}
          />
        </div>
      </div>

      {!bikeData?.data?.length ? (
        <div className='h-[60vh] flex justify-center items-center '>
          <p className='text-stone-700 text-xl font-semibold'>
            No results found for your search criteria.
          </p>
          {/* <p>Try adjusting your filters or search terms.</p> */}
        </div>
      ) : (
        <>
          <div className='border border-stone-200 font-semibold rounded-b-none text-stone-800 text-sm rounded-lg py-4 px-6 md:px-10 flex justify-between items-center mt-10 bg-stone-100'>
            <span className='flex-1 md:ml-6'>Name</span>
            <span className='flex-1  text-center'>Brand</span>
            <span className='flex-1 text-center'>Availability</span>
            <span className='flex-1 text-center'>Price / Hour</span>
            <span className='flex-[.5] text-center'>Actions</span>
          </div>

          <div className='rounded-lg border border-t-0 rounded-t-none border-stone-200 divide-y divide-stone-200 mb-10'>
            {bikeData?.data?.map((el: TBike, idx: number) => (
              <BikeListItem key={idx} bike={el} />
            ))}
          </div>
        </>
      )}

      {/* {products?.data?.products?.length < 10 ? null : (
        <PaginationProducts
          currentPage={currentPage}
          totalPages={totalPages}
          setCurrentPage={setCurrentPage}
        />
      )} */}
    </div>
  );
}
