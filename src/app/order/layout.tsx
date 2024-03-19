import { OrderSidebar, OrderSummary } from '@/components/order';

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <>
      <div className="md:flex">
        <OrderSidebar />

        <main className='md:flex-1 md:h-screen md:overflow-y-auto p-5'>
          {children}
        </main>

        <OrderSummary />
      </div>
    </>
  );
}