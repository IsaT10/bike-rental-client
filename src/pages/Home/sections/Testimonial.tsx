import { InfiniteMovingCards } from '@/components/InfiniteMovingCard';

export default function Testimonial() {
  const reviews = [
    {
      message:
        'Thank you so much for the course! It helped change my life and made me learn so many things I never thought I would learn and I am forever grateful to the team.',
      name: 'Valentina Hayden',
    },
    {
      message:
        'The instructor was very knowledgeable and made complex topics easy to understand. I highly recommend this course!',
      name: 'Liam Turner',
    },
    {
      message:
        'An excellent course that provided practical knowledge and skills. The real-world examples were particularly helpful.',
      name: 'Sophia Martinez',
    },
    {
      message:
        'I appreciated the hands-on approach and the supportive community. This course exceeded my expectations.',
      name: 'James Lee',
    },
    {
      message:
        'Well-structured and comprehensive course. The instructor’s teaching style is engaging and effective.',
      name: 'Olivia Brown',
    },
    {
      message:
        'Great content and pace. The assignments were challenging but rewarding, helping me to solidify my understanding.',
      name: 'William Johnson',
    },
    {
      message:
        'This course helped me to advance my career. The knowledge and skills I gained are directly applicable to my job.',
      name: 'Isabella Williams',
    },
    {
      message:
        'I loved the interactive sessions and the practical labs. The instructor was very responsive to questions.',
      name: 'Ethan Davis',
    },
    {
      message:
        'A fantastic course with a lot of valuable information. I feel much more confident in my abilities now.',
      name: 'Mia Wilson',
    },
    {
      message:
        'The course content was up-to-date and relevant. The projects were particularly useful for building my portfolio.',
      name: 'Lucas Anderson',
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
