import BikeComparisonTable from '@/components/BikeComparisonTable';
import { TBike } from '@/types';
import {
  getCompareListFromLocalStorage,
  saveCompareListToLocalStorage,
} from '@/utils/localstorageCompare';
import React from 'react';
import img from '../../assets/images/bike2.jpg';
import PageHeader from '@/components/PageHeader';
import Container from '@/components/Container';

export default function BikeComparison() {
  const [compareList, setCompareList] = React.useState<TBike[]>([]);

  React.useEffect(() => {
    const storedCompareList = getCompareListFromLocalStorage();
    setCompareList(storedCompareList);
  }, []);

  const removeBikeFromCompare = (bikeId: string) => {
    const updatedList = compareList.filter((bike) => bike._id !== bikeId);
    setCompareList(updatedList);
    saveCompareListToLocalStorage(updatedList);
  };
  return (
    <div>
      <PageHeader
        heading='Bike Comparison'
        subHeading='Find and select bikes to see the differences and similarities between them'
        img={img}
      />
      <Container>
        {compareList.length > 0 ? (
          <div className='mt-20'>
            <h2>Compare Bikes</h2>

            <div className='flex justify-between divide-x-2'>
              {/* Labels Column */}
              <div className='w-[300px]  border-gray-300 pr-4'>
                <p>Brand</p>
                <p>Price per hour</p>
                <p>Model</p>
                <p>Year</p>
              </div>

              {/* Items Columns */}
              {compareList.map((el, index) => (
                <div key={index} className='max-w-[500px] px-4'>
                  <img className=' h-[300px]' src={el.image} alt={el.brand} />
                  <p>{el.brand}</p>
                  <p>{el.pricePerHour}</p>
                  <p>{el.model}</p>
                  <p>{el.year}</p>
                </div>
              ))}
            </div>

            <BikeComparisonTable
              bikes={compareList}
              onRemove={removeBikeFromCompare}
            />
          </div>
        ) : (
          <p>No bikes in the comparison list.</p>
        )}
      </Container>
    </div>
  );
}
