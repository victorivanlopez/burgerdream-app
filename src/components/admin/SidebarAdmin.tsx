import { Logo } from '../ui';
import { LinkList } from './navegation';

export const SidebarAdmin = () => {
  return (
    <aside className='md:w-64 md:h-screen bg-white shadow'>
      <Logo />
      <nav className="mt-10">
        <LinkList />
      </nav>
    </aside>
  )
}