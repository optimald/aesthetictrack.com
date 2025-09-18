'use client';

import { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { trackEvent } from '@/lib/mixpanel';
import Image from 'next/image';

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
              <a
                href="https://get.gusto.com/q0duhc39sen7"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => handleAdClick('modal_ad')}
                className="block hover:opacity-90 transition-opacity"
              >
                <Image
                  src="/ads/gusto/AwarenessAds_Characters_300x250.png"
                  alt="Gusto - Simplify Your HR & Payroll"
                  width={300}
                  height={250}
                  className="rounded-lg mx-auto"
                />
              </a>
            </div>
          ) : (
            <div className="text-center">
              <a
                href="https://try.joinblvd.com/aesthetictrackcom"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => handleAdClick('modal_ad')}
                className="block hover:opacity-90 transition-opacity"
              >
                <Image
                  src="/ads/boulevard/Affiliate Banner - Medspa - 300x250.jpg"
                  alt="Boulevard - Medspa Software"
                  width={300}
                  height={250}
                  className="rounded-lg mx-auto"
                />
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdModal;
