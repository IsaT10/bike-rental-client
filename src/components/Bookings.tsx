import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { useNavigate, useParams } from 'react-router-dom';
import { Checkbox } from '@/components/ui/checkbox';
import { useAppDispatch } from '@/redux/hooks';
import { setBooking } from '@/redux/features/booking/bookingSlice';

export default function BookingDialog() {
  const [startTime, setStartTime] = React.useState('');
  const [active, setActive] = React.useState(false);
  const navigate = useNavigate();
  const { id } = useParams();

  const dispatch = useAppDispatch();

  React.useEffect(() => {
    const now = new Date();

    const localDateTime = new Date(
      now.getTime() - now.getTimezoneOffset() * 60000
    )
      .toISOString()
      .slice(0, 16);

    setStartTime(localDateTime);
  }, []);

  const handleClose = () => {
    navigate(-1);
  };

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setStartTime(e.target.value);
  };

  const handleSubmit = async () => {
    const bookingData = {
      bikeId: id,
      startTime: new Date(startTime).toISOString(),
      advancedPayment: 100,
    };

    dispatch(setBooking(bookingData));

    navigate('/payment');
  };

  return (
    <Dialog open={true} onOpenChange={handleClose}>
      <DialogContent className='sm:max-w-[600px] p-10'>
        <DialogHeader>
          <DialogTitle>Complete Your Booking</DialogTitle>
          <DialogDescription>
            For complete booking you have to pay $100 USD advanced
          </DialogDescription>
        </DialogHeader>
        <div className=' flex flex-col gap-1 text-sm font-semibold mt-5'>
          <label htmlFor='date'>Start Time</label>
          <input
            name='date'
            type='datetime-local'
            value={startTime}
            onChange={handleDateChange}
            className='border p-2 rounded-md'
          />
        </div>
        <div className='flex items-center space-x-2'>
          <Checkbox id='terms' onClick={() => setActive(!active)} />
          <label
            htmlFor='terms'
            className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'
          >
            For complete booking you have to pay $100 USD advanced
          </label>
        </div>
        <button
          disabled={!active}
          onClick={handleSubmit}
          className='px-4 py-2 mt-5 bg-primary-color font-semibold text-white disabled:opacity-45 rounded-md'
        >
          Pay
        </button>
      </DialogContent>
    </Dialog>
  );
}
