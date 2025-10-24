import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Politique de confidentialité - SOS Carte Grise – Saint-Gaudens',
  description: 'Politique de confidentialité et protection des données personnelles de SOS Carte Grise – Saint-Gaudens.',
};

export default function PolitiqueConfidentialitePage() {
  return (
    <main>
      <section className="section-lg bg-white">
        <div className="container-lg mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold text-gray-900 mb-8">
              Politique de confidentialité
            </h1>
            
            <div className="prose prose-lg max-w-none">
              <h2>Protection de vos données personnelles</h2>
              <p>
                SOS Carte Grise – Saint-Gaudens s'engage à protéger la vie privée de ses 
                utilisateurs et à traiter leurs données personnelles dans le respect du 
                Règlement Général sur la Protection des Données (RGPD) et de la loi 
                Informatique et Libertés.
              </p>

              <h2>Collecte des données</h2>
              <p>
                Nous collectons uniquement les données personnelles nécessaires à la 
                réalisation de nos services :
              </p>
              <ul>
                <li>Nom et prénom</li>
                <li>Adresse email</li>
                <li>Numéro de téléphone</li>
                <li>Adresse postale</li>
                <li>Informations relatives aux véhicules</li>
              </ul>

              <h2>Utilisation des données</h2>
              <p>
                Vos données personnelles sont utilisées exclusivement pour :
              </p>
              <ul>
                <li>Traiter vos demandes de carte grise</li>
                <li>Vous contacter concernant votre dossier</li>
                <li>Répondre à vos questions</li>
                <li>Améliorer nos services</li>
              </ul>

              <h2>Conservation des données</h2>
              <p>
                Vos données sont conservées pendant la durée nécessaire au traitement 
                de votre dossier, puis supprimées ou archivées conformément aux obligations 
                légales de conservation.
              </p>

              <h2>Vos droits</h2>
              <p>
                Conformément au RGPD, vous disposez des droits suivants :
              </p>
              <ul>
                <li>Droit d'accès à vos données</li>
                <li>Droit de rectification</li>
                <li>Droit à l'effacement</li>
                <li>Droit à la portabilité</li>
                <li>Droit d'opposition au traitement</li>
              </ul>

              <h2>Contact DPO</h2>
              <p>
                Pour toute question relative à la protection de vos données personnelles, 
                vous pouvez nous contacter à l'adresse email : 
                soscartegrise31@hotmail.com
              </p>

              <h2>Cookies</h2>
              <p>
                Notre site utilise des cookies techniques nécessaires à son fonctionnement. 
                Ces cookies ne collectent aucune information personnelle et sont automatiquement 
                supprimés à la fermeture de votre navigateur.
              </p>

              <h2>Modifications</h2>
              <p>
                Cette politique de confidentialité peut être mise à jour. La version la plus 
                récente est toujours disponible sur cette page avec la date de dernière modification.
              </p>

              <p className="text-sm text-gray-500 mt-8">
                Dernière mise à jour : {new Date().toLocaleDateString('fr-FR')}
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
