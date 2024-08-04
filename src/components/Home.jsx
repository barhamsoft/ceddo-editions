// Component2.js
import { Header } from '@/components/Header';
import { AccueilSection } from '@/components/AccueilSection';
import { CatalogueSection } from '@/components/CatalogueSection';
import { AuteursSection } from '@/components/AuteursSection';
import { EventsSection } from '@/components/EventsSection';
import { Contact } from './Contact';
import { Footer } from './Footer';

export default function Home() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <Header />
      <main className="flex-1">
        <AccueilSection />
        <CatalogueSection />
        <AuteursSection />
        <EventsSection />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
