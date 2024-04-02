import { useOrderStore } from "@/stores";
import { DetailsProductList } from ".";

export default function DetailsMainContainer() {

  const order = useOrderStore((state) => state.order);

  return (
    <>
      <DetailsProductList order={order} />
    </>
  )
}