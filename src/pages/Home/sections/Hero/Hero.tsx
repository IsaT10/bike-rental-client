import React from 'react';
import { Link } from 'react-router-dom';
import BlurImage from '@/components/BlurImage';
import Container from '@/components/Container';
import SearchItemList from '@/components/SearchItemList';
import { Search } from '@/components/shared/Icons';
import useDebounce from '@/hooks/useDebounce';
import { useGetAllBikesQuery } from '@/redux/features/bikes/bikesApi';
import { TBike } from '@/types';
import './Hero.css';

export default function Hero() {
  const [searchTerm, setSearchTerm] = React.useState<string>('');
  const value = useDebounce(searchTerm, 500);

  const { data: bikeData, isFetching } = useGetAllBikesQuery([
    { name: 'searchTerm', value },
  ]);

  return (
    <div className='items-center justify-end -pt-20 md:pb-24 lg:pb-40'>
      <div className='relative w-full h-[70vh] md:h-[86vh]'>
        <BlurImage
          src='https://i.ibb.co.com/LghhkvJ/florian-udrisard-DWYtai-Wls-OU-unsplash-1.jpg'
          blurHash={'OSMG@kNbkWRPNdxu%M00yDxuMxozj[of_N%MWVjZofWVf6'}
          className='w-full h-full object-cover'
        />
        <div className='absolute inset-0 bg-gradient-to-r from-[#000000c1] to-[#00000049]'></div>
      </div>

      <Container>
        <div className='absolute top-[38%] sm:top-[40%] md:top-[45%] -translate-y-1/2 lg:-translate-y-[60%] xl:-translate-y-[75%] lg:mt-[5%] text-white'>
          <h1 className='text-[26px] leading-[30px] sm:eading-9 sm:text-3xl md:text-4xl 900:text-5xl lg:text-6xl font-bold md:leading-[45px] 900:leading-[55px] lg:leading-[70px] w-[65%] sm:w-[55%] md:w-[45%] 900:w-[60%] tracking-tight mb-4 xs:mb-4'>
            Explore, <br /> Ride, Repeat
          </h1>

          <p className='text-sm  md:text-base w-[80%] sm:w-[75%] md:w-[60%] sm:text-lg md:leading-[25px] text-stone-200 mb-8 '>
            Find the perfect ride with RiDEXO and enjoy seamless, affordable
            bike rentals for all your adventures
          </p>

          <Link to='/bikes'>
            <button className='px-10 py-3 dark:border-stone-400 md:py-3.5 sm:text-base text-sm s text md:text-lg border mr-6 rounded-[17px] md:rounded-[22px] text-stone-200 font-semibold duration-200 pt-3    before:absolute before:block before:inset-0 before:-z-10 before:bg-transparent overflow-hidden after:block hover:after:w-full after:w-0 after:hover:left-0 after:right-0 after:top-0 after:h-full after:-z-10 after:duration-300 after:bg-primary-color after:absolute relative inline-block'>
              Book Now
            </button>
          </Link>

          <div className='md:inline-block '>
            <div className='relative mt-4 z-20'>
              <input
                className='pl-12 z-20 dark:border-stone-400  pr-6 outline-none  py-3 md:py-4 rounded-[17px] md:rounded-[22px] bg-black border text-white md:w-[300px] mt-3 md:mt-0'
                type='text'
                placeholder='Search bike'
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <div className='absolute top-7 md:top-5 left-5'>
                <Search />
              </div>
            </div>

            {value.length >= 1 && bikeData?.data?.length >= 1 && (
              <div className='absolute opacity-0 animate-fadeIn  rounded-b-[22px] pt-5 text-white bg-stone-900 -mt-5 w-[254px] md:w-[300px] shadow-lg z-10 max-h-[200px] overflow-y-auto no-scrollbar'>
                {isFetching ? (
                  <p className='px-8 py-4'>Loading...</p>
                ) : (
                  bikeData?.data?.map((item: TBike) => (
                    <div key={item._id}>
                      <SearchItemList bike={item} />
                    </div>
                  ))
                )}
              </div>
            )}
          </div>
        </div>
      </Container>
    </div>
  );
}
