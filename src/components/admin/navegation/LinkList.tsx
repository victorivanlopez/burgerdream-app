'use client'
import { usePathname } from 'next/navigation';
import LinkItem from './LinkItem';

const links = [
  { url: '/admin/orders', text: 'Ordenes', blank: false },
  { url: '/admin/products', text: 'Productos', blank: false },
  { url: '/order/hamburguesas', text: 'Ver menú', blank: true },
]

export default function LinkList() {
  const currentLink = usePathname();

  return (
    <div>
      {
        links.map(link => (
          <LinkItem
            key={link.url}
            link={link}
            currentLink={currentLink}
          />
        ))
      }
    </div>
  )
}