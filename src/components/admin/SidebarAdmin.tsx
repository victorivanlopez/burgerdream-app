import { Logo } from '../ui';

const adminNavigation = [
  { url: '/admin/orders', text: 'Ordenes', blank: false },
  { url: '/admin/products', text: 'Productos', blank: false },
  { url: '/order/cafe', text: 'Ver Quiosco', blank: true },
]

export const SidebarAdmin = () => {
  return (
    <aside className='xl:w-64 xl:h-screen bg-white shadow'>
      <Logo />
      <nav className="flex flex-col">

      </nav>
    </aside>
  )
}