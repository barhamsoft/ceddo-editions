// AuteursSection.js
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export function AuteursSection() {
     return (
          <section className="py-12 bg-muted md:py-24 lg:py-32">
               <div className="container px-4 mx-auto md:px-6">
                    <div className="space-y-6">
                         <div className="space-y-2">
                              <h2 className="text-3xl font-bold">Nos auteurs</h2>
                              <p className="text-lg text-muted-foreground">Découvrez le talent et l'univers de nos auteurs.</p>
                         </div>
                         <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                              <Card>
                                   <CardHeader>
                                        <img src="/placeholder.svg" width="200" height="200" alt="Albert Camus" className="rounded-full" style={{ aspectRatio: "200/200", objectFit: "cover" }} />
                                   </CardHeader>
                                   <CardContent>
                                        <div className="space-y-2">
                                             <h3 className="text-xl font-bold">Albert Camus</h3>
                                             <p className="text-muted-foreground">
                                                  Écrivain et philosophe français, lauréat du prix Nobel de littérature en 1957. Ses œuvres les plus connues sont "La Peste" et "L'Étranger".
                                             </p>
                                        </div>
                                   </CardContent>
                                   <CardFooter>
                                        <Button variant="outline" size="sm">Découvrir</Button>
                                   </CardFooter>
                              </Card>
                              <Card>
                                   <CardHeader>
                                        <img src="/placeholder.svg" width="200" height="200" alt="Gustave Flaubert" className="rounded-full" style={{ aspectRatio: "200/200", objectFit: "cover" }} />
                                   </CardHeader>
                                   <CardContent>
                                        <div className="space-y-2">
                                             <h3 className="text-xl font-bold">Gustave Flaubert</h3>
                                             <p className="text-muted-foreground">
                                                  Écrivain français, considéré comme l'un des plus grands représentants du réalisme. Son chef-d'œuvre est "Madame Bovary".
                                             </p>
                                        </div>
                                   </CardContent>
                                   <CardFooter>
                                        <Button variant="outline" size="sm">Découvrir</Button>
                                   </CardFooter>
                              </Card>
                              <Card>
                                   <CardHeader>
                                        <img src="/placeholder.svg" width="200" height="200" alt="Victor Hugo" className="rounded-full" style={{ aspectRatio: "200/200", objectFit: "cover" }} />
                                   </CardHeader>
                                   <CardContent>
                                        <div className="space-y-2">
                                             <h3 className="text-xl font-bold">Victor Hugo</h3>
                                             <p className="text-muted-foreground">
                                                  Écrivain, dramaturge et poète français, l'un des principaux représentants du romantisme. Son œuvre majeure est "Les Misérables".
                                             </p>
                                        </div>
                                   </CardContent>
                                   <CardFooter>
                                        <Button variant="outline" size="sm">Découvrir</Button>
                                   </CardFooter>
                              </Card>
                              <Card>
                                   <CardHeader>
                                        <img src="/placeholder.svg" width="200" height="200" alt="Émile Zola" className="rounded-full" style={{ aspectRatio: "200/200", objectFit: "cover" }} />
                                   </CardHeader>
                                   <CardContent>
                                        <div className="space-y-2">
                                             <h3 className="text-xl font-bold">Émile Zola</h3>
                                             <p className="text-muted-foreground">
                                                  Écrivain français, l'un des principaux représentants du naturalisme. Son roman "Germinal" est l'un de ses chefs-d'œuvre.
                                             </p>
                                        </div>
                                   </CardContent>
                                   <CardFooter>
                                        <Button variant="outline" size="sm">Découvrir</Button>
                                   </CardFooter>
                              </Card>
                              <Card>
                                   <CardHeader>
                                        <img src="/placeholder.svg" width="200" height="200" alt="Guy de Maupassant" className="rounded-full" style={{ aspectRatio: "200/200", objectFit: "cover" }} />
                                   </CardHeader>
                                   <CardContent>
                                        <div className="space-y-2">
                                             <h3 className="text-xl font-bold">Guy de Maupassant</h3>
                                             <p className="text-muted-foreground">
                                                  Écrivain français, l'un des plus grands maîtres de la nouvelle réaliste. Sa nouvelle "Boule de Suif" est l'un de ses chefs-d'œuvre.
                                             </p>
                                        </div>
                                   </CardContent>
                                   <CardFooter>
                                        <Button variant="outline" size="sm">Découvrir</Button>
                                   </CardFooter>
                              </Card>
                         </div>
                    </div>
               </div>
          </section>
     );
}
