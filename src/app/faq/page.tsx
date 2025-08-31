import { Metadata } from 'next';
import FAQContent from '@/components/FAQContent';

export const metadata: Metadata = {
  title: 'FAQ - SOS Carte Grise – Saint-Gaudens | Questions fréquentes',
  description: 'Trouvez rapidement les réponses à vos questions sur la carte grise. FAQ complète sur les démarches, délais, documents et procédures.',
  keywords: 'FAQ carte grise, questions fréquentes, aide, Saint-Gaudens, démarches',
};

export default function FAQPage() {
  return <FAQContent />;
}
