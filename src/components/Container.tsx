import { ReactNode } from 'react';

export default function Container({ children }: { children: ReactNode }) {
  return (
    <div className='max-w-[1400px] mx-auto px-5 md:px-6 lg:px-10'>
      {children}
    </div>
  );
}
