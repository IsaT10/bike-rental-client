import { Cross, Discount, Helmet, Support } from '@/components/shared/Icons';

import backgroundImage from '@/assets/images/pricing_includes.jpg';
import FromBottom from '@/components/animation/from-bottom';

export default function PricingInclude() {
  return (
    <div
      className='relative md:h-[550px] w-full'
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className='absolute inset-0 bg-black/70'></div>

      {/* Content */}
      <div className='relative z-10 py-10 flex flex-col items-center justify-center text-white h-full'>
        <FromBottom className='text-2xl sm:text-3xl md:text-4xl font-semibold mb-2 md:mb-4'>
          Our Pricing Includes
        </FromBottom>
        <FromBottom className='md:text-base text-stone-300 text-sm lg:w-[50%] md:w-[60%] w-[80%] xl:w-[40%] mx-auto text-center'>
          Enjoy complete peace of mind with our all-inclusive pricing, covering
          essentials like safety gear, support, insurance, and more.
        </FromBottom>

        <FromBottom className='grid grid-cols-2 md:grid-cols-4 gap-12 lg:gap-16 xl:gap-20 mt-12 md:mt-20'>
          <div className='relative   text-black hover:text-white bg-white hover:bg-primary-color duration-200 p-12 md:p-16 rounded-full'>
            <div className='absolute inset-0  flex flex-col items-center justify-center'>
              <Helmet />
              <p className='font-medium md:text-base text-xs'>Helmets</p>
            </div>
          </div>
          <div className='relative   text-black hover:text-white bg-white hover:bg-primary-color duration-200 p-12 md:p-16 rounded-full'>
            <div className='absolute inset-0  flex flex-col items-center justify-center'>
              <Discount />
              <p className='font-medium md:text-base text-xs'>Discounts</p>
            </div>
          </div>
          <div className='relative   text-black hover:text-white bg-white hover:bg-primary-color duration-200 p-12 md:p-16 rounded-full'>
            <div className='absolute inset-0  flex flex-col items-center justify-center'>
              <Cross />
              <p className='font-medium md:text-base text-xs pt-2'>
                Cancellation
              </p>
            </div>
          </div>
          <div className='relative   text-black hover:text-white bg-white hover:bg-primary-color duration-200 p-12 md:p-16 rounded-full'>
            <div className='absolute inset-0  flex flex-col items-center justify-center'>
              <Support />
              <p className='font-medium md:text-base text-xs mt-1'>
                24/7 Support
              </p>
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
        </FromBottom>
      </div>
    </div>
  );
}
