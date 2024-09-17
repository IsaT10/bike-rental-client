import { Link } from 'react-router-dom';

export default function ErrorPage() {
  return (
    <div className='h-screen w-full flex flex-col justify-center items-center bg-'>
      <h1 className='text-9xl font-extrabold text-stone-800 tracking-widest'>
        404
      </h1>
      <div className='bg-primary-color px-2 text-sm rounded rotate-12 absolute'>
        Page Not Found
      </div>
      <Link to='/' className='mt-5'>
        <button className='px-10 py-3 border-stone-600 text-stone-800 dark:border-stone-400 md:py-3.5 sm:text-base text-sm s text md:text-lg border mr-6 rounded-[17px] md:rounded-[22px] hover:text-white font-semibold duration-200 pt-3    before:absolute before:block before:inset-0 before:-z-10 before:bg-transparent overflow-hidden after:block hover:after:w-full after:w-0 after:hover:left-0 after:right-0 after:top-0 after:h-full after:-z-10 after:duration-300 after:bg-primary-color after:absolute relative inline-block'>
          Go Home
        </button>
      </Link>
    </div>
  );
}
