type TSectionHeaderProps = {
  className: string;
  title: string;
  subTitle: string;
};

export default function SectionHeader({
  className,
  title,
  subTitle,
}: TSectionHeaderProps) {
  return (
    <div className={`${className}`}>
      <h2
        className='text-2xl sm:text-3xl sm:leading-normal leading-7 md:text-left text-center md:text-4xl   font-semibold pt-10 md:pt-12 lg:pt-16 xl:pt-20 dark:text-stone-200'
        dangerouslySetInnerHTML={{ __html: title }}
      >
        {/* Why
        <br /> Choose Us */}
      </h2>

      <p className='text-[14px] w-[90%] md:w-full mx-auto md:text-base lg:text-[18px] leading-[16px] md:text-left text-center lg:leading-[24px] tracking-tight text-stone-500 dark:text-stone-400 mt-3 md:mb-0 mb-10'>
        {/* Experience unmatched quality, reliability, and customer service. Our
        dedication to excellence ensures that you get the best bikes for every
        adventure, backed by a team that truly cares. */}
        {subTitle}
      </p>
    </div>
  );
}
