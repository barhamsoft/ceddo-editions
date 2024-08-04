import '@/styles/globals.css';
import WhatsAppButton from '@/components/WhatsAppButton';

export default function App({ Component, pageProps }) {
  return (
    <div>
      <Component {...pageProps} />
      <WhatsAppButton />
    </div>
  );
}
