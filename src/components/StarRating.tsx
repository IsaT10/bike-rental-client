import { Star } from 'lucide-react';
import { useState } from 'react';

export default function StarRating({
  starValue,
  setStarValue,
}: {
  starValue: number;
  setStarValue: React.Dispatch<React.SetStateAction<number>>;
}) {
  const [hoverValue, setHoverValue] = useState(0);
  return (
    <div>
      {new Array(5).fill(0).map((_, index) => {
        return (
          <Star
            key={index}
            size={40}
            className='inline-block cursor-pointer'
            color={index < starValue || index < hoverValue ? 'yellow' : ''}
            fill={
              index < starValue || index < hoverValue ? 'yellow' : '#C7C8CC'
            }
            onClick={() => setStarValue(index + 1)}
            onMouseEnter={() => setHoverValue(index + 1)}
            onMouseLeave={() => setHoverValue(0)}
          />
        );
      })}
    </div>
  );
}
