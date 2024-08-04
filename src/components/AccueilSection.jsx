export function AccueilSection() {
     return (
          <section className="py-12 bg-muted md:py-24 lg:py-32">
               <div className="container max-w-4xl px-4 mx-auto space-y-6 md:px-6">
                    <div className="space-y-2">
                         <h1 className="text-4xl font-bold">Éditions Ceddo</h1>
                         <p className="text-lg text-muted-foreground">
                              Depuis plus de 50 ans, Éditions Classiques publie des ouvrages de
                              qualité qui traversent les époques. Notre mission est de transmettre
                              un patrimoine littéraire riche et diversifié.
                         </p>
                    </div>
                    <div className="grid gap-6 md:grid-cols-2">
                         <div className="space-y-2">
                              <h2 className="text-2xl font-bold">Notre histoire</h2>
                              <p className="text-muted-foreground">
                                   Fondées en 1970 par une équipe passionnée, les Éditions Classiques
                                   sont devenues une référence dans le monde de l'édition. Nous nous
                                   engageons à offrir à nos lecteurs des livres qui les transportent
                                   et les enrichissent.
                              </p>
                         </div>
                         <div className="space-y-2">
                              <h2 className="text-2xl font-bold">Notre mission</h2>
                              <p className="text-muted-foreground">
                                   Préserver et transmettre un patrimoine littéraire riche et
                                   diversifié, tout en découvrant de nouveaux talents. Nous œuvrons
                                   pour que la lecture reste un plaisir accessible à tous.
                              </p>
                         </div>
                    </div>
               </div>
          </section>
     );
}
