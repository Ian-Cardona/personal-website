'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function HomeLinkTextButton({ href, children }: { href: string; children: string }) {
  return (
    <motion.div className="relative inline-block w-fit" initial="initial" whileHover="hover">
      <Link href={href} className="relative inline-block text-black dark:text-white">
        {children}
      </Link>
      <motion.span
        className="absolute bottom-0 left-0 h-0.5 bg-blue-600 dark:bg-white"
        variants={{
          initial: { width: '0%' },
          hover: { width: '100%' },
        }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
      />
    </motion.div>
  );
}
