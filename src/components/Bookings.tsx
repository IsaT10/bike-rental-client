import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { useNavigate } from 'react-router-dom';

export default function Bookings() {
  const navigate = useNavigate();

  // Close modal and navigate back when modal is closed
  const handleClose = () => {
    navigate(-1); // Go back to the previous page
  };
  return (
    <Dialog open={true} onOpenChange={handleClose}>
      <DialogContent className='sm:max-w-[425px]'>
        <DialogHeader>
          <DialogTitle>Complete Your Booking</DialogTitle>
          <DialogDescription>
            Fill in the details to confirm your booking.
          </DialogDescription>
        </DialogHeader>
        <div className='grid gap-4 py-4'>
          {/* Add booking form here */}
          <p>Booking details go here...</p>
        </div>
      </DialogContent>
    </Dialog>
  );
}
