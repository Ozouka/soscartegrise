import { Metadata } from 'next';
import HeroHomeSection from '@/components/HeroHomeSection';
import ServicesPresentationSection from '@/components/sections/ServicesPresentationSection';
import ServicesShowcaseSection from '@/components/sections/ServicesShowcaseSection';
import ReassuranceSection, { ReassuranceItem } from '@/components/sections/ReassuranceSection';
import ContactLocationSection from '@/components/sections/ContactLocationSection';
import { SERVICES } from '@/lib/constants';
import ChatBubbleLeftRightIcon from '@/components/icons/ChatBubbleLeftRightIcon';
import MapPinIcon from '@/components/icons/MapPinIcon';
import RocketLaunchIcon from '@/components/icons/RocketLaunchIcon';

export const metadata: Metadata = {
  title: 'SOS Carte Grise – Saint-Gaudens | Carte grise simple et rapide',
  description: 'Carte grise en Comminges, simple & rapide. Sans prise de tête : nous gérons votre dossier de A à Z à Saint-Gaudens. Habilité SIV, traitement rapide.',
  keywords: 'carte grise, Saint-Gaudens, Comminges, immatriculation, changement titulaire, duplicata',
  openGraph: {
    title: 'SOS Carte Grise – Saint-Gaudens',
    description: 'Carte grise en Comminges, simple & rapide. Habilité SIV, traitement rapide.',
    url: 'https://soscartegrise-saintgaudens.fr',
    siteName: 'SOS Carte Grise – Saint-Gaudens',
    locale: 'fr_FR',
    type: 'website',
  },
};

const REASSURANCE_ITEMS: ReassuranceItem[] = [
  {
    icon: <ChatBubbleLeftRightIcon className="w-8 h-8" />,
    title: "L'ÉCOUTE",
    description: "Parce que chaque dossier est unique, nous prenons le temps de vous écouter et de comprendre vos besoins. Nous vous guidons pas à pas, avec patience et bienveillance."
  },
  {
    icon: <MapPinIcon className="w-8 h-8" />,
    title: "LA PROXIMITÉ AU CŒUR DE NOTRE SERVICE",
    description: "À Saint-Gaudens et alentours, nous sommes là, près de vous, au quotidien. Un accompagnement simple, humain et vraiment proche."
  },
  {
    icon: <RocketLaunchIcon className="w-8 h-8" />,
    title: "UN SERVICE RAPIDE ET EFFICACE",
    description: "Fini la paperasse qui traîne. Grâce à notre agrément officiel, vos démarches sont simplifiées et finalisées rapidement. Rapide, fiable, sans stress."
  }
];

export default function HomePage() {
  const featuredServices = SERVICES.slice(0, 3);

  return (
    <main>
      {/* Hero Section avec animation au chargement */}
      <HeroHomeSection />
      
      {/* Section présentation des services avec image certificat */}
      <ServicesPresentationSection />
      
      {/* Section carousel des services mis en avant */}
      <ServicesShowcaseSection services={featuredServices} />

      {/* Section réassurance - Pourquoi nous faire confiance */}
      <ReassuranceSection items={REASSURANCE_ITEMS} />

      {/* Section contact et localisation */}
      <ContactLocationSection />
    </main>
  );
}
