import { useOrderStore } from '@/stores';
import { DetailsOrderTotal, DetailsProductList, FormDetails } from '.';

export default function DetailsMainContainer() {

  const order = useOrderStore((state) => state.order);
  const orderTotal = useOrderStore((state) => state.orderTotal());

  return (
    <>
      <DetailsProductList order={order} />

      <div className='p-4 bg-gray-50 border '>
        <DetailsOrderTotal orderTotal={orderTotal} />

        <FormDetails />
      </div>
    </>
  )
}