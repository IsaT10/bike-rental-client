export const Checkbox = ({ color = '#335B6C' }) => (
  <svg
    width='20'
    height='20'
    viewBox='0 0 20 20'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <g id='SVG'>
      <path
        id='Vector'
        fillRule='evenodd'
        clipRule='evenodd'
        d='M10 18C12.1217 18 14.1566 17.1571 15.6569 15.6569C17.1571 14.1566 18 12.1217 18 10C18 7.87827 17.1571 5.84344 15.6569 4.34315C14.1566 2.84285 12.1217 2 10 2C7.87827 2 5.84344 2.84285 4.34315 4.34315C2.84285 5.84344 2 7.87827 2 10C2 12.1217 2.84285 14.1566 4.34315 15.6569C5.84344 17.1571 7.87827 18 10 18ZM13.707 8.707C13.8892 8.5184 13.99 8.2658 13.9877 8.0036C13.9854 7.7414 13.8802 7.49059 13.6948 7.30518C13.5094 7.11977 13.2586 7.0146 12.9964 7.01233C12.7342 7.01005 12.4816 7.11084 12.293 7.293L9 10.586L7.707 9.293C7.5184 9.11084 7.2658 9.01005 7.0036 9.01233C6.7414 9.0146 6.49059 9.11977 6.30518 9.30518C6.11977 9.49059 6.0146 9.7414 6.01233 10.0036C6.01005 10.2658 6.11084 10.5184 6.293 10.707L8.293 12.707C8.48053 12.8945 8.73484 12.9998 9 12.9998C9.26516 12.9998 9.51947 12.8945 9.707 12.707L13.707 8.707Z'
        fill={color}
      />
    </g>
  </svg>
);

export const Qoutes = () => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='32'
    height='32'
    viewBox='0 0 32 32'
    fill='none'
  >
    <path
      d='M10.7867 15.5067H4.53341C4.64008 9.28 5.86675 8.25333 9.69341 5.98667C10.1334 5.72 10.2801 5.16 10.0134 4.70667C9.76008 4.26667 9.18675 4.12 8.74675 4.38667C4.24008 7.05334 2.66675 8.68 2.66675 16.4267V23.6133C2.66675 25.8933 4.52008 27.7333 6.78675 27.7333H10.7867C13.1334 27.7333 14.9067 25.96 14.9067 23.6133V19.6133C14.9067 17.28 13.1334 15.5067 10.7867 15.5067Z'
      fill='#2A9D90'
    />
    <path
      d='M25.2133 15.5067H18.96C19.0666 9.28 20.2933 8.25334 24.12 5.98667C24.56 5.72 24.7066 5.16 24.44 4.70667C24.1733 4.26667 23.6133 4.12 23.16 4.38667C18.6533 7.05334 17.08 8.68 17.08 16.44V23.6267C17.08 25.9067 18.9333 27.7467 21.2 27.7467H25.2C27.5466 27.7467 29.32 25.9733 29.32 23.6267V19.6267C29.3333 17.28 27.56 15.5067 25.2133 15.5067Z'
      fill='#2A9D90'
    />
  </svg>
);
export const LeftArrow = () => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 24 24'
    strokeWidth='2'
    stroke='#2A9D90'
    className='size-5'
  >
    <path
      strokeLinecap='round'
      strokeLinejoin='round'
      d='M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18'
    />
  </svg>
);
export const Google = () => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='28'
    height='28'
    viewBox='0 0 488 512'
    fill='#2A9D90'
    className='size-5 cursor-pointer'
  >
    <path d='M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z' />
  </svg>
);

export const Facebook = ({ bg = '#2A9D90', fill = 'white' }) => (
  <svg
    width='28'
    height='28'
    viewBox='0 0 28 28'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <rect width='28' height='28' rx='4' fill={bg} fillOpacity='1' />
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M14.7566 10H16V8H14.7566C14.0245 8.00088 13.3227 8.29209 12.805 8.80975C12.2874 9.32741 11.9962 10.0293 11.9953 10.7613V12H10.6666V14H12V20.6253H14V14H15.3473L15.742 12H14V10.394C14.0015 10.2899 14.0436 10.1905 14.1173 10.1169C14.191 10.0433 14.2905 10.0014 14.3946 10H14.7566Z'
      fill={fill}
    />
  </svg>
);

export const WhatsApp = ({ bg = '#2A9D90', fill = 'white' }) => (
  <svg
    width='28'
    height='28'
    viewBox='0 0 28 28'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <rect width='28' height='28' rx='4' fill={bg} fillOpacity='1' />
    <path
      d='M18.7 9.27329C18.0888 8.65591 17.3608 8.1664 16.5585 7.83333C15.7561 7.50025 14.8954 7.33027 14.0267 7.33329C10.3867 7.33329 7.42003 10.3 7.42003 13.94C7.42003 15.1066 7.7267 16.24 8.30003 17.24L7.3667 20.6666L10.8667 19.7466C11.8334 20.2733 12.92 20.5533 14.0267 20.5533C17.6667 20.5533 20.6334 17.5866 20.6334 13.9466C20.6334 12.18 19.9467 11 18.7 9.27329ZM14.0267 19.4333C13.04 19.4333 12.0734 19.1666 11.2267 18.6666L11.0267 18.5466L8.9467 19.0933L9.50003 17.0666L9.3667 16.86C8.81853 15.9846 8.52746 14.9728 8.5267 13.94C8.5267 10.9133 10.9934 8.44663 14.02 8.44663C15.4867 8.44663 16.8667 9.01996 17.9 10.06C18.4117 10.5693 18.8172 11.1751 19.093 11.8422C19.3688 12.5094 19.5094 13.2247 19.5067 13.9466C19.52 16.9733 17.0534 19.4333 14.0267 19.4333ZM17.04 15.3266C16.8734 15.2466 16.06 14.8466 15.9134 14.7866C15.76 14.7333 15.6534 14.7066 15.54 14.8666C15.4267 15.0333 15.1134 15.4066 15.02 15.5133C14.9267 15.6266 14.8267 15.64 14.66 15.5533C14.4934 15.4733 13.96 15.2933 13.3334 14.7333C12.84 14.2933 12.5134 13.7533 12.4134 13.5866C12.32 13.42 12.4 13.3333 12.4867 13.2466C12.56 13.1733 12.6534 13.0533 12.7334 12.96C12.8134 12.8666 12.8467 12.7933 12.9 12.6866C12.9534 12.5733 12.9267 12.48 12.8867 12.4C12.8467 12.32 12.5134 11.5066 12.38 11.1733C12.2467 10.8533 12.1067 10.8933 12.0067 10.8866H11.6867C11.5734 10.8866 11.4 10.9266 11.2467 11.0933C11.1 11.26 10.6734 11.66 10.6734 12.4733C10.6734 13.2866 11.2667 14.0733 11.3467 14.18C11.4267 14.2933 12.5134 15.96 14.1667 16.6733C14.56 16.8466 14.8667 16.9466 15.1067 17.02C15.5 17.1466 15.86 17.1266 16.1467 17.0866C16.4667 17.04 17.1267 16.6866 17.26 16.3C17.4 15.9133 17.4 15.5866 17.3534 15.5133C17.3067 15.44 17.2067 15.4066 17.04 15.3266Z'
      fill={fill}
    />
  </svg>
);

export const Instagram = ({ bg = '#2A9D90', fill = 'white' }) => (
  <svg
    width='28'
    height='28'
    viewBox='0 0 28 28'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <rect width='28' height='28' rx='4' fill={bg} fillOpacity='1' />
    <path
      d='M14 16.6666C14.7073 16.6666 15.3856 16.3856 15.8857 15.8855C16.3858 15.3854 16.6667 14.7072 16.6667 13.9999C16.6667 13.2927 16.3858 12.6144 15.8857 12.1143C15.3856 11.6142 14.7073 11.3333 14 11.3333C13.2928 11.3333 12.6145 11.6142 12.1144 12.1143C11.6143 12.6144 11.3334 13.2927 11.3334 13.9999C11.3334 14.7072 11.6143 15.3854 12.1144 15.8855C12.6145 16.3856 13.2928 16.6666 14 16.6666Z'
      stroke={fill}
      strokeWidth='1.5'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M8 16.6667V11.3333C8 10.4493 8.35119 9.60143 8.97631 8.97631C9.60143 8.35119 10.4493 8 11.3333 8H16.6667C17.5507 8 18.3986 8.35119 19.0237 8.97631C19.6488 9.60143 20 10.4493 20 11.3333V16.6667C20 17.5507 19.6488 18.3986 19.0237 19.0237C18.3986 19.6488 17.5507 20 16.6667 20H11.3333C10.4493 20 9.60143 19.6488 8.97631 19.0237C8.35119 18.3986 8 17.5507 8 16.6667Z'
      stroke={fill}
      strokeWidth='1.5'
    />
    <path
      d='M17.6666 10.3392L17.6725 10.3328'
      stroke={fill}
      strokeWidth='1.5'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

export const LinkedIn = ({ bg = '#2A9D90', fill = 'white' }) => (
  <svg
    width='28'
    height='28'
    viewBox='0 0 28 28'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <rect width='28' height='28' rx='4' fill={bg} fillOpacity='1' />
    <path
      d='M10.6267 9.33327C10.6265 9.68689 10.4859 10.026 10.2357 10.2759C9.98552 10.5258 9.64631 10.6661 9.29269 10.6659C8.93907 10.6658 8.6 10.5251 8.35007 10.2749C8.10015 10.0248 7.95985 9.68556 7.96002 9.33193C7.9602 8.97831 8.10084 8.63924 8.35102 8.38932C8.60119 8.1394 8.9404 7.99909 9.29402 7.99927C9.64764 7.99944 9.98671 8.14009 10.2366 8.39026C10.4866 8.64044 10.6269 8.97965 10.6267 9.33327ZM10.6667 11.6533H8.00002V19.9999H10.6667V11.6533ZM14.88 11.6533H12.2267V19.9999H14.8534V15.6199C14.8534 13.1799 18.0334 12.9533 18.0334 15.6199V19.9999H20.6667V14.7133C20.6667 10.5999 15.96 10.7533 14.8534 12.7733L14.88 11.6533Z'
      fill={fill}
    />
  </svg>
);

export const Spinner = ({ className }: { className?: string }) => (
  <svg
    className={`animate-spin ${className ? className : 'h-6 w-6'}`}
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 24 24'
  >
    <circle
      className='opacity-25'
      cx='12'
      cy='12'
      r='10'
      stroke='currentColor'
      strokeWidth='4'
    ></circle>
    <path
      className='opacity-75'
      fill='currentColor'
      d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'
    ></path>
  </svg>
);

export const Map = () => (
  <svg
    width='24'
    height='24'
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      d='M20 18.6276C20 19.1647 19.6957 19.694 19.1124 20.1715C18.5291 20.6491 17.6836 21.0609 16.6464 21.3729C15.6092 21.6848 14.4103 21.8878 13.1494 21.965C11.8885 22.0422 10.6021 21.9913 9.39733 21.8165C8.19253 21.6418 7.10416 21.3483 6.2228 20.9604C5.34145 20.5725 4.69261 20.1015 4.33029 19.5866C3.96797 19.0717 3.90264 18.5277 4.13975 18'
      stroke='#A4B5C1'
      strokeWidth='1.5'
      strokeLinecap='round'
    />
    <path
      d='M6.24396 11.0272C4.5358 7.13749 7.49047 2.75 12 2.75C16.5095 2.75 19.4642 7.13749 17.756 11.0273L14.9723 17.3662C14.4766 18.4952 13.3125 19.25 12 19.25C10.6875 19.25 9.52344 18.4952 9.02768 17.3662L6.24396 11.0272Z'
      stroke='#A4B5C1'
      strokeWidth='1.5'
    />
    <circle cx='12' cy='8' r='2' stroke='#A4B5C1' strokeWidth='1.5' />
  </svg>
);

export const Email = () => (
  <svg
    width='24'
    height='24'
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <rect
      x='4'
      y='6'
      width='16'
      height='12'
      rx='2.8'
      stroke='#2A9D90'
      strokeWidth='1.5'
    />
    <path
      d='M8 10L11.4 12.55C11.7556 12.8167 12.2444 12.8167 12.6 12.55L16 10'
      stroke='#2A9D90'
      strokeWidth='1.5'
      strokeLinecap='round'
    />
  </svg>
);

export const NavClose = () => (
  <svg
    width='40'
    height='40'
    viewBox='0 0 40 40'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    className='cursor-pointer'
  >
    <path
      d='M27 14.41L25.59 13L20 18.59L14.41 13L13 14.41L18.59 20L13 25.59L14.41 27L20 21.41L25.59 27L27 25.59L21.41 20L27 14.41Z'
      fill='#000'
    />
  </svg>
);
export const Close = () => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 24 24'
    strokeWidth='2.5'
    stroke='currentColor'
    className='size-5 cursor-pointer'
  >
    <path
      strokeLinecap='round'
      strokeLinejoin='round'
      d='M6 18 18 6M6 6l12 12'
    />
  </svg>
);
export const NavOpen = ({ fill = '#fff' }) => (
  <svg
    width='40'
    height='40'
    viewBox='0 0 40 40'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      d='M12 14H28V16H12V14ZM12 19H28V21H12V19ZM12 24H28V26H12V24Z'
      fill={fill}
    />
  </svg>
);

export const Filter = () => (
  <svg
    stroke='currentColor'
    fill='currentColor'
    strokeWidth='0'
    viewBox='0 0 512 512'
    height='14px'
    width='14px'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path d='M472 168H40a24 24 0 0 1 0-48h432a24 24 0 0 1 0 48zm-80 112H120a24 24 0 0 1 0-48h272a24 24 0 0 1 0 48zm-96 112h-80a24 24 0 0 1 0-48h80a24 24 0 0 1 0 48z'></path>
  </svg>
);

export const Remove = () => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 24 24'
    strokeWidth='1.5'
    stroke='currentColor'
    className='size-6'
  >
    <path
      strokeLinecap='round'
      strokeLinejoin='round'
      d='m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z'
    />
  </svg>
);

export const Plus = () => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 24 24'
    strokeWidth='3'
    stroke='#555'
    className='size-3'
  >
    <path
      strokeLinecap='round'
      strokeLinejoin='round'
      d='M12 4.5v15m7.5-7.5h-15'
    />
  </svg>
);
export const Minus = () => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 24 24'
    strokeWidth='3'
    stroke='#555'
    className='size-3'
  >
    <path strokeLinecap='round' strokeLinejoin='round' d='M5 12h14' />
  </svg>
);
export const Cart = () => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 24 24'
    strokeWidth='1.5'
    stroke='black'
    className='size-5'
  >
    <path
      strokeLinecap='round'
      strokeLinejoin='round'
      d='M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z'
    />
  </svg>
);

export const Message = () => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 24 24'
    strokeWidth='2'
    stroke='#2A9D90'
    className='size-5'
  >
    <path
      strokeLinecap='round'
      strokeLinejoin='round'
      d='M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75'
    />
  </svg>
);
export const Phone = () => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 24 24'
    strokeWidth='2'
    stroke='#2A9D90'
    className='size-5'
  >
    <path
      strokeLinecap='round'
      strokeLinejoin='round'
      d='M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3'
    />
  </svg>
);
export const Location = () => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 24 24'
    strokeWidth='2'
    stroke='#2A9D90'
    className='w-[22px] h-[22px]'
  >
    <path
      strokeLinecap='round'
      strokeLinejoin='round'
      d='M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z'
    />
    <path
      strokeLinecap='round'
      strokeLinejoin='round'
      d='M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z'
    />
  </svg>
);
export const Edit = () => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 24 24'
    strokeWidth='1.5'
    stroke='currentColor'
    className='size-5'
  >
    <path
      strokeLinecap='round'
      strokeLinejoin='round'
      d='m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10'
    />
  </svg>
);
export const Copy = () => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 24 24'
    strokeWidth='1.5'
    stroke='currentColor'
    className='size-5 text-stone-500'
  >
    <path
      strokeLinecap='round'
      strokeLinejoin='round'
      d='M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 0 1-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 0 1 1.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 0 0-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 0 1-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 0 0-3.375-3.375h-1.5a1.125 1.125 0 0 1-1.125-1.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H9.75'
    />
  </svg>
);
export const Trash = () => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 24 24'
    fill='currentColor'
    className='size-6'
  >
    <path d='M3.375 3C2.339 3 1.5 3.84 1.5 4.875v.75c0 1.036.84 1.875 1.875 1.875h17.25c1.035 0 1.875-.84 1.875-1.875v-.75C22.5 3.839 21.66 3 20.625 3H3.375Z' />
    <path
      fillRule='evenodd'
      d='m3.087 9 .54 9.176A3 3 0 0 0 6.62 21h10.757a3 3 0 0 0 2.995-2.824L20.913 9H3.087Zm6.133 2.845a.75.75 0 0 1 1.06 0l1.72 1.72 1.72-1.72a.75.75 0 1 1 1.06 1.06l-1.72 1.72 1.72 1.72a.75.75 0 1 1-1.06 1.06L12 15.685l-1.72 1.72a.75.75 0 1 1-1.06-1.06l1.72-1.72-1.72-1.72a.75.75 0 0 1 0-1.06Z'
      clipRule='evenodd'
    />
  </svg>
);
export const Compare = ({
  className,
  color = 'black',
}: {
  className: string;
  color: string;
}) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 24 24'
    fill={color}
    className={`${className}`}
  >
    <path
      fillRule='evenodd'
      d='M7.502 6h7.128A3.375 3.375 0 0 1 18 9.375v9.375a3 3 0 0 0 3-3V6.108c0-1.505-1.125-2.811-2.664-2.94a48.972 48.972 0 0 0-.673-.05A3 3 0 0 0 15 1.5h-1.5a3 3 0 0 0-2.663 1.618c-.225.015-.45.032-.673.05C8.662 3.295 7.554 4.542 7.502 6ZM13.5 3A1.5 1.5 0 0 0 12 4.5h4.5A1.5 1.5 0 0 0 15 3h-1.5Z'
      clipRule='evenodd'
    />
    <path
      fillRule='evenodd'
      d='M3 9.375C3 8.339 3.84 7.5 4.875 7.5h9.75c1.036 0 1.875.84 1.875 1.875v11.25c0 1.035-.84 1.875-1.875 1.875h-9.75A1.875 1.875 0 0 1 3 20.625V9.375ZM6 12a.75.75 0 0 1 .75-.75h.008a.75.75 0 0 1 .75.75v.008a.75.75 0 0 1-.75.75H6.75a.75.75 0 0 1-.75-.75V12Zm2.25 0a.75.75 0 0 1 .75-.75h3.75a.75.75 0 0 1 0 1.5H9a.75.75 0 0 1-.75-.75ZM6 15a.75.75 0 0 1 .75-.75h.008a.75.75 0 0 1 .75.75v.008a.75.75 0 0 1-.75.75H6.75a.75.75 0 0 1-.75-.75V15Zm2.25 0a.75.75 0 0 1 .75-.75h3.75a.75.75 0 0 1 0 1.5H9a.75.75 0 0 1-.75-.75ZM6 18a.75.75 0 0 1 .75-.75h.008a.75.75 0 0 1 .75.75v.008a.75.75 0 0 1-.75.75H6.75a.75.75 0 0 1-.75-.75V18Zm2.25 0a.75.75 0 0 1 .75-.75h3.75a.75.75 0 0 1 0 1.5H9a.75.75 0 0 1-.75-.75Z'
      clipRule='evenodd'
    />
  </svg>
);

export const Tick = () => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 24 24'
    strokeWidth='4'
    stroke='#2A9D90'
    className='size-6'
  >
    <path
      strokeLinecap='round'
      strokeLinejoin='round'
      d='m4.5 12.75 6 6 9-13.5'
    />
  </svg>
);
export const Search = () => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 24 24'
    strokeWidth='3'
    stroke='#2A9D90'
    className='size-5'
  >
    <path
      strokeLinecap='round'
      strokeLinejoin='round'
      d='m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z'
    />
  </svg>
);
export const Star = () => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 24 24'
    fill='#FFBE00'
    className='size-6'
  >
    <path
      fillRule='evenodd'
      d='M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z'
      clipRule='evenodd'
    />
  </svg>
);
export const Helmet = () => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 24 24'
    className='size-10 md:size-12'
  >
    <path
      fill='currentColor'
      d='M2.2 11.2c-.2 2.4.5 4.4 2 6.2S7.7 20 10.1 20h10c.5 0 1-.2 1.4-.6s.6-.9.6-1.4v-.8c0-.6-.1-1.3-.2-2.2h-8.2c-1 0-1.8-.4-2.5-1.1s-1.1-1.6-1.1-2.5c0-1.6.7-2.7 2.2-3.3L17.1 6c-1.7-1.2-3.7-1.9-6-2c-2.2-.2-4.2.5-6 1.9S2.4 9 2.2 11.2m9.9.2c0 .4.2.8.5 1.1s.7.5 1.1.5h7.8c-.6-2.2-1.5-4-2.8-5.4l-5.6 2.3c-.7.2-1 .7-1 1.5'
    />
  </svg>
);
export const Helmet2 = () => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='24'
    height='24'
    viewBox='0 0 24 24'
  >
    <g
      fill='none'
      stroke='currentColor'
      stroke-linecap='round'
      stroke-linejoin='round'
      stroke-width='1.5'
    >
      <path d='M22 12.2a10 10 0 1 0-19.4 3.2c.2.5.8 1.1 1.3 1.3l13.2 5.1c.5.2 1.2 0 1.6-.3l2.6-2.6c.4-.4.7-1.2.7-1.7Z' />
      <path d='m21.8 18l-10.5-4a2 2.06 0 0 1 .7-4h9.8' />
    </g>
  </svg>
);
export const Discount = () => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 24 24'
    className='size-10 md:size-12'
  >
    <path
      fill='currentColor'
      d='M17 3.34A10 10 0 1 1 2 12l.005-.324A10 10 0 0 1 17 3.34M14.5 13a1.5 1.5 0 1 0 0 3a1.5 1.5 0 0 0 0-3m1.207-4.707a1 1 0 0 0-1.414 0l-6 6a1 1 0 0 0 1.414 1.414l6-6a1 1 0 0 0 0-1.414M9.5 8a1.5 1.5 0 1 0 0 3a1.5 1.5 0 0 0 0-3'
    />
  </svg>
);
export const Cross = () => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 32 32'
    className='size-6 md:size-9'
  >
    <path
      fill='currentColor'
      stroke='currentColor'
      strokeWidth='2'
      d='M24.879 2.879A3 3 0 1 1 29.12 7.12l-8.79 8.79a.125.125 0 0 0 0 .177l8.79 8.79a3 3 0 1 1-4.242 4.243l-8.79-8.79a.125.125 0 0 0-.177 0l-8.79 8.79a3 3 0 1 1-4.243-4.242l8.79-8.79a.125.125 0 0 0 0-.177l-8.79-8.79A3 3 0 0 1 7.12 2.878l8.79 8.79a.125.125 0 0 0 .177 0z'
    />
  </svg>
);
export const Lock = () => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    className='size-6'
    viewBox='0 0 1024 1024'
  >
    <path
      fill='currentColor'
      d='M800 384h-32V261.872C768 115.024 661.744 0 510.816 0C359.28 0 256 117.472 256 261.872V384h-32c-70.592 0-128 57.408-128 128v384c0 70.592 57.408 128 128 128h576c70.592 0 128-57.408 128-128V512c0-70.592-57.408-128-128-128M320 261.872C320 152.784 394.56 64 510.816 64C625.872 64 704 150.912 704 261.872V384H320zM864.001 896c0 35.28-28.72 64-64 64h-576c-35.28 0-64-28.72-64-64V512c0-35.28 28.72-64 64-64h576c35.28 0 64 28.72 64 64zm-352-320c-35.344 0-64 28.656-64 64c0 23.632 12.96 44.032 32 55.12V800c0 17.664 14.336 32 32 32s32-14.336 32-32V695.12c19.04-11.088 32-31.504 32-55.12c0-35.344-28.656-64-64-64'
    />
  </svg>
);
export const Glove = () => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    className='size-8'
    viewBox='0 0 48 48'
  >
    <g fill='currentColor'>
      <path
        fill-rule='evenodd'
        d='M28 8.17A3 3 0 0 1 32 11v10.15l1.056-1.32a3.304 3.304 0 0 1 5.328 3.896l-3.458 5.188a11.4 11.4 0 0 1-4.759 4.054l.83 9.949A1 1 0 0 1 30 44H18a1 1 0 0 1-.997-1.083l.808-9.684A7 7 0 0 1 14 27V13a3 3 0 0 1 4-2.83V9a3 3 0 0 1 4.105-2.79A3.001 3.001 0 0 1 28 7zM25 6a1 1 0 0 0-1 1v13h-2V9a1 1 0 1 0-2 0v11h-2v-7a1 1 0 1 0-2 0v14a5 5 0 0 0 3.222 4.675a1 1 0 0 1 .64 1.017L19.087 42h9.826l-.8-9.591a1 1 0 0 1 .643-1.019a9.42 9.42 0 0 0 4.506-3.586l3.458-5.187a1.304 1.304 0 0 0-2.103-1.538l-2.836 3.546A1 1 0 0 1 30 24V11a1 1 0 1 0-2 0v9h-2V7a1 1 0 0 0-1-1'
        clip-rule='evenodd'
      />
      <path d='M10 14h2v2h-2zm0 2v13a7 7 0 0 0 3.81 6.233L13.247 42h2.008l.608-7.307a1 1 0 0 0-.64-1.018A5 5 0 0 1 12 29V16z' />
    </g>
  </svg>
);
export const Support = () => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    className='size-7 md:size-11'
    viewBox='0 0 14 14'
  >
    <path
      fill='currentColor'
      fill-rule='evenodd'
      d='M6.987 1.5A3.18 3.18 0 0 0 3.75 4.628V9a1 1 0 0 1-1 1H1.5A1.5 1.5 0 0 1 0 8.5v-2A1.5 1.5 0 0 1 1.5 5h.75v-.39A4.68 4.68 0 0 1 7 0a4.68 4.68 0 0 1 4.75 4.61V5h.75A1.5 1.5 0 0 1 14 6.5v2a1.5 1.5 0 0 1-1.5 1.5h-.75v.5a2.75 2.75 0 0 1-2.44 2.733A1.5 1.5 0 0 1 8 14H6.5a1.5 1.5 0 0 1 0-3H8c.542 0 1.017.287 1.28.718a1.25 1.25 0 0 0 .97-1.218V4.627A3.18 3.18 0 0 0 6.987 1.5'
      clip-rule='evenodd'
    />
  </svg>
);
export const Horse = () => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='24'
    height='24'
    viewBox='0 0 24 24'
  >
    <path
      fill='#2A9D90'
      d='M22 6v3.5l-1.5.5l-1.54-2.46c-.13-.21-.46-.12-.46.13v3.58c0 .98-.39 1.86-1 2.53V21H15v-6h-.25c-.21 0-.42-.03-.62-.06l-4.44-.74l-1.12 2.01l.96 4.79H7l-1-4.75c-.03-.3 0-.6.16-.86l1.02-1.81a3.27 3.27 0 0 1-1.68-2.77c-.04.15-.06.37-.03.69c.03.44.14 1.09.07 1.81c-.04.72-.37 1.46-.79 1.95c-.43.49-.9.83-1.4 1.09l-.7-.7c.19-.47.38-.89.42-1.28c.06-.37-.01-.67-.12-.94l-.53-1.13c-.21-.51-.47-1.25-.42-2.12c.03-.85.5-1.96 1.39-2.57c.9-.61 1.87-.69 2.66-.53c.5.1 1.01.34 1.45.68c.37-.17.8-.26 1.25-.26h5.75V7c0-2.21 1.79-4 4-4H22l-.89 1.34c.54.36.89.97.89 1.66'
    />
  </svg>
);
export const Weight = () => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='24'
    height='24'
    viewBox='0 0 24 24'
  >
    <path
      fill='#2A9D90'
      d='M12 7q.425 0 .713-.288T13 6t-.288-.712T12 5t-.712.288T11 6t.288.713T12 7m2.825 0h1.75q.75 0 1.3.5t.675 1.225l1.425 10q.125.9-.462 1.588T18 21H6q-.925 0-1.513-.687t-.462-1.588l1.425-10Q5.575 8 6.125 7.5t1.3-.5h1.75q-.075-.25-.125-.487T9 6q0-1.25.875-2.125T12 3t2.125.875T15 6q0 .275-.05.513T14.825 7'
    />
  </svg>
);
export const Gear = () => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='24'
    height='24'
    viewBox='0 0 24 24'
  >
    <path
      fill='#2A9D90'
      d='M19.43 12.98c.04-.32.07-.64.07-.98s-.03-.66-.07-.98l2.11-1.65c.19-.15.24-.42.12-.64l-2-3.46c-.12-.22-.39-.3-.61-.22l-2.49 1c-.52-.4-1.08-.73-1.69-.98l-.38-2.65C14.46 2.18 14.25 2 14 2h-4c-.25 0-.46.18-.49.42l-.38 2.65c-.61.25-1.17.59-1.69.98l-2.49-1c-.23-.09-.49 0-.61.22l-2 3.46c-.13.22-.07.49.12.64l2.11 1.65c-.04.32-.07.65-.07.98s.03.66.07.98l-2.11 1.65c-.19.15-.24.42-.12.64l2 3.46c.12.22.39.3.61.22l2.49-1c.52.4 1.08.73 1.69.98l.38 2.65c.03.24.24.42.49.42h4c.25 0 .46-.18.49-.42l.38-2.65c.61-.25 1.17-.59 1.69-.98l2.49 1c.23.09.49 0 .61-.22l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.65zM12 15.5c-1.93 0-3.5-1.57-3.5-3.5s1.57-3.5 3.5-3.5s3.5 1.57 3.5 3.5s-1.57 3.5-3.5 3.5z'
    >
      <animateTransform
        attributeName='transform'
        attributeType='XML'
        dur='10s'
        from='0 12 12'
        repeatCount='indefinite'
        to='360 12 12'
        type='rotate'
      />
    </path>
  </svg>
);
export const SpeedMeter = () => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='24'
    height='24'
    viewBox='0 0 24 24'
  >
    <mask id='lineMdSpeedLoop0'>
      <path
        fill='none'
        stroke='#fff'
        stroke-dasharray='56'
        stroke-dashoffset='56'
        stroke-linecap='round'
        stroke-linejoin='round'
        stroke-width='2'
        d='M5 19v0c-0.3 0 -0.59 -0.15 -0.74 -0.41c-0.8 -1.34 -1.26 -2.91 -1.26 -4.59c0 -4.97 4.03 -9 9 -9c4.97 0 9 4.03 9 9c0 1.68 -0.46 3.25 -1.26 4.59c-0.15 0.26 -0.44 0.41 -0.74 0.41Z'
      >
        <animate
          fill='freeze'
          attributeName='stroke-dashoffset'
          dur='0.6s'
          values='56;0'
        />
      </path>
      <g transform='rotate(-100 12 14)'>
        <path d='M12 14C12 14 12 14 12 14C12 14 12 14 12 14C12 14 12 14 12 14C12 14 12 14 12 14Z'>
          <animate
            fill='freeze'
            attributeName='d'
            begin='0.4s'
            dur='0.2s'
            values='M12 14C12 14 12 14 12 14C12 14 12 14 12 14C12 14 12 14 12 14C12 14 12 14 12 14Z;M16 14C16 16.21 14.21 18 12 18C9.79 18 8 16.21 8 14C8 11.79 12 0 12 0C12 0 16 11.79 16 14Z'
          />
        </path>
        <path
          fill='#fff'
          d='M12 14C12 14 12 14 12 14C12 14 12 14 12 14C12 14 12 14 12 14C12 14 12 14 12 14Z'
        >
          <animate
            fill='freeze'
            attributeName='d'
            begin='0.4s'
            dur='0.2s'
            values='M12 14C12 14 12 14 12 14C12 14 12 14 12 14C12 14 12 14 12 14C12 14 12 14 12 14Z;M14 14C14 15.1 13.1 16 12 16C10.9 16 10 15.1 10 14C10 12.9 12 4 12 4C12 4 14 12.9 14 14Z'
          />
        </path>
        <animateTransform
          attributeName='transform'
          begin='0.4s'
          dur='6s'
          repeatCount='indefinite'
          type='rotate'
          values='-100 12 14;45 12 14;45 12 14;45 12 14;20 12 14;10 12 14;0 12 14;35 12 14;45 12 14;55 12 14;50 12 14;15 12 14;-20 12 14;-100 12 14'
        />
      </g>
    </mask>
    <rect width='24' height='24' fill='#2A9D90' mask='url(#lineMdSpeedLoop0)' />
  </svg>
);
export const Motorcycle = () => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 72 72'
    className='size-7'
  >
    <ellipse cx='12.031' cy='48' fill='#2A9D90' rx='7.031' ry='7' />
    <ellipse cx='53.031' cy='48' fill='#2A9D90' rx='8.031' ry='7.995' />
    <path
      fill='#2A9D90'
      d='M12.115 35.12c-1.195-.68-2-1.12-2-1.12s3.784-6.392 9-9c4-2 11-3 11-3v3l-6 4l4 3l8-2l7 6s7-3 10-6v-2l14-3l-1 3s-22 16-28 16l5 6h-20s0-6-1-8c-.536-1.072-3.95-3.169-7-5'
    />
    <path
      fill='#2A9D90'
      d='m65.115 30l2 2l-1.698 1.668l-2.542-2.542M15 38l-3-2s4-5 5-5s-2 7-2 7'
    />
    <path
      fill='#2A9D90'
      d='M28.115 32c0 4.834 4.885 7.667 8.552 7.667c3.064 0 10.114-4.856 12.5-5.334c1.715-.343 1.527-1.893 4.083-2.708c1.585-.506 10.25-4.5 12.75-4.25c1.634.164-2.472 2.251-1.333 1.625c6.667-3.666-25 14.667-25 14.667L37 44l-7.833-3.666l-5.667-5.5v-5.5z'
    />
    <path fill='#2A9D90' d='M39.5 32.5L42 36l8.5-3l2.615-3v-2z' />
    <path
      fill='#2A9D90'
      d='m40.15 45.388l5.6.581L48.594 45l4.125-2.125l6.906-3.094l.219-1.312L56 34.949l-8.031 5.364l-7.694 3.002L38.87 44l.63 1z'
    />
    <g fill='none' stroke='#2A9D90' stroke-miterlimit='10' stroke-width='2'>
      <path
        stroke-linecap='round'
        stroke-linejoin='round'
        d='M15.115 37s3-4 2-5'
      />
      <ellipse cx='12.031' cy='48' rx='7.031' ry='7' />
      <path
        stroke-linecap='round'
        stroke-linejoin='round'
        d='M15.115 37c3.05 1.831 6.464 3.928 7 5c1 2 1 9 1 9h20s-.486-6.037-12.281-10c-1.976-.663-11.495-7.224-6.719-12'
      />
      <path
        stroke-linecap='round'
        stroke-linejoin='round'
        d='M12.115 35.12c-1.195-.68-2-1.12-2-1.12s3.784-6.392 9-9c4-2 11-3 11-3v3l-6 4l4 3s6.715-3.628 10-1c1.875 1.5 4 5 4 5s8-2 11-5v-3l14-3l-1 3s-22.49 16.167-28.49 16.167'
      />
      <path
        stroke-linecap='round'
        stroke-linejoin='round'
        d='M15.115 37s3-4 2-5m1 8l-6.084 8m53.084-18l2 2l-1 1M59 39l-10.885 6H46m7.115-17c-5.28 2.85-10.282 4-14 4'
      />
      <path
        stroke-linecap='round'
        d='M46.267 49.916A7.03 7.03 0 0 0 53.03 55c3.883 0 7.032-3.134 7.032-7c0-1.66-.58-3.185-1.551-4.385'
      />
    </g>
  </svg>
);
