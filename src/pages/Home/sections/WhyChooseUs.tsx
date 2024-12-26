import Container from '@/components/Container';
import img from '../../../assets/images/Bike-and-Bicycle_23.png';
import img2 from '../../../assets/images/Bike-and-Bicycle_25.png';
import img3 from '../../../assets/images/Bike-and-Bicycle_31.png';
import img4 from '../../../assets/images/Bike-and-Bicycle_47.png';
import SectionHeader from '@/components/SectionHeader';

const data = [
  { img: img, title: 'Ride Anywhere', subTitle: 'Until You Tired' },
  { img: img2, title: 'Park Stations', subTitle: 'Across The Cities' },
  { img: img3, title: 'Easy Process', subTitle: 'Using our site' },
  { img: img4, title: 'Safe Riding', subTitle: 'Gears Available' },
];

export default function WhyChooseUs() {
  return (
    <div className=' border-t border-b dark:border-stone-700'>
      <Container>
        <div className='flex md:flex-row flex-col divide-x dark:divide-stone-700'>
          <SectionHeader
            className='md:w-1/2 md:pr-10 xl:pr-14 '
            title='Why<br />Choose Us'
            subTitle=' Experience unmatched quality, reliability, and customer service.
              Our dedication to excellence ensures that you get the best bikes
              for every adventure, backed by a team that truly cares.'
          />

          <div className='md:w-1/2 grid grid-cols-2   py-10 md:py-12 gap-y-20 lg:py-14  '>
            {data.map((el, idx) => (
              <div key={idx} className='flex flex-col items-center'>
                <img className='w-16 h-16 mb-2' src={el.img} alt='' />
                <p className='text-xl xl:text-2xl dark:text-stone-200 font-semibold'>
                  {el.title}
                </p>
                <p className='text-stone-400 dark:text-stone-500'>
                  {el.subTitle}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
}
