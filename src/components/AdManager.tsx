'use client';

import { useState, useEffect } from 'react';
import AdModal from './AdModal';

const AdManager = () => {
  const [showModal, setShowModal] = useState(false);
  const [adType, setAdType] = useState<'gusto' | 'boulevard'>('gusto');
  const [hasShownAd, setHasShownAd] = useState(false);

  useEffect(() => {
    // Check if we've already shown an ad in this session
    const adShown = sessionStorage.getItem('adShown');
    if (adShown) {
      setHasShownAd(true);
      return;
    }

    // Show ad after 30 seconds
    const timer = setTimeout(() => {
      if (!hasShownAd) {
        // Randomly choose between Gusto and Boulevard
        const randomAd = Math.random() < 0.5 ? 'gusto' : 'boulevard';
        setAdType(randomAd);
        setShowModal(true);
        setHasShownAd(true);
        sessionStorage.setItem('adShown', 'true');
      }
    }, 30000); // 30 seconds

    return () => clearTimeout(timer);
  }, [hasShownAd]);

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <AdModal
      isOpen={showModal}
      onClose={handleCloseModal}
      adType={adType}
    />
  );
};

export default AdManager;
