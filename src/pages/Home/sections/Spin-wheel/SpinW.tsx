import './SpinWheel.css';
import { ISpinWheelProps } from '@/types';
import SpinWheel from '@/components/SpinWheel';

const segments = [
  { segmentText: '10%', segColor: 'red' },
  { segmentText: '20%', segColor: 'blue' },
  { segmentText: '30%', segColor: 'green' },
  // Add more segments as needed
];

export default function SpinW() {
  const handleSpinFinish = (result: string) => {
    console.log(`Spun to: ${result}`);
    // Handle the result as needed
  };

  const spinWheelProps: ISpinWheelProps = {
    segments,
    onFinished: handleSpinFinish,
    primaryColor: 'black',
    contrastColor: 'white',
    buttonText: 'Spin',
    isOnlyOnce: false,
    size: 200,
    upDuration: 20,
    downDuration: 800,
    fontFamily: 'Arial',
    arrowLocation: 'top',
    showTextOnSpin: true,
  };

  return (
    <div className='flex flex-col justify-center items-center'>
      <SpinWheel {...spinWheelProps} />
    </div>
  );
}
