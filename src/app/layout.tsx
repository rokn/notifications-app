import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import clsx from 'clsx';
import NavigationMenu from '@/components/navigation/NavigationMenu';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Notification App',
  description: 'An app for notifications.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={clsx(inter.className, { 'dark': true }, 'bg-white dark:bg-gray-600')}>
        <div className='flex flex-col'>
          <NavigationMenu />
          {children}
        </div>
      </body>
    </html>
  );
}
