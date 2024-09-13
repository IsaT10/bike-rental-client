import Container from '@/components/Container';
import img from '../../assets/images/bike2.jpg';
import { useGetAllBikesQuery } from '@/redux/features/bikes/bikesApi';
import BikeCard from '@/components/BikeCard';
import { TBike } from '@/types';
import PageHeader from '@/components/PageHeader';

export default function BikeListing() {
  const { data: bikeData } = useGetAllBikesQuery(undefined);
  return (
    <div>
      <PageHeader
        heading='Find Perfect Bike'
        subHeading='"Discover our range of bikes tailored to your next adventure, from city cruising to off-road exploration'
        img={img}
      />

      <Container>
        <h2 className='text-3xl md:text-left text-center sm:text-4xl md:text-5xl lg:text-6xl font-semibold py-10 md:py-14 lg:py-16 xl:py-20 '>
          Start Your Biking <br /> Journey Now
        </h2>
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
