'use client';

import { usePathname } from 'next/navigation';
import NavLink from './NavLink';

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="p-4 w-full flex justify-center gap-6">
      <NavLink href="/" isActive={pathname === '/'}>
        /Home
      </NavLink>
      <NavLink href="/blog" isActive={pathname === '/blog'}>
        /Blog
      </NavLink>
    </nav>
  );
}