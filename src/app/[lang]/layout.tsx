import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import "../globals.css";
import Navbar from '@/components/Navbar';
import BackToTop from '@/components/BackToTop';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Final Degree Project',
  description: 'Final Degree Project by Melina Montelongo',
}

export default function RootLayout({
  children, params
}: {
  children: React.ReactNode,
  params: { lang: string }
}) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <Navbar lang={params.lang} />
        {children}
        <BackToTop />
      </body>
    </html>
  )
}
