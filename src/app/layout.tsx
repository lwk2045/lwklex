import type { Metadata } from 'next';
import { Noto_Sans_KR } from 'next/font/google';
import './globals.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const notoSansKr = Noto_Sans_KR({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '700'],
});

export const metadata: Metadata = {
  title: '법무사 사무소 - 전문적인 법률 서비스',
  description: '전문 법무사가 제공하는 맞춤형 법률 서비스. 소송 대리, 법률 상담, 계약 검토 등 다양한 법률 서비스를 제공합니다.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body className={notoSansKr.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
} 