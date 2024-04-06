import { convertToCurrency } from '@/helpers';

interface DetailsOrderTotalProps {
  orderTotal: number;
}

export default function DetailsOrderTotal({ orderTotal }: DetailsOrderTotalProps) {
  return (
    <div className="flex justify-between font-black">
      <p>Total: </p>
      <span>{convertToCurrency(orderTotal)}</span>
    </div>
  )
}