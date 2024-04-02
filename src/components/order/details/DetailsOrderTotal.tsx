import { formatToDollars } from '@/helpers';

interface DetailsOrderTotalProps {
  orderTotal: number;
}

export default function DetailsOrderTotal({ orderTotal }: DetailsOrderTotalProps) {
  return (
    <div className="p-4 bg-gray-100 border flex justify-between font-black">
      <p>Total: </p>
      <span>{formatToDollars(orderTotal)}</span>
    </div>
  )
}