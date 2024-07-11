import { useOrderStore } from '@/stores';
import {
  OrderTotalDetails,
  DetailsProductList,
  FormDetails
} from '.';

export default function MainContainerDetails() {

  const order = useOrderStore((state) => state.order);
  const orderTotal = useOrderStore((state) => state.orderTotal());

  return (
    <>
      <DetailsProductList order={order} />

      <div className='p-4 bg-gray-50 border '>
        <OrderTotalDetails orderTotal={orderTotal} />

        <FormDetails />
      </div>
    </>
  )
}