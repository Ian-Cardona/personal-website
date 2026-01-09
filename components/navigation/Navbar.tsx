'use client';

import { usePathname } from 'next/navigation';
import NavLink from './NavLink';

const  Navbar = () => {
  const pathname = usePathname();

  return (
    <nav className="p-4 w-full flex gap-6">
      <NavLink href="/" isActive={pathname === '/'}>
        /Home
      </NavLink>
      <NavLink href="/blog" isActive={pathname === '/blog'}>
        /Blog
      </NavLink>
    </nav>
  );
}

export default Navbar;