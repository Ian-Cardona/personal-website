import type { Metadata } from "next";
import "./globals.css";
import NavBar from "@/components/navigation/NavBar";
import { Nunito_Sans, Merriweather } from "next/font/google";

const nunitoSans = Nunito_Sans({
  variable: "--font-nunito-sans",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const merriweather = Merriweather({
  variable: "--font-merriweather",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Aim Digital City",
  description: "Just a blog",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${nunitoSans.variable} ${merriweather.variable} antialiased`}
        style={{ fontFamily: 'var(--font-merriweather)' }}
      >
        <NavBar />
        {children}
      </body>
    </html>
  );
}