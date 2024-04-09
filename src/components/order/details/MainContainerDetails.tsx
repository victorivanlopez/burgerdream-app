import { useOrderStore } from '@/stores';
import { OrderTotalDetails, ProductListDetails, FormDetails } from '.';

export default function MainContainerDetails() {

  const order = useOrderStore((state) => state.order);
  const orderTotal = useOrderStore((state) => state.orderTotal());

  return (
    <>
      <ProductListDetails order={order} />

      <div className='p-4 bg-gray-50 border '>
        <OrderTotalDetails orderTotal={orderTotal} />

        <FormDetails />
      </div>
    </>
  )
}