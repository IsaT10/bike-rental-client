import { useNavigate, useParams } from 'react-router-dom';
import img from '../../assets/images/bike3.jpeg';
import { useSingleBikeQuery } from '@/redux/features/bikes/bikesApi';
import Container from '@/components/Container';

export default function BikeDetail() {
  const { id } = useParams();

  const { data, isFetching } = useSingleBikeQuery(id);

  const navigate = useNavigate();

  if (isFetching) return <p>Loading</p>;

  const handleBookNow = () => {
    // Change route to bookings and open modal
    navigate('/bookings');
  };

  return (
    <div>
      <div className='flex'>
        <div
          className='bg-secondary-color flex-1 text-white flex flex-col justify-center md:px-10 lg:px-16'
          style={{ aspectRatio: '5 / 3.5' }}
        >
          <h1 className='text-4xl lg:text-7xl font-semibold mb-5'>Bikes</h1>
          <p className='xl:w-[80%] lg:text-lg'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia eum ex
            repellendus
          </p>
        </div>
        <div className='w-1/2 pb-20 lg:pb-24 xl:pb-28 2xl:pb-36'>
          <img
            className='w-full object-cover'
            style={{ aspectRatio: '5 / 3.5' }}
            src={img}
            alt='Bike'
          />
        </div>
      </div>
      <Container>
        <div className=''>
          <div className='flex  divide-x divide-stone-300 '>
            <img className='w-1/2 py-16 xl:py-20' src={img} alt='' />

            <div className='w-1/2 text-lg py-16 xl:py-20 md:pl-10 lg:pl-16'>
              <p className='text-5xl font-semibold mb-9'>{data.data.name}</p>

              <hr />
              <hr />

              <p className='text-3xl font-semibold mt-8'>
                ${data.data.pricePerHour} / HOUR
              </p>
              <p className='my-5'>{data.data.description}</p>
              <div className='flex gap-16 mb-8 items-start font-medium text-base'>
                <p className=' flex flex-col gap-1'>
                  <span>Model </span>
                  <span className='text-stone-500'>{data.data.model}</span>
                </p>
                <p className=' flex flex-col gap-1'>
                  <span>Year </span>
                  <span className='text-stone-500'>{data.data.year}</span>
                </p>
                <p className=' flex flex-col gap-1'>
                  <span>Brand </span>
                  <span className='text-stone-500'>{data.data.brand}</span>
                </p>
              </div>
              <button
                onClick={handleBookNow}
                className='px-6 py-2 bg-orange-500 text-white rounded-md'
              >
                Book Now
              </button>

              {/* <Dialog open={isOpen} onOpenChange={setIsOpen}>
                <DialogContent className='sm:max-w-[425px]'>
                  <DialogHeader>
                    <DialogTitle>Complete Your Booking</DialogTitle>
                    <DialogDescription>
                      Fill in the details to confirm your booking.
                    </DialogDescription>
                  </DialogHeader>
                  <div className='grid gap-4 py-4'>
                  
                  </div>
                </DialogContent>
              </Dialog> */}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
