import { Button } from '@/components/ui/button';
import { Close } from '@/components/shared/Icons';
import { useAppSelector } from '@/redux/hooks';
import { toast } from 'sonner';
type TCouponPopupProps = {
  onClose: () => void;
  coupon: string;
  setCoupon: React.Dispatch<React.SetStateAction<string>>;
  setFinalDiscount: React.Dispatch<React.SetStateAction<number>>;
};

const server = import.meta.env.VITE_SERVER;

export default function CouponPopup({
  onClose,
  coupon,
  setCoupon,
  setFinalDiscount,
}: TCouponPopupProps) {
  const { couponCode, discount } = useAppSelector((state) => state.coupon);

  // const [couponCode, setCouponCode] = useState('');

  const handleApplyCoupon = async () => {
    if (coupon.trim() === couponCode && discount) {
      const response = await fetch(
        // `http://localhost:3000/api/coupons/${coupon}`
        `${server}/coupons/${coupon}`
      );
      const data = await response.json();

      if (data?.data?.isActive === true) {
        setFinalDiscount(discount);
        toast.success(`You get ${discount}% discount on next payment`);
      } else if (data?.data?.isActive === false) {
        toast.error('Not a valid token!');
      }

      return;
    }
    toast.error('Not a valid token!');

    // onClose();
  };

  return (
    <div className='fixed bottom-24 right-10 flex items-center justify-center fade-in'>
      <div className='bg-stone-100 w-[300px] relative p-6 rounded-md shadow-lg max-w-md '>
        <h2 className='text-lg font-bold mb-4'>Have any Coupon Code?</h2>
        <div className='mb-4'>
          <input
            type='text'
            value={coupon}
            onChange={(e) => setCoupon(e.target.value)}
            className='border p-2 w-full '
            placeholder='Enter your coupon code'
          />
        </div>
        <div className='flex justify-start space-x-4'>
          <Button onClick={handleApplyCoupon}>Apply</Button>
        </div>

        <button
          onClick={onClose}
          className='absolute top-4 right-4 text-stone-700'
        >
          <Close />
        </button>
      </div>
    </div>
  );
}
