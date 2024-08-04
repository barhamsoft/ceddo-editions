// AuteursSection.js
import {
     Card,
     CardHeader,
     CardTitle,
     CardDescription,
     CardContent,
     CardFooter,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import books from '@/books';
import Image from 'next/image';

export function AuteursSection() {
     return (
          <section className="py-12 bg-muted md:py-24 lg:py-32">
               <div className="container px-4 mx-auto md:px-6">
                    <div className="space-y-6">
                         <div className="space-y-2">
                              <h2 className="text-3xl font-bold">Nos auteurs</h2>
                              <p className="text-lg text-muted-foreground">
                                   Découvrez le talent et l'univers de nos auteurs.
                              </p>
                         </div>
                         <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                              {books.map((book, index) => (
                                   <Card key={index}>
                                        <CardHeader>
                                             <Image
                                                  src={book.image}
                                                  width={200}
                                                  height={200}
                                                  alt={book.author}
                                                  className="object-cover rounded-full"
                                             />
                                        </CardHeader>
                                        <CardContent>
                                             <div className="space-y-2">
                                                  <h3 className="text-xl font-bold">{book.author}</h3>
                                                  <p className="text-muted-foreground">
                                                       {book.author_info.slice(0, 100)}...
                                                  </p>
                                             </div>
                                        </CardContent>
                                        {/* <CardFooter>
                                             <Button variant="outline" size="sm">
                                                  Découvrir
                                             </Button>
                                        </CardFooter> */}
                                   </Card>
                              ))}
                         </div>
                    </div>
               </div>
          </section>
     );
}
