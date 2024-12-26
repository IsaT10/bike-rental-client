import { Cross, Discount, Helmet, Support } from '@/components/shared/Icons';
import img from '../../../assets/images/Bike-and-Bicycle_23.png';
import img2 from '../../../assets/images/Bike-and-Bicycle_25.png';
import img3 from '../../../assets/images/Bike-and-Bicycle_31.png';
import img4 from '../../../assets/images/Bike-and-Bicycle_47.png';
import backgroundImage from '@/assets/images/pricing_includes.jpg';

const data = [
  { img: img, title: 'Ride Anywhere', subTitle: 'Until You Tired' },
  { img: img2, title: 'Park Stations', subTitle: 'Across The Cities' },
  { img: img3, title: 'Easy Process', subTitle: 'Using our site' },
  { img: img4, title: 'Safe Riding', subTitle: 'Gears Available' },
];

export default function PricingInclude() {
  return (
    <div
      className='relative md:h-[450px] w-full'
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className='absolute inset-0 bg-black/70'></div>

      {/* Content */}
      <div className='relative z-10 py-10 flex flex-col items-center  text-white h-full'>
        <h1 className='text-3xl lg:text-4xl font-medium mb-4'>
          Our Pricing Includes
        </h1>
        <p className='lg:w-[50%] md:w-[60%] w-[80%] xl:w-[40%] mx-auto text-center'>
          Enjoy complete peace of mind with our all-inclusive pricing, covering
          essentials like safety gear, support, insurance, and more.
        </p>

        <div className='grid grid-cols-2 md:grid-cols-4 gap-12 lg:gap-16 xl:gap-20 mt-12 md:mt-20'>
          <div className='relative   text-black hover:text-white bg-white hover:bg-primary-color duration-200 p-[70px] rounded-full'>
            <div className='absolute inset-0  flex flex-col items-center justify-center'>
              <Helmet />
              <p className='font-medium'>Helmets</p>
            </div>
          </div>
          <div className='relative   text-black hover:text-white bg-white hover:bg-primary-color duration-200 p-[70px] rounded-full'>
            <div className='absolute inset-0  flex flex-col items-center justify-center'>
              <Discount />
              <p className='font-medium'>Discounts</p>
            </div>
          </div>
          <div className='relative   text-black hover:text-white bg-white hover:bg-primary-color duration-200 p-[70px] rounded-full'>
            <div className='absolute inset-0  flex flex-col items-center justify-center'>
              <Cross />
              <p className='font-medium pt-2'>Cancellation</p>
            </div>
          </div>
          <div className='relative   text-black hover:text-white bg-white hover:bg-primary-color duration-200 p-[70px] rounded-full'>
            <div className='absolute inset-0  flex flex-col items-center justify-center'>
              <Support />
              <p className='font-medium mt-2'>24/7 Support</p>
            </div>
          </div>
          {/* <div className=' flex flex-col items-center  text-black hover:text-white bg-white hover:bg-primary-color duration-200 px-12 py-9 rounded-full'>
            <Discount />
            <p className='font-medium'>Discounts</p>
          </div>
          <div className=' flex flex-col items-center  text-black hover:text-white bg-white hover:bg-primary-color duration-200 px-12 py-9 rounded-full'>
            <Cross />
            <p className='font-medium'>Cancellation</p>
          </div>
          <div className=' flex flex-col items-center  text-black hover:text-white bg-white hover:bg-primary-color duration-200 px-12 py-9 rounded-full'>
            <Support />
            <p className='font-medium'>24/7 Support</p>
          </div> */}
        </div>
      </div>
    </div>
  );
}
