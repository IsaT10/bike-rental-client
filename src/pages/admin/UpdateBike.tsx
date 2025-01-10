import { BikeForm } from '@/components/BikeForm';
import { useLocation } from 'react-router-dom';

export default function UpdateBike() {
  const location = useLocation();
  const bike = location.state?.bike; // Retrieve bike data from state
  return (
    <div>
      <BikeForm isUpdate={!!bike} bike={bike} />
    </div>
  );
}
