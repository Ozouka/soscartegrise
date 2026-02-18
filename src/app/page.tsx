import { Metadata } from 'next';
import HeroHomeSection from '@/components/HeroHomeSection';
import ServicesPresentationSection from '@/components/sections/ServicesPresentationSection';
import ServicesShowcaseSection from '@/components/sections/ServicesShowcaseSection';
import ReassuranceSection, { ReassuranceItem } from '@/components/sections/ReassuranceSection';
import ContactLocationSection from '@/components/sections/ContactLocationSection';
import { SERVICES, HOME_COPY, SEO_DEFAULT } from '@/lib/constants';
import ChatBubbleLeftRightIcon from '@/components/icons/ChatBubbleLeftRightIcon';
import MapPinIcon from '@/components/icons/MapPinIcon';
import RocketLaunchIcon from '@/components/icons/RocketLaunchIcon';

export const metadata: Metadata = {
  title: SEO_DEFAULT.defaultTitle,
  description: SEO_DEFAULT.defaultDescription,
  keywords: SEO_DEFAULT.defaultKeywords,
  openGraph: {
    title: SEO_DEFAULT.siteName,
    description: SEO_DEFAULT.defaultDescription,
    url: SEO_DEFAULT.canonicalUrl,
    siteName: SEO_DEFAULT.siteName,
    locale: 'fr_FR',
    type: 'website',
  },
};

const REASSURANCE_ICONS = [
  <ChatBubbleLeftRightIcon key="1" className="w-8 h-8" />,
  <MapPinIcon key="2" className="w-8 h-8" />,
  <RocketLaunchIcon key="3" className="w-8 h-8" />,
];

function buildReassuranceItems(): ReassuranceItem[] {
  return HOME_COPY.reassurance.map((item, i) => ({
    icon: REASSURANCE_ICONS[i],
    title: item.title,
    description: item.description,
  }));
}

export default function HomePage() {
  const featuredServices = SERVICES.slice(0, 3);
  const reassuranceItems = buildReassuranceItems();

  return (
    <main>
      {/* Hero Section avec animation au chargement */}
      <HeroHomeSection />
      
      {/* Section présentation des services avec image certificat */}
      <ServicesPresentationSection />
      
      {/* Section carousel des services mis en avant */}
      <ServicesShowcaseSection services={featuredServices} />

      {/* Section réassurance - Pourquoi nous faire confiance */}
      <ReassuranceSection items={reassuranceItems} />

      {/* Section contact et localisation */}
      <ContactLocationSection />
    </main>
  );
}
