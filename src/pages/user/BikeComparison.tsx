import BikeComparisonTable from '@/components/BikeComparisonTable';
import { TBike } from '@/types';
import {
  getCompareListFromLocalStorage,
  saveCompareListToLocalStorage,
  setCompareListInLocalStorage,
} from '@/utils/localstorageCompare';
import React from 'react';
import img from '../../assets/images/bike2.jpg';
import PageHeader from '@/components/PageHeader';
import Container from '@/components/Container';
import { Helmet } from 'react-helmet-async';

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
    setCompareListInLocalStorage(updatedList);
  };
  return (
    <div>
      <Helmet>
        <title>Compare Bike | XRIDES</title>
      </Helmet>
      <PageHeader
        heading='Bike Comparison'
        subHeading='Find and select bikes to see the differences and similarities between them'
        img={img}
      />
      <Container>
        {compareList.length > 0 ? (
          <div className='mt-20 pb-20'>
            <h2>Compare Bikes</h2>

            {/* <div className='flex justify-between divide-x'>
              <div className='xl:min-w-[300px]   flex flex-col   border-gray-300 pr-10'>
                <p className='min-h-[300px] max-h-[301px] min-w-[300px] xl:w-[301px]'></p>
                <p className='py-5 text-center border-b'>Brand</p>
                <p className='py-5 text-center border-b'>Price per hour</p>
                <p className='py-5 text-center border-b'>Model</p>
                <p className='py-5 text-center border-b'>Year</p>
              </div>

              {compareList.map((el, index) => (
                <div key={index} className='mx-auto  text-xl  '>
                  <img
                    className='min-h-[300px] max-h-[301px]  max-w-[500px] object-cover px-10'
                    src={el.image}
                    alt={el.brand}
                  />
                  <p className='py-5 text-center border-b'>{el.brand}</p>
                  <p className='py-5 text-center  border-b'>
                    {el.pricePerHour}
                  </p>
                  <p className='py-5 text-center  border-b'>{el.model}</p>
                  <p className='py-5 text-center  border-b'>{el.year}</p>
                </div>
              ))}
            </div> */}
            {/* <div className='flex'>
              <p className='w-[350px]'></p>
              {compareList.map((el, index) => (
                <img
                  className='max-w-[600px] px-10'
                  src={el.image}
                  alt={el.brand}
                />
              ))}
            </div>

            <div className='grid grid-cols-2'>
              <p className='w-[350px]'>Brand</p>
              {compareList.map((el, index) => (
                <p className='  py-5 text-center border-b'>{el.brand}</p>
              ))}
            </div>
            <div className='flex'>
              <p className='w-[350px]'>Price per hour</p>
              {compareList.map((el, index) => (
                <p className='py-5 text-center border-b'>{el.pricePerHour}</p>
              ))}
            </div>
            <div className='flex'>
              <p className='w-[350px]'>Model</p>
              {compareList.map((el, index) => (
                <p className='py-5 text-center border-b'>{el.model}</p>
              ))}
            </div>
            <div className='flex'>
              <p className='w-[350px]'>Year</p>
              {compareList.map((el, index) => (
                <p className='py-5 text-center border-b'>{el.year}</p>
              ))}
            </div> */}

            <BikeComparisonTable
              bikes={compareList}
              onRemove={removeBikeFromCompare}
            />
          </div>
        ) : (
          <h3 className='h-[calc(100vh-150px)] flex flex-col items-center justify-center text-2xl font-semibold dark:text-stone-100'>
            No bikes in the comparison list.
          </h3>
        )}
      </Container>
    </div>
  );
}
