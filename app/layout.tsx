import '@/app/ui/global.css';
import { Analytics } from '@vercel/analytics/react';
import { GeistSans } from 'geist/font/sans';
import { Metadata } from 'next';
import { SpeedInsights } from '@vercel/speed-insights/next';
import type { Viewport } from 'next';

export const viewport: Viewport = {
  themeColor: 'black',
};

export const metadata: Metadata = {
  title: 'Jaayden Halko',
  description:
    'Jaayden Halko is Software Engineer who build products for the modern web',
  twitter: {
    card: 'summary_large_image',
    title: 'Jaayden Halko',
    description:
      'Jaayden Halko is Software Engineer who build products for the modern web',
    site: '@jaaydenh',
    creator: '@jaaydenh',
  },
  openGraph: {
    title: 'Jaayden Halko',
    description:
      'Jaayden Halko is Software Engineer who build products for the modern web',
    url: 'https://jaayden.com',
    siteName: 'Jaayden Halko',
    locale: 'en_US',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={GeistSans.className}>
      <body className="bg-gray-900 leading-relaxed text-slate-400 antialiased">
        {children}
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
