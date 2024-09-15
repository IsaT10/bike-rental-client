import Container from '@/components/Container';
import { Star } from '@/components/shared/Icons';

export default function Testimonial() {
  return (
    <Container>
      <div className='grid py-28 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-between gap-y-10 gap-x-10'>
        <div className='p-8 md:rounded-bl-[50px] border transition duration-300 hover:bg-primary-color  hover:text-stone-100 dark:border-stone-400'>
          <img src='' alt='' />
          <p className='text-2xl mb-1 dark:text-stone-100'>Dean Marrow</p>
          <p className='text-sm dark:text-stone-200 '>College Student</p>
          <div className='flex gap-1 py-7'>
            <Star />
            <Star />
            <Star />
            <Star />
            <Star />
          </div>
          <p className='italic text-lg hover:text-white text-stone-500 dark:text-stone-100'>
            I rented a bike for a weekend trip, and everything exceeded my
            expectations. The bike was in perfect condition, and the staff went
            above and beyond to ensure I had a great experience. I highly
            recommend their services!
          </p>
        </div>
        <div className='p-8  border transition duration-300 hover:bg-primary-color hover:text-stone-100 dark:border-stone-400'>
          <img src='' alt='' />
          <p className='text-2xl mb-1 dark:text-stone-100'>Steven Smith</p>
          <p className='text-sm dark:text-stone-100'>Teacher</p>
          <div className='flex gap-1 py-7'>
            <Star />
            <Star />
            <Star />
            <Star />
            <Star />
          </div>
          <p className='italic text-lg hover:text-white text-stone-500 dark:text-stone-100'>
            I rented a bike for a weekend trip, and everything exceeded my
            expectations. The bike was in perfect condition, and the staff went
            above and beyond to ensure I had a great experience. I highly
            recommend their services!
          </p>
        </div>
        <div className='p-8 md:rounded-br-[50px] border transition duration-300 hover:bg-primary-color hover:text-stone-100 dark:border-stone-400'>
          <img src='' alt='' />
          <p className='text-2xl mb-1'>Williamson</p>
          <p className='text-sm text-primary-color dark:text-stone-100'>
            Student
          </p>
          <div className='flex gap-1 py-7 dark:text-stone-100'>
            <Star />
            <Star />
            <Star />
            <Star />
            <Star />
          </div>
          <p className='italic text-lg hover:text-white text-stone-500 dark:text-stone-100'>
            I rented a bike for a weekend trip, and everything exceeded my
            expectations. The bike was in perfect condition, and the staff went
            above and beyond to ensure I had a great experience. I highly
            recommend their services!
          </p>
        </div>
      </div>
    </Container>
  );
}
