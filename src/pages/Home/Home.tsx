import { Helmet } from 'react-helmet-async';
// import ContactUs from './sections/ContactUs';
import Featured from './sections/Featured';
import Hero from './sections/Hero/Hero';
import SpinW from './sections/Spin-wheel/SpinW';
import Testimonial from './sections/Testimonial';
import WhyChooseUs from './sections/WhyChooseUs';
import PricingInclude from './sections/PricingInclude';
import FAQ from './sections/FAQ';
// import { useEffect, useState } from 'react';
// import img from '../../assets/images/discount-banner.webp';

export default function Home() {
  // const [showBanner, setShowBanner] = useState(false);

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setShowBanner(true);
  //   }, 3000);

  //   return () => clearTimeout(timer);
  // }, []);

  return (
    <div className=''>
      {/* {showBanner ? (
        <div className='fixed inset-0 flex justify-center items-center z-50 bg-black/90 '>
          <button
            className='absolute top-4 right-4 text-white text-3xl font-bold bg-transparent border-none cursor-pointer'
            onClick={() => setShowBanner(false)}
          >
            &times;
          </button>
          <img
            className='w-[90%] h-[80vh] object-contain'
            src={img}
            alt='Centered Image'
          />
        </div>
      ) : (
        ''
      )} */}
      <Helmet>
        <title>Home | XRIDES</title>
      </Helmet>
      <Hero />
      <Featured />
      <WhyChooseUs />
      <PricingInclude />
      <SpinW />
      <FAQ />
      {/* <ContactUs /> */}
      <Testimonial />
    </div>
  );
}
