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
  console.log({ bikes });
  return (
    <div className='comparison-table'>
      <table className='table-auto w-full text-left'>
        <thead>
          <tr>
            <th>Feature</th>
            {bikes.map((bike) => (
              <th key={bike._id}>
                {bike.name}
                <button
                  className='cursor-pointer'
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
            <td>Brand</td>
            {bikes.map((bike) => (
              <td key={bike._id}>{bike.brand}</td>
            ))}
          </tr>
          <tr>
            <td>Price Per Hour</td>
            {bikes.map((bike) => (
              <td key={bike._id}>{bike.pricePerHour} Tk</td>
            ))}
          </tr>
          <tr>
            <td>Model</td>
            {bikes.map((bike) => (
              <td key={bike._id}>{bike.model}</td>
            ))}
          </tr>
          <tr>
            <td>Year</td>
            {bikes.map((bike) => (
              <td key={bike._id}>{bike.year}</td>
            ))}
          </tr>
          {/* Add more features as needed */}
        </tbody>
      </table>
    </div>
  );
}
