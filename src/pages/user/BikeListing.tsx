import Container from '@/components/Container';
import img from '../../assets/images/bike2.jpg';
import { useGetAllBikesQuery } from '@/redux/features/bikes/bikesApi';
import BikeCard from '@/components/BikeCard';

export default function BikeListing() {
  const { data: bikeData } = useGetAllBikesQuery(undefined);
  return (
    // <div className='flex '>
    //   <div className='bg-secondary-color flex-1 text-white h-[670px] flex flex-col items- justify-center px-16'>
    //     <h1 className='text-5xl lg:text-7xl font-semibold mb-5'>Bikes</h1>
    //     <p className='xl:w-[80%] text-lg'>
    //       Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia eum ex
    //       repellendus
    //     </p>
    //   </div>
    //   <div className='w-1/2'>
    //     <img className='w-full h-[550px] object-cover' src={img} alt='' />
    //   </div>
    // </div>
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
        <div>
          <h2 className='text-6xl font-semibold py-16 xl:py-20 '>
            Start Your Biking <br /> Journey Now
          </h2>
        </div>
      </Container>

      <hr />
      <hr />

      <Container>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-y-20 gap-x-6 lg:grid-cols-3 py-16 xl:py-20 '>
          {bikeData?.data?.map((item) => (
            <BikeCard key={item?._id} bike={item} />
          ))}
        </div>
      </Container>

      <hr />
      <hr />
    </div>
  );
}
