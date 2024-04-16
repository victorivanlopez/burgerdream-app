import { createOrder } from '@/actions';
import { OrderSchema } from '@/schemas';
import { useOrderStore } from '@/stores';
import { toast } from 'react-toastify';

export default function FormDetails() {

  const order = useOrderStore(state => state.order);
  const total = useOrderStore(state => state.orderTotal());
  const clearOrder = useOrderStore(state => state.clearOrder);

  const onSubmitForm = async (formdata: FormData) => {
    const data = {
      name: formdata.get('name'),
      total,
      order
    }
    const result = OrderSchema.safeParse(data);
    if (!result.success) {
      result.error.issues.forEach(issue => {
        toast.error(issue.message);
      })
    } else {
      const response = await createOrder(data);
      if (response?.errors) {
        response.errors.forEach(error => {
          toast.error(error.message);
        })
      } else {
        toast.success('Pedido realizado correctamente');
        clearOrder();
      }
    }
  }

  return (
    <form
      className="space-y-5 mt-5"
      action={onSubmitForm}
    >
      <input
        type="text"
        name="name"
        id='name'
        required
        className='w-full border border-gray-100 p-2 rounded-md shadow-sm text-sm focus:outline-none focus:border-orange-100'
        placeholder='Escribe tu nombre'
      />
      <input
        type="submit"
        className="py-2 px-8 cursor-pointer bg-orangeburger-400 text-black font-bold hover:bg-opacity-90 transition-colors rounded-md w-full"
        value="Confirmar orden"
      />
    </form>
  )
}