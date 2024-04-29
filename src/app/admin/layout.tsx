
import { SidebarAdmin } from '@/components/admin';
import { ToastNotification } from '@/components/ui';

export default async function AdminLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <>
      <div className="md:flex">
        <SidebarAdmin />

        <main className="xl:h-screen xl:flex-1 xl:overflow-y-auto p-2 md:p-4 lg:p-6">
          {children}
        </main>
      </div>

      <ToastNotification />
    </>
  )
}