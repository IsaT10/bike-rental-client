import PageHeader from '@/components/PageHeader';
import img from '../../assets/images/bike4.jpg';
import Container from '@/components/Container';
import png from '../../assets/images/group.png';
import png2 from '../../assets/images/motorbike.png';
import png3 from '../../assets/images/racing-helmet.png';
import png4 from '../../assets/images/trust.png';
import TeamMemberCard from '@/components/TeamMemberCard';
import Map from '@/components/Map';
import {
  Facebook,
  Instagram,
  LinkedIn,
  Location,
  Message,
  Phone,
  WhatsApp,
} from '@/components/shared/Icons';

const teamMembers = [
  {
    id: 1,
    name: 'Son',
    role: 'Customer Experience Manager',
    image: 'https://i.ibb.co/VVxjmbg/pexels-stefanstefancik-91227-1.jpg',
  },
  {
    id: 2,
    name: 'Steve',
    role: 'Social Media Manager',
    image: 'https://i.ibb.co/W5mbzM6/pexels-olly-846741-1.jpg',
  },
  {
    id: 3,
    name: 'Jhon',
    role: 'Customer Experience Manager',
    image: 'https://i.ibb.co/LnS2cFv/pexels-danxavier-1212984-1.jpg',
  },
  {
    id: 4,
    name: 'William',
    role: 'Chief Marketing Officer',
    image: 'https://i.ibb.co/xJvkRm8/pexels-spencer-selover-142259-428333.jpg',
  },
];

export default function AboutUs() {
  return (
    <div>
      <PageHeader
        heading='Our Journey, Your Adventure'
        subHeading='Discover the story behind our passion for biking and our commitment to delivering top-quality rentals and services. '
        img={img}
      />

      <div className=' border-t'>
        <Container>
          <div className='flex md:flex-row flex-col divide-x '>
            <div className='md:w-1/2 md:pr-10 xl:pr-20 pb-10 xl:pb-20 border-b border-r'>
              <h2 className='text-3xl md:text-left text-center sm:text-4xl md:text-[40px] lg:text-6xl font-semibold pt-10 md:pt-12 lg:pt-16 xl:pt-20 '>
                Purpose. Passion. Freedom
              </h2>

              <p className='text-[17px] lg:text-[18px] leading-[20px] md:text-left text-center lg:leading-[24px] tracking-tight text-stone-500 mt-4 md:mb-0 mb-10'>
                Our mission is to provide high-quality, reliable bikes for every
                adventure, fostering a community that values sustainability,
                freedom, and exploration while promoting a healthy and
                eco-friendly lifestyle.
              </p>
            </div>
            <img
              className='md:inline hidden  lg:h-[600px] rounded-tr-[70px] xl:h-[650px] pl-10 xl:pl-20 -mt-10 lg:-mt-12 pb-10 xl:pb-20 w-1/2  object-cover'
              src={img}
              alt=''
            />
          </div>
        </Container>
      </div>

      <div className=' border-t'>
        <Container>
          <div className='flex md:flex-row flex-col-reverse divide-x '>
            <div className='md:w-1/2  pt-10 md:pt-12 lg:pt-16 xl:pt-20  md:pr-10 xl:pr-20 pb-10 xl:pb-20 border-b border-r'>
              <div className='grid grid-cols-2 gap-x-8 gap-y-20'>
                <div className='flex gap-2 items-center justify-center'>
                  <img className='lg:w-16 w-12 h-12 lg:h-16' src={png} alt='' />
                  <div>
                    <p className='text-2xl lg:text-3xl xl:text-4xl text-primary-color font-bold'>
                      500+
                    </p>
                    <p className='text-sm lg:text-lg '>Happy Customers</p>
                  </div>
                </div>
                <div className='flex gap-2 items-center justify-center'>
                  <img
                    className='lg:w-16 w-12 h-12 lg:h-16'
                    src={png2}
                    alt=''
                  />
                  <div>
                    <p className='text-2xl lg:text-3xl xl:text-4xl text-primary-color font-bold'>
                      1000+
                    </p>
                    <p className='text-sm lg:text-lg '>Bike In Garage</p>
                  </div>
                </div>
                <div className='flex gap-2 items-center justify-center'>
                  <img
                    className='lg:w-16 w-12 h-12 lg:h-16'
                    src={png3}
                    alt=''
                  />
                  <div>
                    <p className='text-2xl lg:text-3xl xl:text-4xl text-primary-color font-bold'>
                      1500+
                    </p>
                    <p className='text-sm lg:text-lg '>Successful Rentals</p>
                  </div>
                </div>
                <div className='flex gap-2 items-center justify-center'>
                  <img
                    className='lg:w-16 w-12 h-12 lg:h-16'
                    src={png4}
                    alt=''
                  />
                  <div>
                    <p className='text-2xl lg:text-3xl xl:text-4xl text-primary-color font-bold'>
                      5 Years
                    </p>
                    <p className='text-sm lg:text-lg '>Of Trusted Service</p>
                  </div>
                </div>
                <div>
                  <p> </p>
                  <p></p>
                </div>
                <div>
                  <p></p>
                  <p></p>
                </div>
              </div>
            </div>
            <div className='md:w-1/2 md:pl-10 xl:pl-20 xl:pb-20 border-b border-r'>
              <h2 className='text-3xl md:text-left text-center sm:text-4xl md:text-[40px] lg:text-6xl font-semibold pt-10 md:pt-12 lg:pt-16 xl:pt-20 '>
                Milestones of Excellence
              </h2>

              <p className='text-[17px] lg:text-[18px] leading-[20px] md:text-left text-center lg:leading-[24px] tracking-tight text-stone-500 mt-4 md:mb-0 mb-10'>
                From humble beginnings to industry leader, explore our journey
                of growth, innovation, and achievements that have shaped our
                success and driven us forward through the years.
              </p>
            </div>
          </div>
        </Container>
      </div>

      <Container>
        <div className=' flex md:flex-row items-center flex-col divide-x '>
          <div className='md:w-[40%] md:pr-10 xl:pr-20  xl:pb-20 border-b border-r'>
            <h2 className='text-3xl md:text-left text-center sm:text-4xl md:text-[40px] lg:text-6xl font-semibold pt-10 md:0'>
              Meet Our Team
            </h2>

            <p className='text-[17px] lg:text-[18px] leading-[20px] md:text-left text-center lg:leading-[24px] tracking-tight text-stone-500 mt-4 md:mb-0 mb-10'>
              Our dedicated and passionate team works tirelessly to bring you
              the best. Get to know the experts behind our success, committed to
              delivering excellence every step of the way.
            </p>
          </div>
          <div className='md:w-[60%] py-10 border-b md:pl-4 md:py-12 lg:py-16 xl:py-20 grid   md:grid-cols-2 gap-10'>
            {teamMembers.map((member) => (
              <TeamMemberCard key={member.id} {...member} />
            ))}
          </div>
        </div>
      </Container>

      <Container>
        <div className='md:flex gap-10'>
          <div className='flex-1'>
            <div className='flex flex-col items-center md:items-start border-r my-10 md:my-20 h-[85%] justify-between'>
              <div className='lg:text-base flex flex-col items-center md:items-start text-sm font-semibold space-y-4'>
                <p className='flex items-center gap-1.5'>
                  <Location />
                  <span className='text-stone-600 font-normal'>
                    8644 103rd Ave, Ozone Park, NY 11417
                  </span>
                </p>
                <p className='flex items-center gap-1.5'>
                  <Phone />
                  <span className='text-stone-600 font-normal'>
                    +1 (555) 123-4567
                  </span>
                </p>
                <p className='flex items-center gap-1.5'>
                  <Message />
                  <span className='text-stone-600 font-normal'>
                    contact@xrides.com
                  </span>
                </p>
              </div>
              <div className='flex flex-col items-center md:items-start mb-8 md:mb-16'>
                <p className='text-sm lg:text-lg  font-bold mb-4'>Follow us</p>
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
          </div>
          <Map />
        </div>
      </Container>
    </div>
  );
}
