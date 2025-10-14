import './globals.css'
import { Poppins } from 'next/font/google';
import { AppProvider } from '@/context/AppContext';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

// Configure the font with the weights and subsets you need
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'], // Corresponds to regular, medium, semibold, bold
  variable: '--font-poppins', // Create a CSS variable for this font
});

export const metadata = {
  title: 'Influtics - Content Creator',
  description: 'The personal website and blog for Influtics.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${poppins.variable} font-sans bg-background text-foreground`}>
          <AppProvider>
            <Navbar />
            <main>{children}</main>
            <Footer />
          </AppProvider>
      </body>
    </html>
  );
}
