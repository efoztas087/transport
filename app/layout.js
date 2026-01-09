import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Miya Transport | Allround logistieke partner',
  description:
    'Miya Transport verzorgt nationaal en internationaal transport: wegtransport, express zendingen, pallets, gekoeld vervoer en maatwerk logistiek.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="nl">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
