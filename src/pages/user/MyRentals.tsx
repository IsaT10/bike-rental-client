import { useGetAllRentalQuery } from '@/redux/features/rental/rentalApi';

export default function MyRentals() {
  const { data, error } = useGetAllRentalQuery(undefined);

  console.log({ data });
  // console.log({ error });
  return <div>MyRentals</div>;
}
