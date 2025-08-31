import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Conditions générales d\'utilisation - SOS Carte Grise – Saint-Gaudens',
  description: 'Conditions générales d\'utilisation des services de SOS Carte Grise – Saint-Gaudens.',
};

export default function CGUPage() {
  return (
    <main>
      <section className="section-lg bg-white">
        <div className="container-lg mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold text-gray-900 mb-8">
              Conditions générales d'utilisation
            </h1>
            
            <div className="prose prose-lg max-w-none">
              <h2>Présentation des services</h2>
              <p>
                SOS Carte Grise – Saint-Gaudens propose des services d'immatriculation 
                et de démarches administratives liés aux véhicules. Nos services incluent 
                la gestion de dossiers de carte grise, changement de titulaire, duplicata, 
                et modifications techniques.
              </p>

              <h2>Acceptation des conditions</h2>
              <p>
                L'utilisation de nos services implique l'acceptation pleine et entière 
                des présentes conditions générales d'utilisation. Ces conditions s'appliquent 
                à tous les services fournis par SOS Carte Grise – Saint-Gaudens.
              </p>

              <h2>Services proposés</h2>
              <p>
                Nous nous engageons à fournir nos services avec professionnalisme et 
                dans le respect des délais annoncés. Cependant, les délais de traitement 
                peuvent varier selon la complexité du dossier et la charge de travail 
                de l'administration.
              </p>

              <h2>Obligations du client</h2>
              <p>
                Le client s'engage à :
              </p>
              <ul>
                <li>Fournir des informations exactes et à jour</li>
                <li>Respecter les délais de paiement</li>
                <li>Coopérer dans le traitement de son dossier</li>
                <li>Respecter les obligations légales</li>
              </ul>

              <h2>Tarifs et paiement</h2>
              <p>
                Nos tarifs sont affichés sur le site et peuvent être modifiés. Le paiement 
                s'effectue selon les modalités définies lors de la commande. Les taxes 
                administratives s'ajoutent à nos frais de service.
              </p>

              <h2>Responsabilité</h2>
              <p>
                SOS Carte Grise – Saint-Gaudens s'efforce de fournir des services de 
                qualité mais ne peut garantir l'absence d'erreur. Notre responsabilité 
                est limitée au montant des frais de service perçus.
              </p>

              <h2>Confidentialité</h2>
              <p>
                Nous nous engageons à traiter vos informations personnelles avec la plus 
                grande confidentialité, conformément à notre politique de confidentialité 
                et aux obligations légales.
              </p>

              <h2>Droit applicable</h2>
              <p>
                Les présentes conditions sont soumises au droit français. Tout litige 
                sera soumis aux tribunaux compétents de Saint-Gaudens.
              </p>

              <h2>Modifications</h2>
              <p>
                Nous nous réservons le droit de modifier ces conditions à tout moment. 
                Les modifications prennent effet dès leur publication sur le site.
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
