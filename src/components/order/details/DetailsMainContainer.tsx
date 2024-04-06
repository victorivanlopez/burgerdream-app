import { useOrderStore } from '@/stores';
import { DetailsOrderTotal, DetailsProductList, FormDetails } from '.';

export default function DetailsMainContainer() {

  const order = useOrderStore((state) => state.order);
  const orderTotal = useOrderStore((state) => state.orderTotal());

  return (
    <>
      <DetailsProductList order={order} />

      <DetailsOrderTotal orderTotal={orderTotal} />

      <FormDetails />
    </>
  )
}