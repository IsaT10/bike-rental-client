import { ContactForm } from '@/components/ContactForm';
import Container from '@/components/Container';
import {
  Facebook,
  Instagram,
  LinkedIn,
  WhatsApp,
} from '@/components/shared/Icons';
import React from 'react';

export default function ContactUs() {
  return (
    <div className=' border-t'>
      <Container>
        <div className='flex md:flex-row flex-col md:divide-x '>
          <div className='md:w-1/2 flex flex-col justify-between md:pr-10 xl:pr-20 md:pb-10 xl:pb-20 border-b'>
            <div className=''>
              <h2 className='text-3xl md:text-left text-center sm:text-4xl md:text-[40px] lg:text-6xl font-semibold pt-10 md:pt-12 lg:pt-16 xl:pt-20 '>
                Get <br /> in Touchs
              </h2>

              <p className='text-[17px] lg:text-[18px] leading-[20px] md:text-left text-center lg:leading-[24px] tracking-tight text-stone-500 mt-4 md:mb-0 mb-10'>
                Have questions or need assistance? Our team is here to help you.
                Reach out to us through any of the following methods, and we'll
                respond as soon as possible
              </p>
            </div>

            <div className='hidden md:flex flex-col items-center md:items-start'>
              <p className='text-[13px] md:text-lg  font-bold  mb-4'>
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

          <div className='md:w-1/2 md:pl-10 xl:pl-20 border-b  py-10 md:py-12 gap-y-20 lg:py-16 xl:py-20 '>
            <ContactForm />
          </div>
        </div>
      </Container>
    </div>
  );
}
