'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function NavLink({ href, children, isActive }: { href: string; children: string; isActive: boolean }) {
  return (
    <motion.div
      className="relative inline-block w-fit"
      initial={isActive ? "hover" : "initial"}
      animate={isActive ? "hover" : "initial"}
      whileHover="hover"
    >
      <Link href={href} className="relative inline-block">
        <span className="relative z-10">{children}</span>
        <motion.span 
          className="absolute top-0 left-0 z-20 overflow-hidden text-white dark:text-black"
          variants={{
            initial: { width: '0%' },
            hover: { width: '100%' }
          }}
          transition={{ duration: 0.3 }}
        >
          <span className="whitespace-nowrap">{children}</span>
        </motion.span>
      </Link>
      <motion.span
        className="absolute inset-0 bg-black dark:bg-white -z-10"
        variants={{
          initial: { scaleX: 0 },
          hover: { scaleX: 1 }
        }}
        transition={{ duration: 0.3 }}
        style={{ originX: 0 }}
      />
    </motion.div>
  );
}