import Container from '@/components/Container';
import img from '../../assets/images/bike2.jpg';
import { useGetAllBikesQuery } from '@/redux/features/bikes/bikesApi';
import BikeCard from '@/components/BikeCard';
import { TBike } from '@/types';
import PageHeader from '@/components/PageHeader';
import GridLoader from 'react-spinners/GridLoader';
import React from 'react';
import useBrand from '@/hooks/useBrand';
import FilterSelect from '@/components/FilterSelect';
import useDebounce from '@/hooks/useDebounce';
import { Search } from '@/components/shared/Icons';
import { Input } from '@/components/ui/input';

export default function BikeListing() {
  const [availability, setAvailability] = React.useState<string>('');
  const [brand, setBrand] = React.useState<string>('');
  const [model, setModel] = React.useState<string>('');
  const [searchTerm, setSearchTerm] = React.useState<string>('');
  const value = useDebounce(searchTerm, 500);

  const { brandOptions, modelOptions } = useBrand();

  const {
    data: bikeData,
    error,
    isLoading,
  } = useGetAllBikesQuery([
    { name: 'isAvailable', value: availability },
    { name: 'searchTerm', value },
    { name: 'model', value: model },
  ]);

  if (isLoading)
    return (
      <div className='h-screen flex flex-col items-center justify-center'>
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
      <div className='h-screen flex justify-center items-center text-red-600 font-semibold text-2xl'>
        Unable to load data. Please check your internet connection and try
        again.
      </div>
    );
  return (
    <div>
      <PageHeader
        heading='Find Perfect Bike'
        subHeading='"Discover our range of bikes tailored to your next adventure, from city cruising to off-road exploration'
        img={img}
      />

      <Container>
        <div className='flex 900:flex-row flex-col items-center justify-between'>
          <h2 className='900:text-left  900:w-1/2  text-3xl  text-center sm:text-4xl md:text-5xl lg:text-6xl font-semibold py-10 md:py-14 lg:py-16 xl:py-20 900:border-r'>
            Start Your Biking <br /> Journey Now
          </h2>
          <div className='900:w-1/2 900:pl-6 gap-4 grid grid-cols-2 sm:grid-cols-3 justify-stretch 900:grid-cols-2 lg:grid-cols-3 900:pb-0 md:pb-16 pb-12'>
            <div className='relative '>
              <Input
                className='placeholder:text-stone-950 pl-10 '
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder='Search brands'
              />
              <div className='absolute top-3 left-3'>
                <Search />
              </div>
            </div>
            <FilterSelect
              label='Models'
              options={modelOptions}
              setValue={setModel}
              value={model}
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
      </Container>

      <hr />
      <hr />

      <Container>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-y-20 gap-x-6 lg:grid-cols-3 py-16 xl:py-20 '>
          {bikeData?.data?.map((item: TBike) => (
            <BikeCard key={item?._id} bike={item} />
          ))}
        </div>
      </Container>

      <hr />
      <hr />
    </div>
  );
}
