import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Miya Transport | Professioneel transportbedrijf',
  description:
    'Miya Transport biedt betrouwbare transportoplossingen in Nederland en Europa. Nationaal transport, internationaal vervoer, spoedtransport, distributie en warehousing.',
    icons: {
      icon: '/m.png',
    },
};

export default function RootLayout({ children }) {
  return (
    <html lang="nl">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
