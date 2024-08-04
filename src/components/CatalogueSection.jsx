import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import books from '@/books';

export function CatalogueSection() {
  return (
    <section className="py-12 md:py-24 lg:py-32">
      <div className="container px-4 mx-auto md:px-6">
        <div className="space-y-6">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold">Notre catalogue</h2>
            <p className="text-lg text-muted-foreground">
              Découvrez notre sélection de livres, triés par genre ou par
              auteur.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {books.map((book, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle>{book.title}</CardTitle>
                  <CardDescription>{book.author}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Image
                    src={book.image}
                    alt={book.title}
                    width={300}
                    height={400}
                    className="object-cover"
                  />
                  <p className="mt-2 text-muted-foreground">
                    {book.description.slice(0, 105)}...
                  </p>
                </CardContent>
                <CardFooter>
                  <a
                    href={book.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block"
                  >
                    <Button variant="outline" size="sm">
                      Acheter sur Amazon
                    </Button>
                  </a>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
