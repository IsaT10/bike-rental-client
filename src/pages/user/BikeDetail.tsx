import { useNavigate, useParams } from 'react-router-dom';
import { useSingleBikeQuery } from '@/redux/features/bikes/bikesApi';
import Container from '@/components/Container';
import PageHeader from '@/components/PageHeader';
import GridLoader from 'react-spinners/GridLoader';

export default function BikeDetail() {
  const { id } = useParams();

  const { data, isLoading, error } = useSingleBikeQuery(id);

  const navigate = useNavigate();

  const handleBookNow = () => {
    // Change route to bookings and open modal
    navigate(`/bookings/${id}`);
  };

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
    <div>
      <PageHeader
        heading='Single-Bike'
        subHeading='Discover top performance and unmatched comfort with our premium selection of bikes, built for every adventure.'
        img='https://i.ibb.co.com/xMN97VC/details.jpg'
      />
      <Container>
        <div className=''>
          <div className='flex md:flex-row flex-col  md:divide-x divide-stone-300 dark:divide-stone-700'>
            <img
              className='md:w-1/2 py-10 md:py-16 xl:py-20 object-contain'
              src={data.data.image}
              alt=''
            />

            <div className='md:w-1/2 text-lg py-10 flex-col flex md:items-start items-center md:py-16 xl:py-20 md:pl-6 lg:pl-16'>
              <p className='text-3xl md:text-4xl dark:text-stone-200 lg:text-5xl font-semibold mb-7 lg:mb-9'>
                {data.data.brand}
              </p>

              <hr />
              <hr />

              <p className='text-2xl md:text-3xl font-bold md:mt-6 lg:mt-8 text-primary-color'>
                ${data.data.pricePerHour}
                <span className='text-lg font-semibold'> / HOURS</span>
              </p>
              <p className='my-5 md:text-base dark:text-stone-400 lg:text-lg text-sm'>
                {data.data.description}
              </p>
              <div className='flex gap-16  items-start font-medium text-base'>
                <p className=' flex flex-col gap-1'>
                  <span className='dark:text-stone-200'>Model </span>
                  <span className='text-stone-500  dark:text-stone-500'>
                    {data.data.model}
                  </span>
                </p>
                <p className=' flex flex-col gap-1'>
                  <span className='dark:text-stone-200'>Year </span>
                  <span className='text-stone-500 dark:text-stone-500'>
                    {data.data.year}
                  </span>
                </p>
                <p className=' flex flex-col gap-1'>
                  <span className='dark:text-stone-200'>CC </span>
                  <span className='text-stone-500 dark:text-stone-500'>
                    {data.data.cc}
                  </span>
                </p>
              </div>
              {data.data.isAvailable ? (
                <span className='text-green-500 font-bold text-sm mt-4 mb-8'>
                  Available
                </span>
              ) : (
                <span className='text-red-500 font-bold text-sm mt-4 mb-8'>
                  Not-available
                </span>
              )}
              <button
                onClick={handleBookNow}
                disabled={!data.data.isAvailable}
                className='px-8  disabled:cursor-not-allowed disabled:opacity-55 hover:text-white duration-200 py-3 font-medium rounded-[17px] md:rounded-[22px] dark:text-stone-200 dark:border-stone-700 hover:bg-primary-color border md:text-base text-sm  border-stone-900'
              >
                Book Now
              </button>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
