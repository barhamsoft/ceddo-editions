// EventsSection.js
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CalendarIcon, MapPinIcon } from "@/components/icons";

export function EventsSection() {
  return (
    <section className="py-12 md:py-24 lg:py-32">
      <div className="container px-4 mx-auto md:px-6">
        <div className="space-y-6">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold">Nos événements</h2>
            <p className="text-lg text-muted-foreground">Retrouvez le calendrier de nos prochains événements.</p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <img src="/placeholder.svg" width="400" height="200" alt="Lancement de Madame Bovary" className="object-cover rounded-t-md" style={{ aspectRatio: "400/200", objectFit: "cover" }} />
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Lancement de "Madame Bovary"</h3>
                  <p className="text-muted-foreground">
                    Venez découvrir le chef-d'œuvre de Gustave Flaubert lors d'une soirée de lancement.
                  </p>
                  <div className="flex items-center gap-2">
                    <CalendarIcon className="w-5 h-5 text-muted-foreground" />
                    <span className="text-muted-foreground">15 juin 2023, 19h</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPinIcon className="w-5 h-5 text-muted-foreground" />
                    <span className="text-muted-foreground">Librairie Classique, 123 Rue des Livres</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" size="sm">S'inscrire</Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
