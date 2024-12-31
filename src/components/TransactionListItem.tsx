import { TPayment } from '@/types';

export default function TransactionListItem({
  transaction,
}: {
  transaction: TPayment;
}) {
  return (
    <div className='text-xs hover:bg-stone-50 md:text-sm py-5 px-6 md:px-10 dark:text-stone-100 dark:bg-stone-700  flex gap-4 justify-between items-center'>
      <span className='flex-1 md:ml-6'>{transaction.transactionId}</span>
      <span className='flex-1 text-center'>{transaction.user.name}</span>
      <span className='flex-1 text-center'>{transaction.user.email}</span>
      <span className='flex-1 text-center'>${transaction.amount}</span>
      <span className='flex-[.5] text-center'>{transaction.status}</span>
    </div>
  );
}
