import './globals.css';
import { ThemeContextProvider } from '../context/ThemeContext';
import Navbar from '../components/Navbar';

export const metadata = {
  title: 'CristhDeveloper',
  description: 'Mi Portafolio creado con Next.js',
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className="md:pl-60 bg-gray-50 dark:bg-zinc-950 text-gray-900 dark:text-white">
        <ThemeContextProvider>
          <Navbar />
          <main>{children}</main>
        </ThemeContextProvider>
      </body>
    </html>
  );
}