import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import "../globals.css";
import Navbar from '@/components/Navbar';
import BackToTop from '@/components/BackToTop';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'The Musical Blackbox',
  description: 'Final Psychology Degree Project by Melina Montelongo.',
  openGraph: {
    title: 'The Musical Blackbox',
    description: 'Final Psychology Degree Project by Melina Montelongo.',
    images: ["//images/backgrounds/hero-start.jpg"],
    url: "//https://themusicalblackbox.vercel.app/"
  },
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
