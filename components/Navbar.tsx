'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Navbar() {
  return (
    <nav className="p-4 w-full">
      <motion.div
        className="relative inline-block"
        initial="initial"
        whileHover="hover"
      >
        <motion.span 
          className="relative z-10"
          variants={{
            initial: { color: 'inherit' },
            hover: { color: 'white' }
          }}
          transition={{ duration: 0.3 }}
        >
          <Link href="/blog">
            /Blog
          </Link>
        </motion.span>
        <motion.span
          className="absolute inset-0 bg-black -z-10"
          variants={{
            initial: { scaleX: 0 },
            hover: { scaleX: 1 }
          }}
          transition={{ duration: 0.3 }}
          style={{ originX: 0 }}
        />
      </motion.div>
    </nav>
  );
}