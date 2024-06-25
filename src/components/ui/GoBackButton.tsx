'use client'
import { useRouter } from 'next/navigation';
import { ArrowLeftIcon } from './icons';

export default function GoBackButton() {
  const router = useRouter();
  return (
    <div className='mt-5'>
      <button
        onClick={() => router.back()}
        className='text-redburger-400 font-bold flex items-center gap-1'
      >
        <ArrowLeftIcon />
        <span>Regresar</span>
      </button>
    </div>
  )
}