// EventsSection.js
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CalendarIcon, MapPinIcon } from '@/components/icons';
import Image from 'next/image';

// Liste des événements
const events = [
  {
    title: 'Lancement de "La décharge"',
    description:
      "Venez découvrir le chef-d'œuvre de Daouda DIONE lors d'une soirée de lancement.",
    date: '20 août 2023, 19h',
    location: 'Librairie Classique, 123 Rue des Livres',
    image: '/la-decharge.jpg',
  },
  {
    title: 'Lancement de "Dans la peau d\'une femme"',
    description:
      'Découvrez le roman de Moustapha SAMB lors de cet événement spécial.',
    date: '25 août 2023, 18h',
    location: 'Salle des fêtes, 456 Avenue des Écrivains',
    image: '/dans-la-peau-dune-femme.jpg',
  },
  // Ajoutez les autres événements ici...
];

export function EventsSection() {
  return (
    <section className="py-12 md:py-24 lg:py-32">
      <div className="container px-4 mx-auto md:px-6">
        <div className="space-y-6">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold">Nos événements</h2>
            <p className="text-lg text-muted-foreground">
              Retrouvez le calendrier de nos prochains événements.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {events.map((event, index) => (
              <Card key={index}>
                <CardHeader>
                  <Image
                    src={event.image}
                    width={400}
                    height={200}
                    alt={event.title}
                    className="object-cover rounded-t-md"
                  />
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold">{event.title}</h3>
                    <p className="text-muted-foreground">{event.description}</p>
                    <div className="flex items-center gap-2">
                      <CalendarIcon className="w-5 h-5 text-muted-foreground" />
                      <span className="text-muted-foreground">
                        {event.date}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPinIcon className="w-5 h-5 text-muted-foreground" />
                      <span className="text-muted-foreground">
                        {event.location}
                      </span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" size="sm">
                    S'inscrire
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
