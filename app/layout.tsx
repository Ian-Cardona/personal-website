import type { Metadata } from 'next';
import './globals.css';
import { DM_Sans, Google_Sans_Code, Google_Sans_Flex } from 'next/font/google';

export const metadata: Metadata = {
  title: 'Aim Digital City',
  description: 'Just a blog',
};

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-dm-sans',
});

const googleSansFlex = Google_Sans_Flex({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-google-sans-flex',
});

const googleSansCode = Google_Sans_Code({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-google-sans-code',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${dmSans.variable} ${googleSansFlex.variable} ${googleSansCode.variable} antialiased`}
        style={{ fontFamily: 'var(--font-google-sans-flex)' }}
      >
        {children}
      </body>
    </html>
  );
}
