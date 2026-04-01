import type { Metadata } from 'next';
import './globals.css';
import AppLayout from '../components/Layout';

export const metadata: Metadata = {
  title: 'BJP Leaders Dashboard',
  description: 'The Editorial Sovereign Design System',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <AppLayout>{children}</AppLayout>
      </body>
    </html>
  );
}
