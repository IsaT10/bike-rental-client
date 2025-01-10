import { cn } from '@/lib/utils';
import { useEffect, useRef, useState } from 'react';
import { Qoutes } from './shared/Icons';

// Define the type for the items prop
interface ReviewItem {
  message: string;
  name: string;
}

interface InfiniteMovingCardsProps {
  items: ReviewItem[];
  direction?: 'right' | 'left'; // 'right' or 'left'
  speed?: 'fast' | 'normal' | 'slow'; // 'fast', 'normal', or 'slow'
  pauseOnHover?: boolean;
  className?: string;
}

export const InfiniteMovingCards = ({
  items,
  direction = 'right',
  speed = 'fast',
  pauseOnHover = true,
  className,
}: InfiniteMovingCardsProps) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const scrollerRef = useRef<HTMLUListElement | null>(null);
  const [start, setStart] = useState(false);

  useEffect(() => {
    addAnimation();
  }, []);

  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }

  const getDirection = () => {
    if (containerRef.current) {
      if (direction === 'right') {
        containerRef.current.style.setProperty(
          '--animation-direction',
          'forwards'
        );
      } else {
        containerRef.current.style.setProperty(
          '--animation-direction',
          'reverse'
        );
      }
    }
  };

  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === 'fast') {
        containerRef.current.style.setProperty('--animation-duration', '20s');
      } else if (speed === 'normal') {
        containerRef.current.style.setProperty('--animation-duration', '40s');
      } else {
        containerRef.current.style.setProperty('--animation-duration', '80s');
      }
    }
  };

  return (
    <div
      ref={containerRef}
      className={cn(
        'scroller relative z-20 max-w-full overflow-hidden',
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          'flex min-w-full shrink-0 gap-8 py-4 w-max flex-nowrap',
          start && 'animate-scroll',
          pauseOnHover && 'hover:[animation-play-state:paused]'
        )}
      >
        {items.map((item) => (
          <li
            className='w-[288px] md:w-[381px] max-w-full relative rounded-lg md:rounded-2xl border border-b-0 flex-shrink-0 bg-white p-3 md:p-6'
            key={item.name}
          >
            <blockquote className='flex flex-col h-[194px] md:h-[234px]'>
              <div>
                <Qoutes />
                <p className='relative z-20 sm:leading-[22.3px] text-[#5A6369] text-[13px] sm:text-base mt-4 font-normal'>
                  {item.message}
                </p>
              </div>
              <div className='relative z-20 flex flex-row items-center mt-auto'>
                <span className='flex flex-col'>
                  <span className='text-[13px] sm:text-lg font-medium sm:leading-6 tracking-[-0.7px] text-tertiaryColor'>
                    {item.name}
                  </span>
                </span>
              </div>
            </blockquote>
          </li>
        ))}
      </ul>
    </div>
  );
};

// Testimonial component
