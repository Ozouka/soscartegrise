export interface Service {
  id: string;
  title: string;
  description: string;
  documents: string[];
  price: string;
}

/** Prestation carte grise (page Prestations) */
export interface Prestation {
  id: string;
  title: string;
  description: string;
  image: string;
}

/** Service permis de conduire (page Permis) */
export interface PermisService {
  id: string;
  title: string;
  description: string;
  image: string;
}

export const BUSINESS = {
  name: "SOS Carte Grise – Saint-Gaudens",
  street: "17 Boulevard Charles de Gaulle",
  postalCode: "31800",
  city: "Saint-Gaudens",
  note: "En face de La Poste",
  phoneMain: "+33 6 19 92 33 40",
  phoneDesk: "+33 5 81 66 69 00",
  email: "soscartegrise31@hotmail.com",
  hours: [
    { day: "Lundi", am: "08:30–12:00", pm: "14:00–17:00" },
    { day: "Mardi", am: "08:30–12:00", pm: "14:00–17:00" },
    { day: "Mercredi", am: "08:30–12:00", pm: "Fermé " },
    { day: "Jeudi", am: "08:30–12:00", pm: "14:00–17:00" },
    { day: "Vendredi", am: "08:30–12:00", pm: "14:00–17:00" },
  ],
  geo: { lat: 43.107, lng: 0.723 },
  social: { facebook: "https://www.facebook.com/soscartegrise31800/", instagram: "https://www.instagram.com/soscartegrise/" }
};

// Services pour le carousel de la page d'accueil (3 premiers pavés)
export const SERVICES = [
  {
    id: "carte-grise",
    title: "Carte grise",
    description: "Chez SOS CARTE GRISE, nous gérons toutes vos démarches rapidement, sans stress et sans rendez-vous.",
    documents: ["Justificatif d'identité", "Justificatif de domicile", "Certificat de conformité"],
    price: "À partir de 59€"
  },
  {
    id: "permis-conduire",
    title: "Permis de conduire",
    description: "Votre permis, sans complication ! Renouvellement, duplicata ou fabrication : nous nous occupons de vos démarches officielles avec un service rapide et personnalisé.",
    documents: ["Justificatif d'identité", "Justificatif de domicile", "Photo d'identité", "Permis actuel si applicable"],
    price: "À partir de 49€"
  },
  {
    id: "plaque-immatriculation",
    title: "Plaque d'immatriculation",
    description: "Vos plaques d'immatriculation en quelques minutes ! Fabrication rapide et homologuée.",
    documents: ["Carte grise du véhicule"],
    price: "À partir de 29€"
  }
];

// Services carte grise détaillés pour la page "Nos services de carte grise"
export const CARTE_GRISE_SERVICES: Service[] = [
  {
    id: "changement-titulaire",
    title: "Changement de titulaire",
    description: "Transfert de propriété lors de l'achat d'un véhicule",
    documents: [
      "Carte grise barrée et signée",
      "Certificat de cession (Cerfa 0115776)",
      "Déclaration d'achat si véhicule vendu par un professionnel de l'automobile",
      "Copie du contrôle technique - 6 mois (véhicule de plus de 4 ans)",
      "Pièce d'identité (CNI, passeport, titre de séjour en cours de validité)",
      "Permis de conduire",
      "Justificatif de domicile de moins de 6 mois (facture: électricité, gaz, téléphone ; dernier avis d'imposition, quittance de loyer)"
    ],
    price: "25€"
  },
  {
    id: "demande-duplicata",
    title: "Duplicata de carte grise",
    description: "Remplacement en cas de perte, vol ou détérioration",
    documents: [
      "Pièce d'identité (CNI, passeport, titre de séjour en cours de validité)",
      "Contrôle technique en cours de validité",
      "Justificatif de domicile de moins de 6 mois (facture: électricité, gaz, téléphone ; dernier avis d'imposition, quittance de loyer)"
    ],
    price: "20€"
  },
  {
    id: "changement-adresse",
    title: "Changement d'adresse",
    description: "Mise à jour de l'adresse sur le certificat d'immatriculation",
    documents: [
      "Carte grise",
      "Pièce d'identité (CNI, passeport, titre de séjour en cours de validité)",
      "Justificatif de domicile de moins de 6 mois (facture: électricité, gaz, téléphone; dernier avis d'imposition, quittance de loyer)"
    ],
    price: "20€"
  },
  {
    id: "declaration-cession",
    title: "Déclaration de cession",
    description: "Le vendeur doit déclarer la cession du véhicule. Cette démarche vous protège si l'acheteur tarde à faire la carte grise à son nom",
    documents: [
      "POUR LES PARTICULIERS:",
      "Certificat de cession",
      "Pièce d'identité du vendeur (CNI, passeport, titre de séjour en cours de validité)",
      "POUR LES PROFESSIONNELS:",
      "Extrait de Kbis",
      "Pièce d'identité du gérant (CNI, passeport, titre de séjour en cours de validité)",
      "Certificat de cession",
      "Cachet de la société"
    ],
    price: "8€"
  },
  {
    id: "achat-professionnel",
    title: "Déclaration d'achat professionnel",
    description: "Cette déclaration concerne les professionnels de l'automobile",
    documents: [
      "Carte grise barrée et signée",
      "Certificat de cession (CERFA 02'13754)",
      "Pièce d'identité du gérant (CNI, passeport, titre de séjour en cours de validité)",
      "Kbis",
      "Cachet de la société"
    ],
    price: "8€"
  },
  {
    id: "certificat-provisoire-ww",
    title: "Certificat provisoire d'immatriculation WW",
    description: "Ce certificat vous permettra de circuler si l'immatriculation définitive de votre véhicule n'est pas possible pour dossier incomplet",
    documents: [
      "Carte grise étrangère",
      "Facture d'achat ou certificat de cession",
      "Justificatif de domicile de moins de 6 mois (facture: électricité, gaz, téléphone ; dernier avis d'imposition, quittance de loyer)",
      "Permis",
      "Pièce d'identité (CNI, passeport, titre de séjour en cours de validité)",
      "Assurance",
      "Quitus fiscal ou Cerfa 846A",
      "Contrôle technique",
      "Certificat de conformité (COC)",
      "POUR LES PROFESSIONNELS:",
      "Extrait de Kbis",
      "Pièce d'identité du gérant (CNI, passeport, titre de séjour en cours de validité)",
      "Cachet de la société"
    ],
    price: "30€"
  },
  {
    id: "vehicule-collection",
    title: "Véhicule de collection",
    description: "Il est possible de demander une carte grise véhicule de collection si celle-ci a plus de 30 ans, qu'il n'est plus en production, et que ses caractéristiques n'ont pas été modifiées (véhicule dans son état historique). Ni automatique, ni obligatoire, même si le véhicule dépasse les 30 ans, une carte grise véhicule de collection a pourtant de nombreux avantages.",
    documents: [
      "Attestation FFVE",
      "Copie de la carte grise actuelle",
      "Copie d'une pièce d'identité",
      "Copie du permis de conduire",
      "Justificatif de domicile de moins de 6 mois",
      "Contrôle technique en cours de validité",
      "Attestation d'assurance du véhicule"
    ],
    price: "50€"
  },
  {
    id: "carte-grise-etrangere",
    title: "Véhicule étranger",
    description: "Vous souhaitez immatriculer votre véhicule étranger en France",
    documents: [
      "Carte grise étrangère",
      "Facture d'achat ou certificat de cession",
      "Justificatif de domicile de moins de 6 mois (facture: électricité, gaz, téléphone ; dernier avis d'imposition, quittance de loyer)",
      "Permis",
      "Pièce d'identité (CNI, passeport, titre de séjour en cours de validité)",
      "Assurance",
      "Contrôle technique français ou européen",
      "Quitus fiscal",
      "Véhicule acquis hors EU (Cerfa 846A)",
      "Certificat de conformité (COC)",
      "POUR LES PROFESSIONNELS:",
      "Extrait de Kbis",
      "Pièce d'identité du gérant (CNI, passeport, titre de séjour en cours de validité)",
      "Cachet de la société"
    ],
    price: "50€"
  },
  {
    id: "changement-caracteristiques",
    title: "Changement de caractéristiques techniques",
    description: "La modification des caractéristiques technique d une carte grise concerne tout changement touchant les données du véhicule (poids, puissance, énergie etc...).",
    documents: [
      "Ancienne carte grise",
      "Justificatif de domicile de moins de 6 mois (facture: électricité, gaz, téléphone ; dernier avis d'imposition, quittance de loyer)",
      "Permis",
      "Pièce d'identité (CNI, passeport, titre de séjour en cours de validité)",
      "Assurance",
      "Contrôle technique en cours de validité",
      "Document officiel indiquant le changement de caractéristique technique effectué"
    ],
    price: "50€"
  }
];

export const FAQ_ITEMS = [
  {
    question: "Quels sont les délais de traitement ?",
    answer: "La plupart de nos démarches sont traitées sous 24-48h. Les cas complexes (import, modifications techniques) peuvent prendre 48-72h."
  },
  {
    question: "Quels documents sont nécessaires ?",
    answer: "Les documents varient selon la démarche. Consultez notre page prestations pour la liste complète ou contactez-nous directement."
  },
  {
    question: "Puis-je faire une procuration ?",
    answer: "Oui, nous acceptons les procurations notariées ou sur papier libre pour les démarches de carte grise."
  },
  {
    question: "Qu'en est-il du contrôle technique ?",
    answer: "Le contrôle technique est obligatoire pour les véhicules de plus de 4 ans lors de certaines démarches. Nous vous informons si nécessaire."
  },
  {
    question: "Comment se passe la livraison ?",
    answer: "Votre nouvelle carte grise est livrée directement à votre domicile par La Poste sous 2-3 jours ouvrés."
  },
  {
    question: "Quels sont vos horaires d'ouverture ?",
    answer: "Nous sommes ouverts du lundi au vendredi de 8h30 à 12h et de 14h à 17h (mercredi après-midi fermé), en face de La Poste à Saint-Gaudens."
  },
  {
    question: "Puis-je venir sans rendez-vous ?",
    answer: "Oui, nous accueillons les clients sans rendez-vous pendant nos horaires d'ouverture."
  },
  {
    question: "Quelle est la différence avec l'ANTS ?",
    answer: "Nous sommes habilités SIV et traitons directement avec l'ANTS. Vous évitez les files d'attente et les erreurs de dossier."
  },
  {
    question: "Que faire en cas de succession ?",
    answer: "Nous vous accompagnons dans les démarches de succession avec les documents appropriés (acte de notaire, etc.)."
  },
  {
    question: "Puis-je immatriculer un véhicule de leasing ?",
    answer: "Oui, nous traitons les immatriculations de véhicules de leasing avec l'autorisation de la société de financement."
  },
  {
    question: "Comment calculer le prix de la carte grise ?",
    answer: "Le prix dépend du cheval fiscal (31 en Haute-Garonne) et de l'âge du véhicule. Nous calculons cela pour vous."
  },
  {
    question: "Que faire si ma carte grise est volée ?",
    answer: "Déclarez le vol à la police, puis venez nous voir avec la déclaration pour obtenir un duplicata rapidement."
  }
];

// ——— Textes page d'accueil (réutilisables, style carte grise pro) ———
export const HOME_COPY = {
  heroSubtitle: "Votre carte grise en toute simplicité... et en quelques minutes !",
  servicesTitle: "SERVICE CARTE GRISE",
  servicesTagline: "Simple, rapide, sécurisé",
  servicesIntro:
    "Nous prenons en charge toutes les démarches de carte grise : immatriculation de véhicule neuf, d'occasion ou de collection, changement de titulaire, modification d'adresse, demande de duplicata ou encore déclaration de cession.",
  servicesIntro2:
    "Habilité et agréé par l'État, nous traitons votre dossier immédiatement, sur place pour que vous receviez votre certificat d'immatriculation dans les meilleurs délais.",
  reassurance: [
    { title: "L'ÉCOUTE", description: "Parce que chaque dossier est unique, nous prenons le temps de vous écouter et de comprendre vos besoins. Nous vous guidons pas à pas, avec patience et bienveillance." },
    { title: "LA PROXIMITÉ AU CŒUR DE NOTRE SERVICE", description: "À Saint-Gaudens et alentours, nous sommes là, près de vous, au quotidien. Un accompagnement simple, humain et vraiment proche." },
    { title: "UN SERVICE RAPIDE ET EFFICACE", description: "Fini la paperasse qui traîne. Grâce à notre agrément officiel, vos démarches sont simplifiées et finalisées rapidement. Rapide, fiable, sans stress." },
  ],
} as const;

/** Données pour la section réassurance (page d'accueil). Les icônes sont injectées dans la page. */
export const REASSURANCE_COPY = [
  { title: "L'ÉCOUTE", description: "Parce que chaque dossier est unique, nous prenons le temps de vous écouter et de comprendre vos besoins. Nous vous guidons pas à pas, avec patience et bienveillance." },
  { title: "LA PROXIMITÉ AU CŒUR DE NOTRE SERVICE", description: "À Saint-Gaudens et alentours, nous sommes là, près de vous, au quotidien. Un accompagnement simple, humain et vraiment proche." },
  { title: "UN SERVICE RAPIDE ET EFFICACE", description: "Fini la paperasse qui traîne. Grâce à notre agrément officiel, vos démarches sont simplifiées et finalisées rapidement. Rapide, fiable, sans stress." },
] as const;

// ——— Prestations (page Prestations) ———
export const PRESTATIONS: Prestation[] = [
  { id: 'changement-titulaire', title: 'Changement de titulaire', description: 'Effectuez facilement le changement de titulaire de votre véhicule.', image: '/images/changement-titulaire.jpg' },
  { id: 'changement-adresse', title: "Changement d'adresse", description: "Mettez à jour l'adresse sur votre carte grise rapidement.", image: '/images/changement-adresse.jpg' },
  { id: 'declaration-cession', title: 'Déclaration de cession', description: 'Déclarez la vente ou la cession de votre véhicule.', image: '/images/declaration-cession.jpg' },
  { id: 'demande-duplicata', title: 'Demande de duplicata', description: 'Obtenez un duplicata de votre carte grise en cas de perte ou de vol.', image: '/images/demande-duplicata.jpg' },
  { id: 'cas-particulier', title: 'Cas particulier', description: "Nous gérons tous les cas particuliers pour vos démarches.", image: '/images/cas-particulier.jpg' },
  { id: 'achat-professionnel', title: "Déclaration d'achat professionnel", description: 'Démarches spécifiques pour les achats professionnels.', image: '/images/achat-professionnel.jpg' },
  { id: 'carte-grise-etrangere', title: 'Carte grise étrangère', description: "Immatriculation de véhicules provenant de l'étranger.", image: '/images/carte-grise-etrangere.jpg' },
  { id: 'certificat-provisoire-ww', title: 'Certificat provisoire WW', description: "Obtenez votre certificat provisoire d'immatriculation.", image: '/images/certificat-provisoire.jpg' },
];

export const PRESTATIONS_PAGE_COPY = {
  title: 'Nos Prestations',
  description: "Découvrez toutes nos prestations pour vos démarches de carte grise. Notre équipe d'experts vous accompagne dans toutes vos démarches administratives.",
  ctaTitle: "Besoin d'aide pour vos démarches ?",
  ctaDescription: "Notre équipe d'experts est là pour vous accompagner dans toutes vos démarches administratives.",
  ctaContact: 'Nous contacter',
  ctaCall: 'Appeler maintenant',
} as const;

// ——— Permis de conduire (page Permis) ———
export const PERMIS_SERVICES: PermisService[] = [
  { id: 'demande-duplicata', title: 'Demande de duplicata', description: 'Obtenez un duplicata de votre permis de conduire en cas de perte, vol ou détérioration.', image: '/images/duplicata-permis.jpg' },
  { id: 'demande-recuperation', title: 'Demande de récupération', description: 'Récupérez votre permis de conduire après une suspension ou une annulation.', image: '/images/recuperation-permis.jpg' },
  { id: 'demande-renouvellement', title: 'Demande de renouvellement', description: 'Renouvelez votre permis de conduire arrivé à expiration.', image: '/images/renouvellement-permis.jpg' },
  { id: 'permis-europeen', title: 'Changement de permis européen', description: 'Échangez votre permis de conduire européen contre un permis français.', image: '/images/permis-europeen.jpg' },
  { id: 'autre-demande', title: 'Autre demande', description: 'Nous traitons toutes vos autres demandes liées au permis de conduire.', image: '/images/autre-demande-permis.jpg' },
  { id: 'permis-etranger', title: 'Changement de permis étranger', description: 'Échangez votre permis de conduire étranger contre un permis français.', image: '/images/permis-etranger.jpg' },
  { id: 'permis-international', title: 'Demande de permis international', description: "Obtenez votre permis de conduire international pour voyager à l'étranger.", image: '/images/permis-international.jpg' },
  { id: 'reussite-examen', title: "Réussite à l'examen", description: "Démarches suite à la réussite de votre examen du permis de conduire.", image: '/images/reussite-examen.jpg' },
  { id: 'changement-etat-civil', title: "Changement d'état civil", description: "Mise à jour de votre permis suite à un changement d'état civil.", image: '/images/changement-etat-civil.jpg' },
];

export const PERMIS_PAGE_COPY = {
  title: 'Permis de conduire',
  heroDescription: "Toutes vos démarches pour le permis de conduire simplifiées. Notre équipe vous accompagne dans chaque étape de vos démarches administratives.",
  infoTitle: 'Informations importantes',
  documentsTitle: 'Documents nécessaires',
  documents: ['Pièce d\'identité en cours de validité', 'Justificatif de domicile récent', 'Photo d\'identité aux normes', 'Ancien permis (si applicable)'],
  delaysTitle: 'Délais de traitement',
  delays: ['Duplicata : 2 à 3 semaines', 'Échange : 3 à 4 semaines', 'Permis international : 2 semaines', 'Renouvellement : 3 à 4 semaines'],
  ctaTitle: 'Besoin d\'aide pour votre permis de conduire ?',
  ctaDescription: 'Notre équipe d\'experts vous accompagne dans toutes vos démarches liées au permis de conduire.',
  ctaContact: 'Nous contacter',
  ctaCall: 'Appeler maintenant',
  buttonLabel: 'En savoir plus',
} as const;

// ——— Tarifs (page Tarifs) ———
export interface TarifItem {
  service: string;
  prix: string;
  description: string;
}

export const TARIFS: TarifItem[] = [
  { service: 'Changement de titulaire', prix: '25€', description: "Transfert de propriété lors de l'achat" },
  { service: 'Duplicata de carte grise', prix: '20€', description: 'Remplacement en cas de perte, vol ou détérioration' },
  { service: "Changement d'adresse", prix: '20€', description: "Mise à jour de l'adresse sur le certificat d'immatriculation" },
  { service: 'Déclaration de cession', prix: '8€', description: 'Déclaration de cession du véhicule par le vendeur' },
  { service: "Déclaration d'achat professionnel", prix: '8€', description: 'Déclaration pour les professionnels de l\'automobile' },
  { service: 'Certificat provisoire d\'immatriculation WW', prix: '30€', description: 'Certificat provisoire si immatriculation définitive impossible' },
  { service: 'Véhicule de collection', prix: '50€', description: 'Carte grise pour véhicule de collection (plus de 30 ans)' },
  { service: 'Véhicule étranger', prix: '50€', description: 'Immatriculation d\'un véhicule étranger en France' },
  { service: 'Changement de caractéristiques techniques', prix: '50€', description: 'Modification des données du véhicule (poids, puissance, énergie)' },
];

export const TARIFS_PAGE_COPY = {
  title: 'Nos tarifs transparents',
  subtitle: 'Prix clairs et sans surprise pour tous nos services de carte grise. Frais de service et taxes expliqués en détail.',
  tableTitle: 'Tarifs de nos services',
  infoTitle: 'Important : Prix indicatifs',
  infoText: "Ces tarifs incluent nos frais de service. Les taxes ANTS (cheval fiscal) et frais de contrôle technique s'ajoutent selon votre véhicule et situation.",
  estimationTitle: 'Estimation personnalisée',
  estimationText: "Pour connaître le coût exact de votre démarche, contactez-nous avec les informations de votre véhicule (marque, modèle, année, carburant).",
  fraisTitle: 'Frais de service',
  fraisText: 'Nos frais couvrent la gestion complète de votre dossier, la vérification des documents et le suivi administratif.',
  taxesTitle: 'Taxes ANTS',
  taxesText: "Les taxes varient selon le cheval fiscal de votre véhicule et sont fixées par l'administration.",
  chevalFiscal: 'Cheval fiscal Haute-Garonne : 31€',
} as const;

// ——— Page Services (copy réutilisable) ———
export const SERVICES_PAGE_COPY = {
  title: 'Nos services de carte grise',
  subtitle: "Découvrez toutes nos démarches liées à l'immatriculation de votre véhicule. Notre agence est habilitée par le Ministère de l'Intérieur et agréée par le Trésor Public.",
  ctaTitle: 'Prêt à commencer votre démarche ?',
  ctaDescription: "Notre équipe est là pour vous accompagner dans toutes vos démarches de carte grise. Contactez-nous pour un conseil personnalisé.",
  ctaContact: 'Nous contacter',
  ctaCall: 'Appeler maintenant',
} as const;

// ——— SEO (réutilisé dans layout et pages) ———
export const SEO_DEFAULT = {
  siteName: 'SOS Carte Grise – Saint-Gaudens',
  defaultTitle: 'SOS Carte Grise – Saint-Gaudens | Carte grise simple et rapide',
  defaultDescription: 'Carte grise en Comminges, simple & rapide. Sans prise de tête : nous gérons votre dossier de A à Z à Saint-Gaudens. Habilité SIV, traitement rapide.',
  defaultKeywords: 'carte grise, Saint-Gaudens, Comminges, immatriculation, changement titulaire, duplicata',
  canonicalUrl: 'https://soscartegrise-saintgaudens.fr',
} as const;


