import '@/app/ui/global.css';
import { Analytics } from '@vercel/analytics/react';
import { GeistSans } from 'geist/font/sans';

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
