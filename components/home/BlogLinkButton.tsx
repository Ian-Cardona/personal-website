import Link from 'next/link';

interface BlogLinkProps {
  href: string;
  title: string;
  date: string;
}

export default function BlogLinkButton({ href, title, date }: BlogLinkProps) {
  return (
    <Link
      href={href}
      className="group flex items-end justify-between border-b border-black py-0 hover:bg-blue-600 hover:text-white dark:border-white dark:hover:bg-blue-400 dark:hover:text-black"
    >
      <span className="text-3xl tracking-tighter">{title}</span>
      <span className="text-sm" style={{ fontFamily: 'var(--font-google-sans-code)' }}>{date}</span>
    </Link>
  );
}
