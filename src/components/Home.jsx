import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"

export default function Home() {
  return (
    (<div className="flex flex-col min-h-[100dvh]">
      <header
        className="flex items-center justify-between px-6 py-4 bg-primary text-primary-foreground">
        <div className="flex items-center gap-4">
          <Link href="#" className="flex items-center gap-2" prefetch={false}>
            <BookIcon className="w-8 h-8" />
            <span className="text-2xl font-bold">Éditions Classiques</span>
          </Link>
        </div>
        <nav className="items-center hidden gap-6 md:flex">
          <Link href="#" className="text-sm font-medium hover:underline" prefetch={false}>
            Accueil
          </Link>
          <Link href="#" className="text-sm font-medium hover:underline" prefetch={false}>
            Catalogue
          </Link>
          <Link href="#" className="text-sm font-medium hover:underline" prefetch={false}>
            Auteurs
          </Link>
          <Link href="#" className="text-sm font-medium hover:underline" prefetch={false}>
            Événements
          </Link>
          <Link href="#" className="text-sm font-medium hover:underline" prefetch={false}>
            Contact
          </Link>
        </nav>
        <Button variant="outline" size="sm" className="md:hidden">
          <MenuIcon className="w-5 h-5" />
          <span className="sr-only">Toggle navigation</span>
        </Button>
      </header>
      <main className="flex-1">
        <section className="py-12 bg-muted md:py-24 lg:py-32">
          <div className="container max-w-4xl px-4 mx-auto space-y-6 md:px-6">
            <div className="space-y-2">
              <h1 className="text-4xl font-bold">Éditions Classiques</h1>
              <p className="text-lg text-muted-foreground">
                Depuis plus de 50 ans, Éditions Classiques publie des ouvrages de qualité qui traversent les époques.
                Notre mission est de transmettre un patrimoine littéraire riche et diversifié.
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="space-y-2">
                <h2 className="text-2xl font-bold">Notre histoire</h2>
                <p className="text-muted-foreground">
                  Fondées en 1970 par une équipe passionnée, les Éditions Classiques sont devenues une référence dans le
                  monde de l'édition. Nous nous engageons à offrir à nos lecteurs des livres qui les transportent et les
                  enrichissent.
                </p>
              </div>
              <div className="space-y-2">
                <h2 className="text-2xl font-bold">Notre mission</h2>
                <p className="text-muted-foreground">
                  Préserver et transmettre un patrimoine littéraire riche et diversifié, tout en découvrant de nouveaux
                  talents. Nous œuvrons pour que la lecture reste un plaisir accessible à tous.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="py-12 md:py-24 lg:py-32">
          <div className="container px-4 mx-auto md:px-6">
            <div className="space-y-6">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold">Notre catalogue</h2>
                <p className="text-lg text-muted-foreground">
                  Découvrez notre sélection de livres, triés par genre ou par auteur.
                </p>
              </div>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                <Card>
                  <CardHeader>
                    <CardTitle>La Peste</CardTitle>
                    <CardDescription>Albert Camus</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Un roman emblématique de la littérature française, qui explore les thèmes de l\'absurde et de la
                      condition humaine.
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" size="sm">
                      Découvrir
                    </Button>
                  </CardFooter>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Madame Bovary</CardTitle>
                    <CardDescription>Gustave Flaubert</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Un chef-d'œuvre du réalisme français, qui décrit avec finesse les aspirations et les désillusions
                      d'une femme de la bourgeoisie.
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" size="sm">
                      Découvrir
                    </Button>
                  </CardFooter>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Les Misérables</CardTitle>
                    <CardDescription>Victor Hugo</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Une fresque épique qui explore les thèmes de la justice, de la rédemption et de l\'engagement
                      social.
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" size="sm">
                      Découvrir
                    </Button>
                  </CardFooter>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>L'Étranger</CardTitle>
                    <CardDescription>Albert Camus</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Un roman emblématique de l'absurde, qui interroge la condition humaine et la place de l\'individu
                      dans la société.
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" size="sm">
                      Découvrir
                    </Button>
                  </CardFooter>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Germinal</CardTitle>
                    <CardDescription>Émile Zola</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Un roman naturaliste qui dépeint avec force la condition des mineurs du Nord de la France au 19e
                      siècle.
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" size="sm">
                      Découvrir
                    </Button>
                  </CardFooter>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Boule de Suif</CardTitle>
                    <CardDescription>Guy de Maupassant</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Une nouvelle réaliste qui offre un portrait saisissant de la société française pendant la guerre
                      de 1870.
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" size="sm">
                      Découvrir
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            </div>
          </div>
        </section>
        <section className="py-12 bg-muted md:py-24 lg:py-32">
          <div className="container px-4 mx-auto md:px-6">
            <div className="space-y-6">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold">Nos auteurs</h2>
                <p className="text-lg text-muted-foreground">Découvrez le talent et l\'univers de nos auteurs.</p>
              </div>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                <Card>
                  <CardHeader>
                    <img
                      src="/placeholder.svg"
                      width="200"
                      height="200"
                      alt="Albert Camus"
                      className="rounded-full"
                      style={{ aspectRatio: "200/200", objectFit: "cover" }} />
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <h3 className="text-xl font-bold">Albert Camus</h3>
                      <p className="text-muted-foreground">
                        Écrivain et philosophe français, lauréat du prix Nobel de littérature en 1957. Ses œuvres les
                        plus connues sont "La Peste" et "L'Étranger".
                      </p>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" size="sm">
                      Découvrir
                    </Button>
                  </CardFooter>
                </Card>
                <Card>
                  <CardHeader>
                    <img
                      src="/placeholder.svg"
                      width="200"
                      height="200"
                      alt="Gustave Flaubert"
                      className="rounded-full"
                      style={{ aspectRatio: "200/200", objectFit: "cover" }} />
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <h3 className="text-xl font-bold">Gustave Flaubert</h3>
                      <p className="text-muted-foreground">
                        Écrivain français, considéré comme l'un des plus grands représentants du réalisme. Son
                        chef-d'œuvre est "Madame Bovary".
                      </p>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" size="sm">
                      Découvrir
                    </Button>
                  </CardFooter>
                </Card>
                <Card>
                  <CardHeader>
                    <img
                      src="/placeholder.svg"
                      width="200"
                      height="200"
                      alt="Victor Hugo"
                      className="rounded-full"
                      style={{ aspectRatio: "200/200", objectFit: "cover" }} />
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <h3 className="text-xl font-bold">Victor Hugo</h3>
                      <p className="text-muted-foreground">
                        Écrivain, dramaturge et poète français, l'un des principaux représentants du romantisme. Son
                        œuvre majeure est "Les Misérables".
                      </p>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" size="sm">
                      Découvrir
                    </Button>
                  </CardFooter>
                </Card>
                <Card>
                  <CardHeader>
                    <img
                      src="/placeholder.svg"
                      width="200"
                      height="200"
                      alt="Émile Zola"
                      className="rounded-full"
                      style={{ aspectRatio: "200/200", objectFit: "cover" }} />
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <h3 className="text-xl font-bold">Émile Zola</h3>
                      <p className="text-muted-foreground">
                        Écrivain français, l\'un des principaux représentants du naturalisme. Son roman "Germinal" est
                        l\'un de ses chefs-d'œuvre.
                      </p>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" size="sm">
                      Découvrir
                    </Button>
                  </CardFooter>
                </Card>
                <Card>
                  <CardHeader>
                    <img
                      src="/placeholder.svg"
                      width="200"
                      height="200"
                      alt="Guy de Maupassant"
                      className="rounded-full"
                      style={{ aspectRatio: "200/200", objectFit: "cover" }} />
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <h3 className="text-xl font-bold">Guy de Maupassant</h3>
                      <p className="text-muted-foreground">
                        Écrivain français, l'un des plus grands maîtres de la nouvelle réaliste. Sa nouvelle "Boule de
                        Suif" est l\'un de ses chefs-d'œuvre.
                      </p>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" size="sm">
                      Découvrir
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            </div>
          </div>
        </section>
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
                    <img
                      src="/placeholder.svg"
                      width="400"
                      height="200"
                      alt="Lancement de Madame Bovary"
                      className="object-cover rounded-t-md"
                      style={{ aspectRatio: "400/200", objectFit: "cover" }} />
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
                    <Button variant="outline" size="sm">
                      S'inscrire
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>)
  );
}

function BookIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
    </svg>)
  );
}


function CalendarIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="M8 2v4" />
      <path d="M16 2v4" />
      <rect width="18" height="18" x="3" y="4" rx="2" />
      <path d="M3 10h18" />
    </svg>)
  );
}


function MapPinIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>)
  );
}


function MenuIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>)
  );
}
