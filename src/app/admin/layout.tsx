import { SidebarAdmin } from '@/components/admin';
import { ToastNotification } from '@/components/ui';

export default async function AdminLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <>
      <div className="md:flex">
        <SidebarAdmin />

        <main className="h-screen flex-1 md:overflow-y-auto p-2 md:p-4 lg:p-6 mt-5 md:mt-0">
          {children}
        </main>
      </div>

      <ToastNotification />
    </>
  )
}