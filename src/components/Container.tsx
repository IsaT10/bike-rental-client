import { ReactNode } from 'react';

export default function Container({ children }: { children: ReactNode }) {
  return <div className='w-full px-6 md:px-10 lg:px-16'>{children}</div>;
}
