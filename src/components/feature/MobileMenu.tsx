import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const menuItems = [
    { label: 'Startseite', href: '/', icon: 'ri-home-line' },
    { label: 'Dienstleistungen', href: '/#services', icon: 'ri-service-line' },
    { label: 'Über uns', href: '/#about', icon: 'ri-team-line' },
    { label: 'Kontakt', href: '/#contact', icon: 'ri-phone-line' },
  ];

  const services = [
    { label: 'Brennholz', href: '/brennholz', icon: 'ri-fire-line' },
    { label: 'Baumfällarbeiten', href: '/baumfaellarbeiten', icon: 'ri-scissors-cut-line' },
    { label: 'Mulcharbeiten', href: '/mulcharbeiten', icon: 'ri-leaf-line' },
    { label: 'Abbrucharbeiten', href: '/abbrucharbeiten', icon: 'ri-hammer-line' },
    { label: 'Malerarbeiten', href: '/malerarbeiten', icon: 'ri-brush-line' },
    { label: 'Dachdeckerarbeiten', href: '/dachdeckerarbeiten', icon: 'ri-home-line' },
    { label: 'Lagerboxen', href: '/schuettgutboxen', icon: 'ri-archive-line' },
    { label: 'Umzüge', href: '/umzuege', icon: 'ri-truck-line' },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
            onClick={onClose}
          />

          {/* Menu */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ 
              type: 'spring', 
              damping: 25, 
              stiffness: 200,
              duration: 0.5 
            }}
            className="fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-white shadow-2xl z-50 overflow-y-auto"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-200">
              <img 
                src="/images/company-logo.png"
                alt="Vey Unternehmensgruppe Logo"
                className="h-10 w-auto"
              />
              <button
                onClick={onClose}
                className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
              >
                <i className="ri-close-line text-xl text-gray-600"></i>
              </button>
            </div>

            {/* Navigation */}
            <div className="p-6">
              <nav className="space-y-2">
                {menuItems.map((item, index) => (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 + 0.2 }}
                  >
                    <Link
                      to={item.href}
                      onClick={onClose}
                      className="flex items-center space-x-3 p-3 rounded-lg hover:bg-orange-50 hover:text-orange-600 transition-colors group"
                    >
                      <div className="w-8 h-8 flex items-center justify-center bg-gray-100 rounded-lg group-hover:bg-orange-100 transition-colors">
                        <i className={`${item.icon} text-gray-600 group-hover:text-orange-600`}></i>
                      </div>
                      <span className="font-medium text-gray-800 group-hover:text-orange-600">
                        {item.label}
                      </span>
                    </Link>
                  </motion.div>
                ))}
              </nav>

              {/* Services Section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="mt-8"
              >
                <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-4 px-3">
                  Unsere Dienstleistungen
                </h3>
                <div className="space-y-1">
                  {services.map((service, index) => (
                    <motion.div
                      key={service.href}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 + 0.7 }}
                    >
                      <Link
                        to={service.href}
                        onClick={onClose}
                        className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-50 transition-colors group"
                      >
                        <div className="w-6 h-6 flex items-center justify-center">
                          <i className={`${service.icon} text-sm text-gray-400 group-hover:text-orange-500`}></i>
                        </div>
                        <span className="text-sm text-gray-600 group-hover:text-gray-800">
                          {service.label}
                        </span>
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Contact Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.0 }}
                className="mt-8 pt-6 border-t border-gray-200"
              >
                <a
                  href="tel:+4917671085234"
                  className="flex items-center justify-center space-x-2 w-full bg-orange-600 text-white px-6 py-4 rounded-xl font-semibold hover:bg-orange-700 transition-colors shadow-lg"
                >
                  <i className="ri-phone-line text-lg"></i>
                  <span>Jetzt anrufen</span>
                </a>
                
                <div className="mt-4 text-center">
                  <p className="text-xs text-gray-500 mb-2">Öffnungszeiten</p>
                  <p className="text-sm text-gray-700">Mo-Fr: 8:00-18:00 Uhr</p>
                  <p className="text-sm text-gray-700">Sa: 09:00-14:00 Uhr</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
