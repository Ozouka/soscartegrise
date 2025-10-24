'use client';

import { useState, useRef, useEffect } from 'react';
import { Phone, Menu, X, MapPin, ChevronDown, ArrowLeft } from 'lucide-react';
import { BUSINESS } from '@/lib/constants';
import Link from 'next/link';
import Image from 'next/image';

interface DropdownItem {
  name: string;
  href: string;
}

interface NavigationItem {
  name: string;
  href?: string;
  dropdown?: DropdownItem[];
}

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileDrawer, setMobileDrawer] = useState<string | null>(null);
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const prestationsItems: DropdownItem[] = [
    { name: 'Changement de titulaire', href: '/prestations#changement-titulaire' },
    { name: 'Changement d\'adresse', href: '/prestations#changement-adresse' },
    { name: 'Déclaration de cession', href: '/prestations#declaration-cession' },
    { name: 'Demande de duplicata', href: '/prestations#demande-duplicata' },
    { name: 'Cas particulier', href: '/prestations#cas-particulier' },
    { name: 'Déclaration d\'achat professionnel', href: '/prestations#achat-professionnel' },
    { name: 'Carte grise étrangère', href: '/prestations#carte-grise-etrangere' },
    { name: 'Certificat provisoire WW', href: '/prestations#certificat-provisoire-ww' },
  ];

  const permisItems: DropdownItem[] = [
    { name: 'Demande de duplicata', href: '/permis-de-conduire#demande-duplicata' },
    { name: 'Demande de récupération', href: '/permis-de-conduire#demande-recuperation' },
    { name: 'Demande de renouvellement', href: '/permis-de-conduire#demande-renouvellement' },
    { name: 'Changement de permis européen', href: '/permis-de-conduire#permis-europeen' },
    { name: 'Autre demande', href: '/permis-de-conduire#autre-demande' },
    { name: 'Changement de permis étranger', href: '/permis-de-conduire#permis-etranger' },
    { name: 'Demande de permis international', href: '/permis-de-conduire#permis-international' },
    { name: 'Réussite à l\'examen', href: '/permis-de-conduire#reussite-examen' },
    { name: 'Changement d\'état civil', href: '/permis-de-conduire#changement-etat-civil' },
  ];

  const navigation: NavigationItem[] = [
    { name: 'Prestations', dropdown: prestationsItems },
    { name: 'Permis de conduire', dropdown: permisItems },
    { name: 'Plaque d\'immatriculation', href: '/plaque-immatriculation' },
    { name: 'FAQ', href: '/faq' },
    { name: 'Contact', href: '/contact' },
  ];

  // Fermer les dropdowns quand on clique ailleurs
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setActiveDropdown(null);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Gérer l'affichage/masquage du header au scroll
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Si on est en haut de la page, toujours afficher le header
      if (currentScrollY < 10) {
        setIsHeaderVisible(true);
        setLastScrollY(currentScrollY);
        return;
      }

      // Si on scroll vers le bas, cacher le header
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsHeaderVisible(false);
      }
      // Si on scroll vers le haut, afficher le header
      else if (currentScrollY < lastScrollY) {
        setIsHeaderVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    // Throttle pour optimiser les performances
    let ticking = false;
    const throttledHandleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', throttledHandleScroll);
    return () => window.removeEventListener('scroll', throttledHandleScroll);
  }, [lastScrollY]);

  const handleDropdownToggle = (itemName: string) => {
    setActiveDropdown(activeDropdown === itemName ? null : itemName);
  };

  const handleMobileMenuClick = (item: NavigationItem) => {
    if (item.dropdown) {
      setMobileDrawer(item.name);
    } else {
      setIsMenuOpen(false);
    }
  };

  const closeMobileDrawer = () => {
    setMobileDrawer(null);
  };

  const closeMobileMenu = () => {
    setIsMenuOpen(false);
    setMobileDrawer(null);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200 transition-transform duration-300 ease-in-out ${
      isHeaderVisible ? 'translate-y-0' : '-translate-y-full'
    }`}>
      <div className="container-lg mx-auto px-4 bg-white">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <Image src="/logo.webp" alt="SOS Carte Grise logo" width={150} height={80} className='object-contain w-auto h-auto lg:pr-6' />
          </Link>

          {/* Navigation desktop */}
          <nav className="hidden xl:flex items-center gap-8" ref={dropdownRef}>
            {navigation.map((item) => (
              <div key={item.name} className="relative">
                {item.dropdown ? (
                  <div>
                    <button
                      onClick={() => handleDropdownToggle(item.name)}
                      className="flex items-center gap-1 text-gray-700 hover:text-sky-600 transition-colors font-medium"
                    >
                      {item.name}
                      <ChevronDown 
                        className={`w-4 h-4 transition-transform duration-200 ${
                          activeDropdown === item.name ? 'rotate-180' : ''
                        }`} 
                      />
                    </button>
                    
                    {/* Dropdown menu */}
                    <div className={`absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-lg border border-gray-200 transition-all duration-200 ${
                      activeDropdown === item.name 
                        ? 'opacity-100 visible translate-y-0' 
                        : 'opacity-0 invisible -translate-y-2'
                    }`}>
                      <div className="py-2">
                        {item.dropdown.map((dropdownItem) => (
                          <Link
                            key={dropdownItem.name}
                            href={dropdownItem.href}
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-sky-50 hover:text-sky-600 transition-colors"
                            onClick={() => setActiveDropdown(null)}
                          >
                            {dropdownItem.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  <Link
                    href={item.href!}
                    className="text-gray-700 hover:text-sky-600 transition-colors font-medium"
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          {/* CTA Appeler */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href={`tel:${BUSINESS.phoneMain}`}
              className="btn-primary flex items-center gap-2"
            >
              <Phone className="w-4 h-4" />
              {BUSINESS.phoneMain}
            </a>
          </div>

          {/* Menu mobile */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="xl:hidden p-2 text-gray-700 hover:text-sky-600"
            aria-label="Menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Menu mobile */}
        {isMenuOpen && (
          <div className="xl:hidden relative overflow-hidden">
            {/* Menu principal mobile */}
            <div className={`py-4 border-t border-gray-200 transition-transform duration-300 ease-in-out ${
              mobileDrawer ? '-translate-x-full' : 'translate-x-0'
            }`}>
              <nav className="flex flex-col gap-4">
                {navigation.map((item) => (
                  <div key={item.name}>
                    {item.dropdown ? (
                      <button
                        onClick={() => handleMobileMenuClick(item)}
                        className="flex items-center justify-between w-full text-gray-700 hover:text-sky-600 transition-colors font-medium py-2 text-left"
                      >
                        {item.name}
                        <ChevronDown className="w-4 h-4 -rotate-90" />
                      </button>
                    ) : (
                      <Link
                        href={item.href!}
                        className="text-gray-700 hover:text-sky-600 transition-colors font-medium py-2 block"
                        onClick={closeMobileMenu}
                      >
                        {item.name}
                      </Link>
                    )}
                  </div>
                ))}
                <div className="pt-4 border-t border-gray-200">
                  <a
                    href={`tel:${BUSINESS.phoneMain}`}
                    className="btn-primary flex items-center justify-center gap-2 w-full"
                  >
                    <Phone className="w-4 h-4" />
                    Appeler {BUSINESS.phoneMain}
                  </a>
                </div>
              </nav>
            </div>

            {/* Drawer mobile */}
            <div className={`absolute top-0 left-0 w-full bg-white border-t border-gray-200 transition-transform duration-300 ease-in-out ${
              mobileDrawer ? 'translate-x-0' : 'translate-x-full'
            }`}>
              <div className="py-4 px-4">
                <div className="flex items-center gap-3 mb-6">
                  <button
                    onClick={closeMobileDrawer}
                    className="p-2 text-gray-700 hover:text-sky-600 transition-colors"
                  >
                    <ArrowLeft className="w-5 h-5" />
                  </button>
                  <h3 className="text-lg font-semibold text-gray-900">{mobileDrawer || ''}</h3>
                </div>
                
                {mobileDrawer && (
                  <nav className="flex flex-col">
                    {(mobileDrawer === 'Prestations' ? prestationsItems : permisItems).map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="text-gray-700 hover:text-sky-600 hover:bg-sky-50 transition-colors py-4 px-3 border-b border-gray-100 last:border-b-0 rounded-md"
                        onClick={closeMobileMenu}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </nav>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
