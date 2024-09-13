import Container from '@/components/Container';
import { Star } from '@/components/shared/Icons';

export default function Testimonial() {
  return (
    <Container>
      <div className='grid mb-20 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-between gap-y-10 gap-x-10'>
        <div className='p-8 bg-primary-color  text-stone-100 md:rounded-bl-[50px]  border'>
          <img src='' alt='' />
          <p className='text-2xl mb-1'>Dean Marrow</p>
          <p className='text-sm '>College Student</p>
          <div className='flex gap-1 py-7'>
            <Star />
            <Star />
            <Star />
            <Star />
            <Star />
          </div>
          <p className='italic text-lg '>
            I rented a bike for a weekend trip, and everything exceeded my
            expectations. The bike was in perfect condition, and the staff went
            above and beyond to ensure I had a great experience. I highly
            recommend their services!
          </p>
        </div>
        <div className='p-8  border-2'>
          <img src='' alt='' />
          <p className='text-2xl mb-1'>Steven Smith</p>
          <p className='text-sm '>Teacher</p>
          <div className='flex gap-1 py-7'>
            <Star />
            <Star />
            <Star />
            <Star />
            <Star />
          </div>
          <p className='italic text-lg text-stone-500'>
            I rented a bike for a weekend trip, and everything exceeded my
            expectations. The bike was in perfect condition, and the staff went
            above and beyond to ensure I had a great experience. I highly
            recommend their services!"
          </p>
        </div>
        <div className='p-8    md:rounded-br-[50px]  border-2'>
          <img src='' alt='' />
          <p className='text-2xl mb-1'>Williamson</p>
          <p className='text-sm text-primary-color'>Student</p>
          <div className='flex gap-1 py-7'>
            <Star />
            <Star />
            <Star />
            <Star />
            <Star />
          </div>
          <p className='italic text-lg text-stone-500'>
            I rented a bike for a weekend trip, and everything exceeded my
            expectations. The bike was in perfect condition, and the staff went
            above and beyond to ensure I had a great experience. I highly
            recommend their services!"
          </p>
        </div>
      </div>
    </Container>
  );
}
