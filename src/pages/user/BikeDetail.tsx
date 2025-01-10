import { useNavigate, useParams } from 'react-router-dom';
import { useSingleBikeQuery } from '@/redux/features/bikes/bikesApi';
import Container from '@/components/Container';
import PageHeader from '@/components/PageHeader';
import GridLoader from 'react-spinners/GridLoader';
import { TReview } from '@/types';
import { formatDate } from '@/utils/formateDate';
import Star from '@/components/Star';
import helmet from '@/assets/images/helmet.png';
import lock from '@/assets/images/padlock.png';
import doubleHelmet from '@/assets/images/extra_helmet.png';
import gloves from '@/assets/images/gloves.png';
import {
  Gear,
  Horse,
  Motorcycle,
  SpeedMeter,
  Weight,
} from '@/components/shared/Icons';

export default function BikeDetail() {
  const { id } = useParams();

  const { data, isLoading, error } = useSingleBikeQuery(id);

  console.log(data);

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

  const totalRatings = data.data.reviews?.reduce(
    (sum: number, rating: TReview) => sum + rating.rating,
    0
  );
  const averageRating = totalRatings / data.data.reviews.length;

  return (
    <div className=''>
      <PageHeader
        heading='Single-Bike'
        subHeading='Discover top performance and unmatched comfort with our premium selection of bikes, built for every adventure.'
        img='https://i.ibb.co.com/xMN97VC/details.jpg'
      />
      <Container>
        <div className='flex gap-8 lg:gap-20 mt-10'>
          <div className='fixed md:hidden bottom-10 left-1/2 shadow-[0_1px_50px_rgba(0,0,0,0.2)] transform -translate-x-1/2 h-[70px] sm:h-20 rounded-xl w-[90%] sm:w-[80%] flex justify-between items-center bg-stone-100 text-white'>
            <div className='w-1/2 mx-auto'>
              <p className='lg:text-xl sm:text-base text-sm text-stone-600 text-center'>
                Per hour rental
              </p>
              <p className='text-xl md:text-2xl  font-bold text-primary-color text-center'>
                ${data.data.pricePerHour}
              </p>
            </div>
            <div className='flex-1'>
              <button className='bg-primary-color md:text-base text-sm rounded-lg py-2.5 w-[90%]'>
                Book Now
              </button>
            </div>
          </div>
          <div className='hidden md:w-[35%] lg:w-[30%] sticky top-14 lg:top-20 px-6 shadow-[0_1px_30px_rgba(0,0,0,0.2)] rounded-xl  h-[80vh] md:flex flex-col items-center justify-center'>
            {data.data.isAvailable ? (
              <span className='text-green-600 text-xl mb-6 font-semibold animate-pulse'>
                Available
              </span>
            ) : (
              <span className='text-red-600 text-xl mb-6 font-semibold '>
                Not-available
              </span>
            )}
            <p className='lg:text-xl text-stone-600'>Per hour rental</p>
            <p className='text-2xl lg:text-3xl xl:text-4xl font-bold text-primary-color '>
              ${data.data.pricePerHour}
            </p>

            <p className='text-2xl lg:text-4xl xl:text-5xl font-extrabold text-primary-color text-center lg:my-10 my-7'>
              Your Next Adventure Starts Here.
            </p>
            <button
              onClick={handleBookNow}
              disabled={!data.data.isAvailable}
              className='px-6 lg:px-8  disabled:cursor-not-allowed disabled:opacity-55 bg-primary-color text-white duration-200 py-2.5 lg:py-3 font-medium rounded-xl dark:text-stone-200 dark:border-stone-700  lg:text-base text-sm  border-stone-900'
            >
              Book Now
            </button>
          </div>

          <div className='w-full md:w-[65%] lg:w-[70%]'>
            <img
              className='w-[60%] mx-auto py-10 md:py-16 xl:py-20 object-contain'
              src={data.data.image}
              alt=''
            />
            <p className='text-2xl sm:text-3xl mb-2 lg:text-4xl uppercase font-bold'>
              {data.data.brand} {data.data.model}
            </p>
            {data.data?.reviews?.length > 0 ? (
              <div className='flex gap-2 items-center'>
                <Star rating={averageRating} />
                <span className='inline-block'>
                  ({data.data.reviews.length})
                </span>
              </div>
            ) : (
              ''
            )}

            <p className=' tracking-wider uppercase text-stone-400 my-5'>
              {data.data.tag}
            </p>
            <div className='flex flex-wrap gap-6 pb-6 border-b border-stone-200'>
              <div className='flex gap-1 items-center'>
                <Motorcycle />
                <p className='text-stone-800'>{data.data.cc}cc</p>
              </div>
              <div className='flex gap-1 items-center'>
                <Horse />
                <p className='text-stone-800'>{data.data.horsepower}HP</p>
              </div>
              <div className='flex gap-1 items-center'>
                <Weight />
                <p className='text-stone-800'>{data.data.bikeWeight}KG</p>
              </div>
              <div className='flex gap-1 items-center'>
                <SpeedMeter />
                <p className='text-stone-800'>{data.data.highestKmph}km/h</p>
              </div>
              <div className='flex gap-1 items-center'>
                <Gear />
                <p className='text-stone-800'>{data.data.gear}</p>
              </div>
            </div>
            <div
              className='pt-6 pb-6 md:pb-10 lg:text-base dark:text-stone-400  text-sm'
              dangerouslySetInnerHTML={{ __html: data.data.description }}
            />
            <div className='pt-6 md:pt-10 border-t border-stone-200'>
              <h3 className='text-2xl md:text-3xl font-semibold'>
                Included in the Price
              </h3>
              <p className='text-sm text-stone-500 mb-5'>
                Everyone loves free stuff!
              </p>

              <div className='grid grid-cols-2 pb-10 border-b border-stone-200 gap-6'>
                <div className='flex items-center gap-2 '>
                  <img src={helmet} alt='' />
                  <p className=' tracking-wide text-stone-800'>
                    Helmet <span className='text-green-600 ml-2'>Free</span>
                  </p>
                </div>
                <div className='flex items-center gap-2 '>
                  <img src={gloves} alt='' />
                  <p className=' tracking-wide text-stone-800'>
                    Gloves <span className='text-green-600 ml-2'>Free</span>
                  </p>
                </div>
                <div className='flex items-center gap-2 '>
                  <img src={lock} alt='' />
                  <p className=' tracking-wide text-stone-800'>
                    Bike Lock <span className='text-green-600 ml-2'>Free</span>
                  </p>
                </div>
                <div className='flex items-center gap-2 '>
                  <img src={doubleHelmet} alt='' />
                  <p className=' tracking-wide text-stone-800'>
                    Passenger Helmet{' '}
                    <span className='text-green-600 ml-2'>Free</span>
                  </p>
                </div>
              </div>
            </div>
            <div className='pt-6 md:pt-10'>
              <h3 className='text-2xl md:text-3xl font-semibold'>
                Latest Reviews
              </h3>
              <p className='text-sm text-stone-500 mb-5'>Hear it from them</p>
              {data.data.reviews?.length > 0 ? (
                <div className='flex flex-col divide-y divide-stone-200'>
                  {data.data.reviews?.map((review: TReview) => (
                    <div key={review._id} className='py-5'>
                      <div className='flex items-start gap-3'>
                        <img
                          src={review.userId.image}
                          className='size-12 rounded-lg'
                          alt=''
                        />
                        <div>
                          <div className='flex flex-col gap'>
                            <div className='flex items-center gap-3'>
                              <p className=' md:text-lg font-semibold'>
                                {review.userId.name}{' '}
                              </p>
                              <p className=' text-xs font-medium text-stone-500'>
                                {' '}
                                {formatDate(review.createdAt)}
                              </p>
                            </div>
                            <Star rating={review.rating} />
                          </div>
                          <p className='text-stone-500 text-sm lg:text-[16px] mt-3'>
                            {review.review}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className='h-[500px] flex-col flex items-center justify-center'>
                  <h3 className='text-xl font-semibold'>
                    This rent bike does not have any review yet!
                  </h3>
                </div>
              )}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
