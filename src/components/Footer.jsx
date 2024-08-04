import Link from 'next/link';

export function Footer() {
  return (
    <footer className="py-6 bg-primary text-primary-foreground">
      <div className="container flex flex-col items-center justify-between px-4 mx-auto md:px-6 md:flex-row">
        <p className="text-sm">
          &copy; 2024 Éditions Acme. Tous droits réservés.
        </p>
        <nav className="flex items-center gap-4 mt-4 md:mt-0">
          <Link
            href="#"
            className="text-sm hover:underline underline-offset-4"
            prefetch={false}
          >
            Mentions légales
          </Link>
          <Link
            href="#"
            className="text-sm hover:underline underline-offset-4"
            prefetch={false}
          >
            Politique de confidentialité
          </Link>
        </nav>
      </div>
    </footer>
  );
}
