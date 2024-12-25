import AddBikeModal from '@/components/AddBikeModal';
import BikeListItem from '@/components/BikeListItem';
import FilterSelect from '@/components/FilterSelect';

import useBrand from '@/hooks/useBrand';
import { useGetAllBikesQuery } from '@/redux/features/bikes/bikesApi';
import { TBike } from '@/types';
import React from 'react';
import GridLoader from 'react-spinners/GridLoader';

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
      <div className='h-[calc(100vh-80px)] flex flex-col items-center justify-center'>
        <GridLoader
          color='#2A9D90'
          size={10}
          aria-label='Loading Spinner'
          data-testid='loader'
        />
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
    <>
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
          <p className='text-stone-700 text-xl font-semibold dark:text-stone-200'>
            No results found for your search criteria.
          </p>
          {/* <p>Try adjusting your filters or search terms.</p> */}
        </div>
      ) : (
        <>
          <div className='border md:text-base text-sm border-stone-200 font-semibold rounded-b-none text-white   rounded-lg py-3  px-5 md:px-10 flex justify-between items-center mt-10 bg-primary-color dark:bg-stone-800 dark:border-stone-700 dark:text-stone-200'>
            <span className='flex-1  '>Brand</span>
            <span className='flex-1 text-center'>Availability</span>
            <span className='flex-1 text-center'>Price / Hour</span>
            <span className='flex-1 text-center'>Actions</span>
          </div>

          <div className='rounded-lg border border-t-0 rounded-t-none dark:border-stone-700 border-stone-300 bg-white  mb-10'>
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
    </>
  );
}
