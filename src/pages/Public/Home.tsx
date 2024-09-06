import { useAppSelector } from '@/redux/hooks';

export default function Home() {
  const token = useAppSelector((state) => state.auth.token);
  console.log(token);

  return <div>Home</div>;
}
