import { TBike } from '@/types';
import { useNavigate } from 'react-router-dom';

type TPropsType = {
  bike: TBike;
};

export default function SearchItemList({ bike }: TPropsType) {
  const navigate = useNavigate();
  const handelDetails = () => {
    navigate(`/bike/${bike._id}`);
  };
  return (
    <div
      onClick={handelDetails}
      className='px-8 cursor-pointer border-b border-stone-500 py-2 '
    >
      <p>{bike.brand}</p>
      <p className='text-xs text-stone-400'>Model : {bike.model}</p>
    </div>
  );
}
