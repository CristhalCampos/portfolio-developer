import './globals.css';
import { ThemeContextProvider } from '../context/ThemeContext';
import Navbar from '../components/Navbar';

export const metadata = {
  title: 'CristhDeveloper - Portafolio FullStack',
  description: 'Portafolio de Cristhal Campos, Desarrolladora FullStack, construido con Next.js y Tailwind CSS.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className="overflow-hidden transition-colors duration-500">
        <ThemeContextProvider>
          <Navbar />
          <main className="md:pl-60 h-screen">{children}</main>
        </ThemeContextProvider>
      </body>
    </html>
  );
}