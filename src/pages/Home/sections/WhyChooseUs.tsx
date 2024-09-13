import Container from '@/components/Container';
import img from '../../../assets/images/Bike-and-Bicycle_23.png';
import img2 from '../../../assets/images/Bike-and-Bicycle_25.png';
import img3 from '../../../assets/images/Bike-and-Bicycle_31.png';
import img4 from '../../../assets/images/Bike-and-Bicycle_47.png';

const data = [
  { img: img, title: 'Ride Anywhere', subTitle: 'Until You Tired' },
  { img: img2, title: 'Park Stations', subTitle: 'Across The Cities' },
  { img: img3, title: 'Easy Process', subTitle: 'Using our site' },
  { img: img4, title: 'Safe Riding', subTitle: 'Gears Available' },
];

export default function WhyChooseUs() {
  return (
    <div className=' border-t'>
      <Container>
        <div className='flex md:flex-row flex-col divide-x '>
          <div className='md:w-1/2 md:pr-10 xl:pr-20 border-b'>
            <h2 className='text-3xl md:text-left text-center sm:text-4xl md:text-[40px] lg:text-6xl font-semibold pt-10 md:pt-12 lg:pt-16 xl:pt-20 '>
              Why
              <br /> Choose Us
            </h2>

            <p className='text-[17px] lg:text-[18px] leading-[20px] md:text-left text-center lg:leading-[24px] tracking-tight text-stone-500 mt-4 md:mb-0 mb-10'>
              Experience unmatched quality, reliability, and customer service.
              Our dedication to excellence ensures that you get the best bikes
              for every adventure, backed by a team that truly cares.
            </p>
          </div>

          <div className='md:w-1/2 grid grid-cols-2 border-b  py-10 md:py-12 gap-y-20 lg:py-16 xl:py-20 '>
            {data.map((el, idx) => (
              <div key={idx} className='flex flex-col items-center'>
                <img className='w-16 h-16 mb-2' src={el.img} alt='' />
                <p className='text-xl xl:text-2xl font-semibold'>{el.title}</p>
                <p className='text-stone-400'>{el.subTitle}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
}
