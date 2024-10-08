type TPageHeaderProps = {
  heading: string;
  subHeading: string;
  img: string;
};

export default function PageHeader({
  heading,
  subHeading,
  img,
}: TPageHeaderProps) {
  return (
    <div className='flex'>
      <div
        className='bg-secondary-color flex-1 text-white flex flex-col justify-center px-5 md:px-8 lg:px-16'
        style={{ aspectRatio: '5 / 4' }}
      >
        <h1 className='text-3xl xs:text-4xl text-center sm:text-left md:text-4xl lg:text-6xl xl:text-7xl font-semibold mb-7 md:mb-5'>
          {heading}
        </h1>
        <p className='xl:w-[80%] font-light md:font-normal text-center sm:text-left lg:text-lg'>
          {subHeading}
        </p>
      </div>
      <div className='hidden relative sm:block w-1/2 pb-20 lg:pb-24 xl:pb-28 2xl:pb-36'>
        <img
          className='w-full object-cover'
          style={{ aspectRatio: '5 / 4' }}
          src={img}
          alt='Bike'
        />

        {/* <BlurImage
          src={img}
          blurHash={'OSMG@kNbkWRPNdxu%M00yDxuMxozj[of_N%MWVjZofWVf6'}
          className='w-full object-cover'
        /> */}
        <div
          style={{ aspectRatio: '5 / 4' }}
          className='absolute  right-0 inset-0 bg-gradient-to-b from-[#000000fb] to-[#00000000]'
        ></div>
      </div>
    </div>
  );
}
