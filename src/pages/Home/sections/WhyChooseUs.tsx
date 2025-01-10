import Container from '@/components/Container';
import img from '../../../assets/images/Bike-and-Bicycle_23.png';
import img2 from '../../../assets/images/Bike-and-Bicycle_25.png';
import img3 from '../../../assets/images/Bike-and-Bicycle_31.png';
import img4 from '../../../assets/images/Bike-and-Bicycle_47.png';
import SectionHeader from '@/components/SectionHeader';
import FromLeft from '@/components/animation/from-left';
import FromBottom from '@/components/animation/from-bottom';
import FromTop from '@/components/animation/from-top';

export default function WhyChooseUs() {
  return (
    <div className=' border-t border-b dark:border-stone-700'>
      <Container>
        <div className='flex md:flex-row flex-col md:divide-x dark:divide-stone-700'>
          <FromLeft className='md:w-1/2'>
            <SectionHeader
              className=' md:pr-10 xl:pr-14 '
              title='Why<br />Choose Us'
              subTitle=' Experience unmatched quality, reliability, and customer service.
              Our dedication to excellence ensures that you get the best bikes
              for every adventure, backed by a team that truly cares.'
            />
          </FromLeft>

          {/* <div className='md:w-1/2 grid grid-cols-2  pb-10 md:py-12 gap-y-10 lg:gap-y-20 lg:py-14  '>
            {data.map((el, idx) => (
              <div key={idx} className='flex flex-col items-center'>
                <img className='w-16 h-16 mb-2' src={el.img} alt='' />
                <p className='text-lg sm:text-xl xl:text-2xl dark:text-stone-200 font-semibold'>
                  {el.title}
                </p>
                <p
                  className='text-stone-400 dark:text-stone-500 lg:text-base
                text-sm'
                >
                  {el.subTitle}
                </p>
              </div>
            ))}

            
          </div> */}

          <div className='md:w-1/2 grid grid-cols-2  pb-10 md:py-12 gap-y-10 lg:gap-y-20 py-14 lg:py-20 xl:py-24  '>
            <FromBottom className='flex flex-col items-center'>
              <img className='w-16 h-16 mb-2' src={img2} alt='' />
              <p className='text-lg sm:text-xl xl:text-2xl dark:text-stone-200 font-semibold'>
                Ride Anywhere
              </p>
              <p
                className='text-stone-400 dark:text-stone-500 lg:text-base
                text-sm'
              >
                Until You Tired
              </p>
            </FromBottom>
            <FromBottom className='flex flex-col items-center'>
              <img className='w-16 h-16 mb-2' src={img} alt='' />
              <p className='text-lg sm:text-xl xl:text-2xl dark:text-stone-200 font-semibold'>
                Park Stations
              </p>
              <p
                className='text-stone-400 dark:text-stone-500 lg:text-base
                text-sm'
              >
                Across The Cities
              </p>
            </FromBottom>
            <FromTop className='flex flex-col items-center'>
              <img className='w-16 h-16 mb-2' src={img3} alt='' />
              <p className='text-lg sm:text-xl xl:text-2xl dark:text-stone-200 font-semibold'>
                Easy Process
              </p>
              <p
                className='text-stone-400 dark:text-stone-500 lg:text-base
                text-sm'
              >
                Using our site
              </p>
            </FromTop>
            <FromTop className='flex flex-col items-center'>
              <img className='w-16 h-16 mb-2' src={img4} alt='' />
              <p className='text-lg sm:text-xl xl:text-2xl dark:text-stone-200 font-semibold'>
                Safe Riding
              </p>
              <p
                className='text-stone-400 dark:text-stone-500 lg:text-base
                text-sm'
              >
                Gears Available
              </p>
            </FromTop>
          </div>
        </div>
      </Container>
    </div>
  );
}
