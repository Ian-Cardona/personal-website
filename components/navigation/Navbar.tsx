'use client';

import { usePathname } from 'next/navigation';
import NavLinkTextButton from './NavLinkTextButton';

export default function NavBar() {
  const pathname = usePathname();

  return (
    <nav className="p-8 w-full flex justify-center gap-6">
      <NavLinkTextButton href="/" isActive={pathname === '/'}>
        /Home
      </NavLinkTextButton>
      <NavLinkTextButton href="/blog" isActive={pathname === '/blog'}>
        /Blog
      </NavLinkTextButton>
    </nav>
  );
}