import type { Metadata } from 'next';
import '../styles/globals.css';
import Gnb from '../components/GNB';

export const metadata: Metadata = {
  title: 'Do it',
  description: '코드잇 스프린트 과제테스트',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='kr'>
      <body className='bg-gray-50'>
        <Gnb/>
        {children}
      </body>
    </html>
  );
}
