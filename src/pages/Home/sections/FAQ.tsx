import Container from '@/components/Container';
import img from '@/assets/images/bike2.jpg';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import FromLeft from '@/components/animation/from-left';
import { Email, Location, Phone } from '@/components/shared/Icons';
import FromRight from '@/components/animation/from-right';

const faqs = [
  {
    question: 'What documents do I need to rent a bike?',
    answer:
      'You need a valid driving license and a government-issued photo ID for verification.',
  },
  {
    question: 'Can I extend my rental period?',
    answer:
      'Yes, rental extensions are allowed, subject to bike availability. Contact us in advance to modify your booking.',
  },
  {
    question: 'What is your cancellation policy?',
    answer:
      'Cancellations made 24 hours prior to the rental date are free of charge. Late cancellations may incur a fee.',
  },
  {
    question: 'Are helmets provided with the bike rental?',
    answer:
      'Yes, helmets are included with every rental to ensure your safety during the ride.',
  },
  {
    question: 'What should I do in case of a breakdown?',
    answer:
      'We offer roadside assistance. Contact our support team, and we will provide help as quickly as possible.',
  },
  {
    question: 'Do you offer discounts for long-term rentals?',
    answer:
      'Yes, we provide special discounts for long-term rentals. Contact us for more details.',
  },
];

export default function FAQ() {
  return (
    <div className='border-t border-stone-200'>
      <Container>
        <div className='flex justify-between justify-items-center gap-5 lg:gap-0 py-10 sm:py-14 '>
          {/* Left Side - Contact Info */}
          <FromLeft className='md:w-[50%] hidden md:flex flex-col justify-between '>
            <div>
              <h2 className='text-3xl font-medium lg:text-4xl'>
                Frequently asked <br /> questions
              </h2>
              <p className='lg:text-lg mt-4 tracking-tight text-stone-500 w-[80%]'>
                Find answers to common questions about our rentals, bookings,
                policies, and services for a seamless and enjoyable experience.
              </p>
            </div>
            <div className='flex gap-4 lg:gap-8 items-center'>
              <img
                className='h-[180px] object-cover w-[180px] rounded-[20px]'
                src={img}
                alt='FAQ'
              />
              <div className='space-y-2 lg:space-y-3'>
                <h4 className=' text-lg  lg:text-[22px] font-gelasio md:font-medium leading-[20px] md:leading-[32px] tracking-[-0.22px]'>
                  Have more questions?
                </h4>
                <p className='flex gap-3 items-center text-[15px] text-black '>
                  <Email />
                  xrides@gmail.com
                </p>
                <p className='flex gap-3 items-center text-[15px] text-black '>
                  <Phone /> +1718-207-7624
                </p>
                <p className='flex gap-3 items-center  text-black '>
                  <Location /> 2972 Westheimer Rd., Illinois 85486
                </p>
              </div>
            </div>
          </FromLeft>

          {/* Right Side - FAQ List */}
          <FromRight className='space-y-[10px] w-full md:w-[50%]'>
            <h2 className='text-2xl sm:text-3xl md:text-4xl md:hidden text-center font-semibold mb-5 sm:mb-8'>
              Frequently asked <br /> questions
            </h2>

            <Accordion
              type='single'
              collapsible
              className='w-full'
              defaultValue={1}
            >
              {faqs.map((el, idx) => (
                <AccordionItem key={idx} value={idx + 1}>
                  <AccordionTrigger>{el.question}</AccordionTrigger>
                  <AccordionContent>{el.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </FromRight>
        </div>
      </Container>
    </div>
  );
}
