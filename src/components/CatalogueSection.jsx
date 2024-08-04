// CatalogueSection.js
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export function CatalogueSection() {
  return (
    <section className="py-12 md:py-24 lg:py-32">
      <div className="container px-4 mx-auto md:px-6">
        <div className="space-y-6">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold">Notre catalogue</h2>
            <p className="text-lg text-muted-foreground">Découvrez notre sélection de livres, triés par genre ou par auteur.</p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle>La Peste</CardTitle>
                <CardDescription>Albert Camus</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Un roman emblématique de la littérature française, qui explore les thèmes de l'absurde et de la condition humaine.
                </p>
              </CardContent>
              <CardFooter>
                <Button variant="outline" size="sm">Découvrir</Button>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Madame Bovary</CardTitle>
                <CardDescription>Gustave Flaubert</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Un chef-d'œuvre du réalisme français, qui décrit avec finesse les aspirations et les désillusions d'une femme de la bourgeoisie.
                </p>
              </CardContent>
              <CardFooter>
                <Button variant="outline" size="sm">Découvrir</Button>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Les Misérables</CardTitle>
                <CardDescription>Victor Hugo</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Une fresque épique qui explore les thèmes de la justice, de la rédemption et de l'engagement social.
                </p>
              </CardContent>
              <CardFooter>
                <Button variant="outline" size="sm">Découvrir</Button>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>L'Étranger</CardTitle>
                <CardDescription>Albert Camus</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Un roman emblématique de l'absurde, qui interroge la condition humaine et la place de l'individu dans la société.
                </p>
              </CardContent>
              <CardFooter>
                <Button variant="outline" size="sm">Découvrir</Button>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Germinal</CardTitle>
                <CardDescription>Émile Zola</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Un roman naturaliste qui dépeint avec force la condition des mineurs du Nord de la France au 19e siècle.
                </p>
              </CardContent>
              <CardFooter>
                <Button variant="outline" size="sm">Découvrir</Button>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Boule de Suif</CardTitle>
                <CardDescription>Guy de Maupassant</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Une nouvelle réaliste qui offre un portrait saisissant de la société française pendant la guerre de 1870.
                </p>
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
