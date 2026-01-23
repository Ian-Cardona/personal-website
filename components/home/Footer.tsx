import React from 'react';

// 1. Data configuration for easier updates
const SOCIAL_LINKS = [
  { href: 'https://github.com/Ian-Cardona', label: 'GitHub' },
  { href: 'https://www.linkedin.com/in/swe-ian-cardona/', label: 'LinkedIn' },
  { href: 'https://www.credly.com/users/angelo-ian-michael-cardona.a988e18b', label: 'Cracked\'ly' },
];

interface FooterLinkProps {
  href: string;
  children: React.ReactNode;
}

function FooterLink({ href, children }: FooterLinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-sm font-medium text-neutral-500 hover:text-blue-600 dark:text-neutral-400 dark:hover:text-blue-400 transition-colors"
    >
      {children}
    </a>
  );
}

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-black dark:border-white mt-12">
      <div className="mx-auto max-w-7xl px-6 py-8">
        {/* 2. Grid System Update:
           Changed to lg:grid-cols-12 to match the parent 'Home' layout.
           Left: col-span-4 (Matches 'Works')
           Right: col-span-8 (Matches 'Blogs')
        */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
          
          {/* Copyright Section (Aligned with 'Works') */}
          <div className="lg:col-span-4 flex flex-col justify-between">
            <p className="text-sm text-neutral-600 dark:text-neutral-400">
              © {currentYear} Ian Cardona.
              <br />
              All rights reserved.
            </p>
          </div>

          {/* Contact & Links Section (Aligned with 'Blogs') */}
          <div className="lg:col-span-8">
            <div className="flex flex-col items-start lg:items-end gap-6">
              
              {/* Email Button */}
              <a 
                href="mailto:iancardona.dev@gmail.com"
                className="text-2xl font-medium tracking-tight hover:text-neutral-600 dark:hover:text-neutral-300 transition-colors"
              >
                iancardona.dev@gmail.com
              </a>

              {/* Separator Line (Responsive) */}
              <div className="h-px w-full bg-black/10 dark:bg-white/20" />

              {/* Social Links */}
              <div className="flex flex-wrap gap-x-6 gap-y-2">
                {SOCIAL_LINKS.map((link) => (
                  <FooterLink key={link.label} href={link.href}>
                    {link.label}
                  </FooterLink>
                ))}
              </div>

            </div>
          </div>

        </div>
      </div>
    </footer>
  );
}
