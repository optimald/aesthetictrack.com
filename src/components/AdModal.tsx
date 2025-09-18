'use client';

import { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { trackEvent } from '@/lib/mixpanel';

interface AdModalProps {
  isOpen: boolean;
  onClose: () => void;
  adType: 'gusto' | 'boulevard';
}

const AdModal = ({ isOpen, onClose, adType }: AdModalProps) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setIsVisible(true);
      trackEvent('Ad Modal Opened', {
        ad_type: adType,
        modal_type: 'popup_ad'
      });
    }
  }, [isOpen, adType]);

  const handleClose = () => {
    setIsVisible(false);
    setTimeout(onClose, 300); // Allow animation to complete
    trackEvent('Ad Modal Closed', {
      ad_type: adType,
      modal_type: 'popup_ad'
    });
  };

  const handleAdClick = (action: string) => {
    trackEvent('Ad Clicked', {
      ad_type: adType,
      action,
      modal_type: 'popup_ad'
    });
  };

  if (!isOpen) return null;

  return (
    <div className={`fixed inset-0 z-50 flex items-center justify-center transition-opacity duration-300 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black bg-opacity-50"
        onClick={handleClose}
      />
      
      {/* Modal */}
      <div className={`relative bg-white rounded-lg shadow-xl max-w-md w-full mx-4 transform transition-transform duration-300 ${isVisible ? 'scale-100' : 'scale-95'}`}>
        {/* Close button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Ad content */}
        <div className="p-6">
          {adType === 'gusto' ? (
            <div className="text-center">
              <div className="mb-4">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Simplify Your HR & Payroll
                </h3>
                <p className="text-gray-600 text-sm">
                  Gusto makes payroll, benefits, and HR simple for small businesses
                </p>
              </div>
              <div className="space-y-3">
                <a
                  href="https://get.gusto.com/q0duhc39sen7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-green-600 hover:bg-green-700 text-white py-3 px-4 rounded-lg font-semibold transition-colors"
                  onClick={() => handleAdClick('primary_cta')}
                >
                  Get Started with Gusto
                </a>
                <p className="text-xs text-gray-500">
                  Trusted by 300,000+ businesses
                </p>
              </div>
            </div>
          ) : (
            <div className="text-center">
              <div className="mb-4">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Medspa Software by Boulevard
                </h3>
                <p className="text-gray-600 text-sm">
                  Smarter than your EMR - Built for client experience
                </p>
              </div>
              <div className="space-y-3">
                <a
                  href="https://try.joinblvd.com/aesthetictrackcom"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-4 rounded-lg font-semibold transition-colors"
                  onClick={() => handleAdClick('primary_cta')}
                >
                  Try Boulevard
                </a>
                <p className="text-xs text-gray-500">
                  Client Experience Platform for Medspas
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdModal;
