import { createOrder } from '@/actions';

export default function FormDetails() {

  const onSubmitForm = (formdata: FormData) => {
    console.log('On Submitting....', formdata.get('name'));
    createOrder();
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
        className='border border-gray-100 p-2 rounded-md w-full'
        placeholder='Nombre completo'
      />
      <input
        type="submit"
        className="py-2 px-8 cursor-pointer bg-orangeburger-400 text-black font-bold hover:bg-opacity-90 transition-colors rounded-md w-full"
        value="Confirmar orden"
      />
    </form>
  )
}