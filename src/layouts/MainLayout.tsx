import Footer from '@/components/shared/Footer';
import { Compare } from '@/components/shared/Icons';
import Nav from '@/components/shared/Nav';
import { TBike } from '@/types';
import { getCompareListFromLocalStorage } from '@/utils/localstorageCompare';
import React from 'react';
import { Link, Outlet } from 'react-router-dom';

export default function MainLayout() {
  const [compareList, setCompareList] = React.useState<TBike[]>([]);

  React.useEffect(() => {
    const storedCompareList = getCompareListFromLocalStorage();
    setCompareList(storedCompareList);

    const handleCompareListUpdate = () => {
      const updatedCompareList = getCompareListFromLocalStorage();
      setCompareList(updatedCompareList);
    };

    window.addEventListener('compareListUpdated', handleCompareListUpdate);

    return () => {
      window.removeEventListener('compareListUpdated', handleCompareListUpdate);
    };
  }, []);

  return (
    <div>
      <Nav />
      <div className='min-h-screen bg-white dark:bg-stone-950'>
        <Outlet />
      </div>

      <div className='relative'>
        <Link
          to='/bikes/compare'
          className=' bottom-14 fixed right-6 bg-primary-color p-4 rounded-lg'
        >
          <Compare className={'size-7'} color='white' />
          <span className='absolute -top-2 -right-2 px-2 font-semibold rounded-full bg-stone-950 text-white'>
            {compareList?.length ? compareList.length : ''}
          </span>
        </Link>
      </div>
      <Footer />
    </div>
  );
}
