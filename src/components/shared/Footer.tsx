import { Facebook, Instagram, LinkedIn, WhatsApp } from './Icons';
import Container from '../Container';
import { Link } from 'react-router-dom';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <div
      className='mt-14 md:mt-0 py-10 sm:py-12 md:py-16 lg:py-20 bg-secondary-color
    '
    >
      <Container>
        <h2 className='md:text-2xl md:text-left tracking-wider text-center text-xl lg:text-3xl font-bold text-primary-color mb-14'>
          X<span className='text-white'>RIDES</span>
        </h2>

        <div className='flex md:flex-row flex-col gap-8 sm:gap-16 md:gap-28'>
          <div className='flex sm:gap-28 md:flex-row flex-col ga w-full justify-between md:w-max'>
            <div className='flex flex-col items-center md:items-start'>
              <p className='text-[13px] xs:text-base font-bold text-white mb-4'>
                Quick Links
              </p>
              <Link
                to='/all-products'
                className='text-stone-400 cursor-pointer leading-[22.4px] mb-3'
              >
                All Products
              </Link>
              <Link
                to='/manage-products'
                className='text-stone-400 cursor-pointer leading-[22.4px] mb-3'
              >
                Manage Products
              </Link>
              <Link
                to='/cart'
                className='text-stone-400 cursor-pointer leading-[22.4px] mb-3'
              >
                Cart
              </Link>
              <Link
                to='/about'
                className='text-stone-400 cursor-pointer leading-[22.4px] mb-3'
              >
                Contact Us
              </Link>
            </div>
          </div>
          <div className='flex gap-8 justify-between flex-1 md:flex-row flex-col items-center md:items-start'>
            <div className='flex flex-col items-center md:items-start'>
              <p className='text-[13px] xs:text-base font-bold text-white mb-4'>
                Contact info
              </p>

              <span className='mb-3 flex gap-3 items-center text-stone-400'>
                <p className=' '>contact@xrides.com</p>
              </span>
              <span className='mb-3 flex gap-3 items-center text-stone-400'>
                <p className=''>8644 103rd Ave, Ozone Park, NY 11417</p>
              </span>

              <p className='text-stone-400 cursor-pointer leading-[22.4px] mb-3'>
                Privacy Policy
              </p>
              <p className='text-stone-400 cursor-pointer leading-[22.4px] mb-3'>
                Terms of Service
              </p>
            </div>

            <div className=' flex flex-col items-center md:items-start'>
              <p className='text-[13px] xs:text-base font-bold text-white mb-4'>
                Follow us
              </p>
              <div className='flex gap-3 flex-wrap'>
                <a href='#' target='_blank'>
                  <Facebook />
                </a>
                <a href='#' target='_blank'>
                  <WhatsApp />
                </a>
                <a href='#' target='_blank'>
                  <Instagram />
                </a>
                <a href='#' target='_blank'>
                  <LinkedIn />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className='text-stone-400 flex xs:flex-row flex-col gap-4 items-center justify-between mt-14 text-xs'>
          <span>© {currentYear} XRiDES, Inc. All rights reserved.</span>
        </div>
      </Container>
    </div>
  );
}
