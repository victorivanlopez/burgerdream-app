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
      className={`${currentLink === link.url ? 'bg-orangeburger-400' : ''} flex items-center justify-center md:justify-start gap-4 xl:border-t border-gray-200 py-2 px-4 md:py-4 md:px-8 xl:last-of-type:border-b xl:hover:bg-orangeburger-400 transition-colors rounded-md`}
    >
      <span className='text-xl font-bold'>{link.text}</span>
    </Link>
  )
}