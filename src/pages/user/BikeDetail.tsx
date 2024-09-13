import { useNavigate, useParams } from 'react-router-dom';
import img from '../../assets/images/bike3.jpeg';
import { useSingleBikeQuery } from '@/redux/features/bikes/bikesApi';
import Container from '@/components/Container';
import PageHeader from '@/components/PageHeader';

export default function BikeDetail() {
  const { id } = useParams();

  const { data, isFetching } = useSingleBikeQuery(id);

  const navigate = useNavigate();

  if (isFetching) return <p>Loading</p>;

  const handleBookNow = () => {
    // Change route to bookings and open modal
    navigate(`/bookings/${id}`);
  };

  return (
    <div>
      <PageHeader
        heading='Single-Bike'
        subHeading='Discover top performance and unmatched comfort with our premium selection of bikes, built for every adventure.'
        img={img}
      />
      <Container>
        <div className=''>
          <div className='flex md:flex-row flex-col  md:divide-x divide-stone-300 '>
            <img
              className='md:w-1/2 py-10 md:py-16 xl:py-20 object-contain'
              src={img}
              alt=''
            />

            <div className='md:w-1/2 text-lg py-10 flex-col flex md:items-start items-center md:py-16 xl:py-20 md:pl-6 lg:pl-16'>
              <p className='text-3xl md:text-4xl lg:text-5xl font-semibold mb-7 lg:mb-9'>
                {data.data.brand}
              </p>

              <hr />
              <hr />

              <p className='text-2xl md:text-3xl font-bold md:mt-6 lg:mt-8 text-primary-color'>
                ${data.data.pricePerHour}
                <span className='text-lg font-semibold'> / HOURS</span>
              </p>
              <p className='my-5 md:text-base lg:text-lg text-sm'>
                {data.data.description}
              </p>
              <div className='flex gap-16  items-start font-medium text-base'>
                <p className=' flex flex-col gap-1'>
                  <span>Model </span>
                  <span className='text-stone-500'>{data.data.model}</span>
                </p>
                <p className=' flex flex-col gap-1'>
                  <span>Year </span>
                  <span className='text-stone-500'>{data.data.year}</span>
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
                className='px-8 hover:bg-secondary-color disabled:cursor-not-allowed disabled:opacity-55 hover:text-white duration-200 py-2.5 font-medium rounded-[17px] md:rounded-[20px] border md:text-base text-sm  border-stone-900'
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
