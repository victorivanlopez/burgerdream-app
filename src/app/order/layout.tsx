import { OrderSidebar, OrderSummary } from '@/components/order';

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <>
      <div className="xl:flex">
        <OrderSidebar />

        <main className='xl:h-screen xl:flex-1 xl:overflow-y-auto p-5'>
          {children}
        </main>

        <OrderSummary />
      </div>
    </>
  );
}