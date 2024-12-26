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
        className='text-3xl md:text-left text-center md:text-4xl md:text-[40px]  font-semibold pt-10 md:pt-12 lg:pt-16 xl:pt-20 dark:text-stone-200'
        dangerouslySetInnerHTML={{ __html: title }}
      >
        {/* Why
        <br /> Choose Us */}
      </h2>

      <p className='text-[17px] lg:text-[18px] leading-[20px] md:text-left text-center lg:leading-[24px] tracking-tight text-stone-500 dark:text-stone-400 mt-4 md:mb-0 mb-10'>
        {/* Experience unmatched quality, reliability, and customer service. Our
        dedication to excellence ensures that you get the best bikes for every
        adventure, backed by a team that truly cares. */}
        {subTitle}
      </p>
    </div>
  );
}
