export default function TeamMemberCard({ ...el }) {
  return (
    <div className='relative justify-self-center'>
      <div className='relative max-w-[300px] h-[200px] bg-cover overflow-hidden rounded-sm'>
        <img
          className='w-full h-full transform transition duration-300 hover:scale-110 object-cover'
          src={el.image}
          alt=''
        />
        <div className='absolute inset-0 bg-gradient-to-t from-[#000000] via-[#00000061] to-transparent pointer-events-none'></div>
      </div>
      <div className='absolute bottom-5 left-5'>
        <h5 className='font-bold text-white text-xl'>{el.name}</h5>
        <p className='text-stone-400 text-sm'>{el.role}</p>
      </div>
    </div>
  );
}
