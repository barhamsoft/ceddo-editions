import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';

export function Contact() {
  return (
    <section className="py-12 md:py-24 bg-muted">
      <div className="container px-4 mx-auto md:px-6">
        <div className="flex flex-col items-center justify-center text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tight">
              Contactez-nous
            </h2>
            <p className="max-w-[700px] text-muted-foreground">
              Vous avez une question, une suggestion ou vous souhaitez soumettre
              un manuscrit ? N'hésitez pas à nous contacter.
            </p>
          </div>
          <form className="w-full max-w-md mt-8 space-y-4">
            <Input type="text" placeholder="Nom" className="w-full" required />
            <Input
              type="email"
              placeholder="Email"
              className="w-full"
              required
            />
            <Textarea
              placeholder="Message"
              rows={4}
              className="w-full resize-none"
              required
            />
            <Button type="submit" className="w-full">
              Envoyer
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}
