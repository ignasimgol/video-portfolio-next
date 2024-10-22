import { FaInstagram, FaTiktok, FaEnvelope } from 'react-icons/fa';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full flex justify-between items-center px-8 py-4 bg-white z-50">
      {/* Nombre */}
      <div className="text-xl font-bold text-gray-800">
        <Link href="/">Maria del Rio</Link>
      </div>

      {/* Navegación */}
      <div className="flex space-x-8">
        <Link href="/about" className="text-gray-800 hover:text-red-600">
          About
        </Link>
      </div>
      
      {/* Iconos de redes sociales */}
      <div className="flex space-x-6">
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <FaInstagram className="text-gray-800 hover:text-red-600 text-xl" />
        </a>
        <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer">
          <FaTiktok className="text-gray-800 hover:text-red-600 text-xl" />
        </a>
        <a href="mailto:maria@gmail.com">
          <FaEnvelope className="text-gray-800 hover:text-red-600 text-xl" />
        </a>
      </div>
    </header>
  );
}
