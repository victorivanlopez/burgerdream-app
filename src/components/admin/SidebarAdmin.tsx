import { Logo } from '../ui';
import { LinkList } from './navegation';

export const SidebarAdmin = () => {
  return (
    <aside className='xl:w-64 xl:h-screen bg-white shadow'>
      <Logo />
      <nav className="mt-10">
        <LinkList />
      </nav>
    </aside>
  )
}