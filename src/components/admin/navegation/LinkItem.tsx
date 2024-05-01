import Link from 'next/link';

interface LinkItemProps {
  link: {
    url: string;
    text: string;
    blank: boolean;
  }
  currentLink: string;
}

export default function LinkItem({ link, currentLink }: LinkItemProps) {

  return (
    <Link
      href={`${link.url}`}
      className={`${currentLink === link.url ? 'bg-orangeburger-400' : ''} flex items-center justify-center xl:justify-start gap-4 xl:border-t border-gray-200 py-6 px-8 xl:p-4 xl:last-of-type:border-b xl:hover:bg-orangeburger-400 transition-colors rounded-md`}
    >
      <span className='xl:text-xl font-bold'>{link.text}</span>
    </Link>
  )
}