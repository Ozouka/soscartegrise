import React from 'react';
import MapFrance from './icons/MapFrance';
import ArrowDownTray from './icons/ArrowDownTray';

const MapWithDocs: React.FC = () => {
  return (
    <section className="section bg-gray-50">
      <div className="container-lg mx-auto px-4">
        <div className="flex flex-col-reverse gap-8 lg:flex-row lg:gap-12 items-center">
          {/* Carte SVG de la France */}
         <div className='lg:w-1/2'><MapFrance className='w-full h-auto' /></div>
          {/* Titre et description */}
          <div className='flex flex-col-reverse gap-8 lg:w-1/2'>
            <div className="text-center lg:text-left order-2 lg:order-1">
              <h2 className="text-3xl md:text-4xl font-bold text-sos-blue mb-6 uppercase">
                Prix du cheval fiscal
              </h2>
              <p className="text-xl text-gray-600 mb-4">
                Le prix du cheval fiscal varie selon les régions. Découvrez le tarif applicable dans votre région pour calculer le coût de votre carte grise.
              </p>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-sos-blue mb-6 uppercase">
                Documents à télécharger
              </h3>
              <ul className="flex flex-col gap-2">
                <li className='style-none'>
                  <a href="/assets/sos-carte-grise-31-carte-grise-cession.pdf" target="_blank" rel="noopener noreferrer" className='flex items-center gap-2 text-lg hover:text-sos-blue transition-colors'>
                    <ArrowDownTray /> Certificat de cession (CERFA 15776*01)
                  </a>
                </li>
                <li className='style-none'>
                  <a href="/assets/sos-carte-grise-31-CERFA_DEMANDE_D_IMMATRICULATION.pdf" target="_blank" rel="noopener noreferrer" className='flex items-center gap-2 text-lg hover:text-sos-blue transition-colors'>
                    <ArrowDownTray /> Demande de certificat d'immatriculation (CERFA 13750*07)
                  </a>
                </li>
                <li className='style-none'>
                  <a href="/assets/sos-carte-grise-31-mandat.pdf" target="_blank" rel="noopener noreferrer" className='flex items-center gap-2 text-lg hover:text-sos-blue transition-colors'>
                    <ArrowDownTray /> MANDAT (CERFA 13757*03)
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Section d'appel à l'action */}  
        <div className="mt-12 text-center">
          <p className="text-lg text-gray-700 mb-6">
            Besoin d'aide pour calculer le prix de votre carte grise ?
          </p>
          <a href="/contact" className="btn-primary text-lg px-8 py-4">
            Contactez-nous
          </a>
        </div>
      </div>
    </section>
  );
};

export default MapWithDocs;
