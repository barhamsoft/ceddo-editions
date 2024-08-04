// Header.js
import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { BookIcon, MenuIcon } from '@/components/icons';

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="flex items-center justify-between px-6 py-4 bg-primary text-primary-foreground">
      <div className="flex items-center gap-4">
        <Link href="#" className="flex items-center gap-2" prefetch={false}>
          <BookIcon className="w-8 h-8" />
          <span className="text-2xl font-bold">Éditions Classiques</span>
        </Link>
      </div>
      <nav
        className={`flex-col items-center md:flex md:flex-row md:items-center md:gap-6 ${menuOpen ? 'flex' : 'hidden'} fixed top-0 left-0 w-full h-full bg-primary transition-all duration-300 ease-in-out md:static md:w-auto md:h-auto`}
      >
        <Link
          href="#"
          className="text-sm font-medium transition duration-300 ease-in-out hover:underline"
          prefetch={false}
        >
          Accueil
        </Link>
        <Link
          href="#"
          className="text-sm font-medium transition duration-300 ease-in-out hover:underline"
          prefetch={false}
        >
          Catalogue
        </Link>
        <Link
          href="#"
          className="text-sm font-medium transition duration-300 ease-in-out hover:underline"
          prefetch={false}
        >
          Auteurs
        </Link>
        <Link
          href="#"
          className="text-sm font-medium transition duration-300 ease-in-out hover:underline"
          prefetch={false}
        >
          Événements
        </Link>
        <Link
          href="#"
          className="text-sm font-medium transition duration-300 ease-in-out hover:underline"
          prefetch={false}
        >
          Contact
        </Link>
      </nav>
      <Button
        onClick={toggleMenu}
        variant="outline"
        size="sm"
        className="md:hidden"
      >
        <MenuIcon className="w-5 h-5" />
        <span className="sr-only">Toggle navigation</span>
      </Button>
    </header>
  );
}
