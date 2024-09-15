import { ContactForm } from '@/components/ContactForm';
import Container from '@/components/Container';
import SectionHeader from '@/components/SectionHeader';
import {
  Facebook,
  Instagram,
  LinkedIn,
  WhatsApp,
} from '@/components/shared/Icons';

export default function ContactUs() {
  return (
    <div className='dark:border-stone-700 border-t border-b'>
      <Container>
        <div className='flex md:flex-row flex-col md:divide-x dark:divide-stone-700'>
          <div className='md:w-1/2 flex flex-col justify-between md:pr-10 xl:pr-20 md:pb-10 xl:pb-20 '>
            <SectionHeader
              className=''
              title='Get <br /> in Touchs'
              subTitle="Have questions or need assistance? Our team is here to help you.
                Reach out to us through any of the following methods, and we'll
                respond as soon as possible."
            />

            <div className='hidden md:flex flex-col items-center md:items-start'>
              <p className='text-[13px] dark:text-stone-100 md:text-lg  font-bold  mb-4'>
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

          <div className='md:w-1/2 md:pl-10 xl:pl-20   py-10 md:py-12 gap-y-20 lg:py-16 xl:py-20 '>
            <ContactForm />
          </div>
        </div>
      </Container>
    </div>
  );
}
