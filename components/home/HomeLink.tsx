'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function HomeLink({ href, children }: { href: string; children: string }) {
  return (
    <motion.div className="relative inline-block w-fit" initial="initial" whileHover="hover">
      <Link href={href} className="relative inline-block">
        <span className="relative z-10">{children}</span>
        <motion.span
          className="absolute top-0 left-0 z-20 overflow-hidden text-white dark:text-black"
          variants={{
            initial: { width: '0%' },
            hover: { width: '100%' },
          }}
          transition={{ duration: 0.3 }}
        >
          <span className="whitespace-nowrap">{children}</span>
        </motion.span>
      </Link>
      <motion.span
        className="absolute top-0 right-0 bottom-0 left-0 z-0 bg-orange-600 dark:bg-white"
        variants={{
          initial: { scaleX: 0 },
          hover: { scaleX: 1 },
        }}
        transition={{ duration: 0.3 }}
        style={{ originX: 0 }}
      />
    </motion.div>
  );
}
