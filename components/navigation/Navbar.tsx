'use client';

import { usePathname } from 'next/navigation';
import NavLinkTextButton from './NavLinkTextButton';

export default function NavBar() {
  const pathname = usePathname();

  return (
    <nav className="flex w-full justify-center gap-6 p-8">
      <NavLinkTextButton href="/" isActive={pathname === '/'}>
        /Home
      </NavLinkTextButton>
      <NavLinkTextButton href="/blog" isActive={pathname === '/blog'}>
        /Blog
      </NavLinkTextButton>
    </nav>
  );
}
