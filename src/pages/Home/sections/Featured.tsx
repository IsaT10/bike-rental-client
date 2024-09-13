import BikeCard from '@/components/BikeCard';
import Container from '@/components/Container';
import { useGetAllBikesQuery } from '@/redux/features/bikes/bikesApi';
import { TBike } from '@/types';
import img from '../../../assets/images/bike4.jpg';
import { Tick } from '@/components/shared/Icons';

export default function Featured() {
  const { data: bikeData } = useGetAllBikesQuery([
    { name: 'isAvailable', value: 'true' },
  ]);

  console.log(bikeData?.data);
  return (
    <div className=' border-t'>
      <Container>
        <div className='flex divide-x'>
          <img
            className='md:inline hidden  lg:h-[600px] rounded-tl-[70px] xl:h-[650px] pr-10 xl:pr-20 -mt-14 lg:-mt-20 pb-10 xl:pb-20 w-1/2  object-cover'
            src={img}
            alt=''
          />

          <div className='md:w-1/2 md:pl-10 xl:pl-20'>
            <h2 className='text-3xl md:text-left text-center sm:text-4xl md:text-[40px] lg:text-6xl font-semibold pt-10 md:pt-12 lg:pt-16 xl:pt-20 '>
              Best bikes <br /> available here
            </h2>

            <p className='text-[17px] lg:text-[18px] leading-[20px] md:text-left text-center lg:leading-[24px] tracking-tight text-stone-500 mt-4 md:mb-0 mb-10'>
              Explore our premium collection of bikes, crafted for every kind of
              rider. From city commuters to mountain trailblazers, our bikes
              combine innovation, comfort, and durability to give you the
              ultimate riding experience.
            </p>

            <div className=' hidden md:flex flex-col gap-3 py-6 text-lg font-medium text-stone-600'>
              <span className='flex gap-2 items-center border-b-2 pb-2'>
                <Tick /> Durable bikes, smooth rides.
              </span>
              <span className='flex gap-2 items-center border-b-2 pb-2'>
                <Tick />
                Bikes for every terrain.
              </span>
              <span className='flex gap-2 items-center border-b-2 pb-2'>
                <Tick /> Adventure-ready, reliable bikes.
              </span>
            </div>
          </div>
        </div>
      </Container>
      <div className=' border-b border-t'>
        <Container>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-y-20 gap-x-6 lg:grid-cols-3 py-16 xl:py-20 '>
            {bikeData?.data?.slice(0, 3).map((item: TBike) => (
              <BikeCard key={item?._id} bike={item} />
            ))}
          </div>
        </Container>

        <hr />
      </div>
    </div>
  );
}
