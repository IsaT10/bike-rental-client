import { InfiniteMovingCards } from '@/components/InfiniteMovingCard';

export default function Testimonial() {
  const reviews = [
    {
      message:
        'The rental process was so smooth and easy! The bike was in great condition, and I had an amazing experience.',
      name: 'John Doe',
    },
    {
      message:
        'I needed a bike for my weekend getaway, and XRiDES made it hassle-free. Highly recommend their service!',
      name: 'Jane Smith',
    },
    {
      message:
        'Excellent customer service and top-notch bikes. The 24/7 support really sets them apart!',
      name: 'Alex Brown',
    },
    {
      message:
        'The discounts and offers were a great bonus! I love how transparent and efficient the rental process is.',
      name: 'Emily Wilson',
    },
    {
      message:
        'The helmets and accessories provided were high-quality, ensuring both safety and comfort during the ride.',
      name: 'Chris Johnson',
    },
  ];

  return (
    <div className='bg-[#64d1c41a] py-14 md:py-32'>
      <h2 className='md:text-4xl text-2xl sm:text-3xl  font-semibold  text-center lg:text-4xl'>
        What Our Users <br /> Have to Say
      </h2>
      <p className='text-center mx-auto md:text-base text-sm lg:text-lg mt-4 tracking-tight text-stone-500 md:w-[80%] w-[90%] lg:w-[60%]'>
        Discover how our customers are experiencing seamless bike rentals,
        excellent service, and unforgettable adventures with every ride
      </p>
      <div className='rounded-md flex flex-col antialiased mt-2 xs:mt-4 md:mt-9 bg-secondaryColor items-center justify-center relative overflow-hidden'>
        <InfiniteMovingCards items={reviews} direction='right' speed='slow' />
      </div>
    </div>
  );
}
