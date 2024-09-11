import { useGetAllBikesQuery } from '@/redux/features/bikes/bikesApi';
import { TBike } from '@/types';

export default function useBrand() {
  const { data: bikeData } = useGetAllBikesQuery(undefined);

  const brandOptions = bikeData?.data?.map((item: TBike) => ({
    value: item.brand,
    label: item.brand,
  }));

  const modelOptions = bikeData?.data?.map((item: TBike) => ({
    value: item.model,
    label: item.model,
  }));

  return { brandOptions, modelOptions };
}
