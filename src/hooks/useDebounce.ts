import { useEffect, useState } from 'react';

export default function useDebounce(value: string, delay: number) {
  const [debounceValue, setDebounceValue] = useState('');

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebounceValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debounceValue;
}

// var debounce = function(fn, t) {
//   let timer;

//   return function(...args) {
//       clearTimeout(timer);
//       timer = setTimeout(() => fn(...args), t);
//   }
// };
