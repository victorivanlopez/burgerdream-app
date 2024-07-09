'use client'
import { useRouter } from 'next/navigation';
import { ArrowLeftIcon } from './icons';

interface GoBackButtonProps {
  btnText: string;
}

export default function GoBackButton({ btnText }: GoBackButtonProps) {
  const router = useRouter();
  return (
    <div className='my-5'>
      <button
        onClick={() => router.back()}
        className='text-redburger-400 font-bold flex items-center gap-1 text-sm'
      >
        <ArrowLeftIcon />
        <span>{btnText}</span>
      </button>
    </div>
  )
}