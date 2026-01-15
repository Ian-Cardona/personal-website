import React from 'react';

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
      className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
    >
      {children}
    </a>
  );
}

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-black dark:border-white">
      <div className="mx-auto max-w-7xl px-6 py-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <p className="text-sm">
              © {currentYear} Ian Cardona. All rights reserved.
            </p>
          </div>

          <div className="flex flex-col items-end text-right lg:col-span-5">
            <div className="text-sm">iancardona.dev@gmail.com</div>
            <div className="min-w-75 border-t border-black dark:border-white"></div>
            <div className="w-fit min-w-75">
              <div className="flex justify-end gap-2 text-sm">
                <FooterLink href="https://github.com/Ian-Cardona">GitHub</FooterLink>
                <FooterLink href="https://www.linkedin.com/in/swe-ian-cardona/">LinkedIn</FooterLink>
                <FooterLink href="https://www.credly.com/users/angelo-ian-michael-cardona.a988e18b">
                  Cracked&apos;ly
                </FooterLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}