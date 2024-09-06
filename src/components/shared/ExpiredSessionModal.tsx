import { Close } from '@/components/shared/Icons';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const ExpiredSessionModal = ({
  showModal,
  onClose,
}: {
  showModal: boolean;
  onClose: () => void;
}) => {
  const navigate = useNavigate();

  return (
    showModal && (
      <div className='fixed inset-0 bg-stone-900/50 flex items-center justify-center'>
        <div
          className={`text-center bg-white w-[500px] p-6 relative rounded shadow-lg transition-transform duration-500 ease-out ${
            showModal ? 'scale-100 opacity-100' : 'scale-0 opacity-0'
          }`}
        >
          <h2 className='text-lg font-bold mb-4'>Expired Session</h2>
          <p className='mb-4'>
            Your session has expired. Please log in again to continue.
          </p>
          <span
            onClick={onClose}
            className='absolute top-2 right-2 cursor-pointer'
          >
            <Close />
          </span>
          <div className='flex justify-center gap-4'>
            <Button onClick={() => navigate('/login')}>Login</Button>
          </div>
        </div>
      </div>
    )
  );
};

export default ExpiredSessionModal;
