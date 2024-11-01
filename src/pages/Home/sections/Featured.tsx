import BikeCard from '@/components/BikeCard';
import Container from '@/components/Container';
import { useGetAllBikesQuery } from '@/redux/features/bikes/bikesApi';
import { TBike } from '@/types';
import { Tick } from '@/components/shared/Icons';
import SectionHeader from '@/components/SectionHeader';

export default function Featured() {
  const { data: bikeData } = useGetAllBikesQuery([
    { name: 'isAvailable', value: 'true' },
  ]);

  return (
    <div className=' border-t dark:border-stone-700'>
      <Container>
        <div className='flex divide-x dark:divide-stone-700'>
          <img
            className='md:inline hidden  lg:h-[600px] rounded-tl-[70px] xl:h-[650px] pr-10 xl:pr-20 -mt-14 lg:-mt-20 pb-10 xl:pb-20 w-1/2  object-cover'
            src='https://i.ibb.co.com/qnh2CMg/bike4.jpg'
            alt=''
          />

          <div className='md:w-1/2 md:pl-10 xl:pl-20'>
            <SectionHeader
              className=''
              title='Best bikes <br /> available here'
              subTitle=' Explore our premium collection of bikes, crafted for every kind of
              rider. From city commuters to mountain trailblazers, our bikes
              combine innovation, comfort, and durability to give you the
              ultimate riding experience.'
            />

            <div className=' hidden md:flex flex-col gap-3 py-6  text-lg font-medium text-stone-600 dark:text-stone-400'>
              <span className='flex gap-2 items-center border-b-2 dark:border-stone-700 pb-2'>
                <Tick /> Durable bikes, smooth rides.
              </span>
              <span className='flex gap-2 items-center border-b-2 dark:border-stone-700 pb-2'>
                <Tick />
                Bikes for every terrain.
              </span>
              <span className='flex gap-2 items-center border-b-2 dark:border-stone-700 pb-2'>
                <Tick /> Adventure-ready, reliable bikes.
              </span>
            </div>
          </div>
        </div>
      </Container>
      <div className='border-t dark:border-stone-700'>
        <Container>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-y-20 gap-x-6 lg:grid-cols-3 py-16 xl:py-20 '>
            {bikeData?.data?.slice(0, 3).map((item: TBike) => (
              <BikeCard key={item?._id} bike={item} />
            ))}
          </div>
        </Container>
      </div>
    </div>
  );
}
