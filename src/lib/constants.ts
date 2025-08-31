
export const BUSINESS = {
  name: "SOS Carte Grise – Saint-Gaudens",
  street: "17 Boulevard Charles de Gaulle",
  postalCode: "31800",
  city: "Saint-Gaudens",
  note: "En face de La Poste",
  phoneMain: "+33 6 19 92 33 40",
  phoneDesk: "+33 5 81 66 69 00",
  email: "contact@soscartegrise-saintgaudens.fr",
  hours: [
    { day: "Lundi", am: "08:30–12:00", pm: "14:00–18:00" },
    { day: "Mardi", am: "08:30–12:00", pm: "14:00–18:00" },
    { day: "Mercredi", am: "08:30–12:00", pm: "14:00–18:00" },
    { day: "Jeudi", am: "08:30–12:00", pm: "14:00–18:00" },
    { day: "Vendredi", am: "08:30–12:00", pm: "14:00–18:00" },
  ],
  geo: { lat: 43.107, lng: 0.723 },
  social: { facebook: "https://www.facebook.com/soscartegrise31800/" }
};

export const SERVICES = [
  {
    id: "changement-titulaire",
    title: "Changement de titulaire",
    description: "Transfert de propriété lors de l'achat d'un véhicule",
    documents: ["Certificat de cession", "Justificatif d'identité", "Justificatif de domicile", "Contrôle technique si nécessaire"],
    delay: "24-48h",
    price: "À partir de 89€"
  },
  {
    id: "duplicata",
    title: "Duplicata de carte grise",
    description: "Remplacement en cas de perte, vol ou détérioration",
    documents: ["Déclaration de perte/vol", "Justificatif d'identité", "Justificatif de domicile"],
    delay: "24-48h",
    price: "À partir de 79€"
  },
  {
    id: "changement-adresse",
    title: "Changement d'adresse",
    description: "Mise à jour de l'adresse sur le certificat d'immatriculation",
    documents: ["Justificatif de domicile", "Carte grise actuelle"],
    delay: "24-48h",
    price: "À partir de 69€"
  },
  {
    id: "cession",
    title: "Cession de véhicule",
    description: "Vente de véhicule avec transfert de propriété",
    documents: ["Certificat de cession", "Justificatif d'identité", "Justificatif de domicile"],
    delay: "24-48h",
    price: "À partir de 89€"
  },
  {
    id: "ww-provisoire",
    title: "WW provisoire",
    description: "Immatriculation provisoire pour véhicule en transit",
    documents: ["Certificat de conformité", "Justificatif d'identité", "Justificatif de domicile"],
    delay: "24-48h",
    price: "À partir de 99€"
  },
  {
    id: "import-coc",
    title: "Import/COC",
    description: "Immatriculation de véhicule importé",
    documents: ["Certificat de conformité", "Certificat de douane", "Justificatif d'identité", "Justificatif de domicile"],
    delay: "48-72h",
    price: "À partir de 129€"
  }
];

export const FAQ_ITEMS = [
  {
    question: "Quels sont les délais de traitement ?",
    answer: "La plupart de nos démarches sont traitées sous 24-48h. Les cas complexes (import, modifications techniques) peuvent prendre 48-72h."
  },
  {
    question: "Quels documents sont nécessaires ?",
    answer: "Les documents varient selon la démarche. Consultez notre page services pour la liste complète ou contactez-nous directement."
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
    answer: "Nous sommes ouverts du lundi au vendredi de 8h30 à 12h et de 14h à 18h, en face de La Poste à Saint-Gaudens."
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



