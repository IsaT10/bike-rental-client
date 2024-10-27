import { TBike } from '@/types';

import { Trash } from './shared/Icons';

interface BikeComparisonProps {
  bikes: TBike[];
  onRemove: (bikeId: string) => void;
}

export default function BikeComparisonTable({
  bikes,
  onRemove,
}: BikeComparisonProps) {
  return (
    <div className='comparison-table'>
      <table className='table-auto w-full text-left'>
        <thead>
          <tr>
            <th></th>
            {bikes.map((bike) => (
              <th key={bike._id} className='fl'>
                <button
                  className='cursor-pointer  '
                  onClick={() => onRemove(bike._id)}
                >
                  <Trash />
                </button>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className='dark:text-stone-200'>Brand</td>
            {bikes.map((bike) => (
              <td key={bike._id} className='dark:text-stone-200'>
                {bike.brand}
              </td>
            ))}
          </tr>
          <tr>
            <td className='dark:text-stone-200'>Price Per Hour</td>
            {bikes.map((bike) => (
              <td key={bike._id} className='dark:text-stone-200'>
                $ {bike.pricePerHour}{' '}
              </td>
            ))}
          </tr>
          <tr>
            <td className='dark:text-stone-200'>Model</td>
            {bikes.map((bike) => (
              <td key={bike._id} className='dark:text-stone-200'>
                {bike.model}
              </td>
            ))}
          </tr>
          <tr>
            <td className='dark:text-stone-200'>Year</td>
            {bikes.map((bike) => (
              <td key={bike._id} className='dark:text-stone-200'>
                {bike.year}
              </td>
            ))}
          </tr>
          {/* Add more features as needed */}
        </tbody>
      </table>
    </div>
  );
}
