import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Mentions légales - SOS Carte Grise – Saint-Gaudens',
  description: 'Mentions légales et informations légales de SOS Carte Grise – Saint-Gaudens.',
};

export default function MentionsLegalesPage() {
  return (
    <main>
      <section className="section-lg bg-white">
        <div className="container-lg mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold text-gray-900 mb-8">
              Mentions légales
            </h1>
            
            <div className="prose prose-lg max-w-none">
              <h2>Éditeur du site</h2>
              <p>
                <strong>SOS Carte Grise – Saint-Gaudens</strong><br />
                17 Boulevard Charles de Gaulle<br />
                31800 Saint-Gaudens<br />
                Téléphone : 06 19 92 33 40<br />
                Email : soscartegrise31@hotmail.com
              </p>

              <h2>Activité</h2>
              <p>
                Agence d'immatriculation et de démarches administratives liées aux véhicules. 
                Services de carte grise, changement de titulaire, duplicata, modifications techniques.
              </p>

              <h2>Hébergement</h2>
              <p>
                Ce site est hébergé par Vercel Inc.<br />
                340 S Lemon Ave #4133<br />
                Walnut, CA 91789<br />
                États-Unis
              </p>

              <h2>Propriété intellectuelle</h2>
              <p>
                L'ensemble de ce site relève de la législation française et internationale 
                sur le droit d'auteur et la propriété intellectuelle. Tous les droits de 
                reproduction sont réservés, y compris pour les documents téléchargeables 
                et les représentations iconographiques et photographiques.
              </p>

              <h2>Responsabilité</h2>
              <p>
                Les informations contenues sur ce site sont aussi précises que possible 
                et le site est périodiquement remis à jour, mais peut toutefois contenir 
                des inexactitudes, des omissions ou des lacunes. Si vous constatez une 
                lacune, erreur ou ce qui parait être un dysfonctionnement, merci de bien 
                vouloir le signaler par email à l'adresse contact@soscartegrise-saintgaudens.fr.
              </p>

              <h2>Liens hypertextes</h2>
              <p>
                Les liens hypertextes mis en place dans le cadre du présent site web 
                en direction d'autres ressources présentes sur le réseau Internet ne sauraient 
                engager la responsabilité de SOS Carte Grise – Saint-Gaudens.
              </p>

              <h2>Cookies</h2>
              <p>
                Le site peut-être amené à vous demander l'acceptation des cookies pour 
                des besoins de statistiques et d'affichage. Un cookie ne nous permet pas 
                de vous identifier ; il constitue simplement un enregistrement de données 
                relatives à la navigation de votre ordinateur sur notre site.
              </p>

              <h2>Droit applicable</h2>
              <p>
                Tout litige en relation avec l'utilisation du site soscartegrise-saintgaudens.fr 
                est soumis au droit français. En dehors des cas où la loi ne le permet pas, 
                il est fait attribution exclusive de juridiction aux tribunaux compétents 
                de Saint-Gaudens.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
