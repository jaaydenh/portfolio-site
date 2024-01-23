import '@/app/ui/global.css';
import { Analytics } from '@vercel/analytics/react';
import { GeistSans } from 'geist/font/sans';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Jaayden Halko',
  description:
    'Jaayden Halko is Software Engineer who build products for the modern web.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={GeistSans.className}>
      <body className="bg-black leading-relaxed text-slate-400 antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
