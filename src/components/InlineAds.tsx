'use client';

import { trackEvent } from '@/lib/mixpanel';
import Image from 'next/image';

const GustoAd = () => {
  const handleAdClick = (action: string) => {
    trackEvent('Ad Clicked', {
      ad_type: 'gusto',
      action,
      location: 'inline_content'
    });
  };

  return (
    <div className="my-8 flex justify-center">
      <a
        href="https://get.gusto.com/q0duhc39sen7"
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => handleAdClick('display_ad')}
        className="block hover:opacity-90 transition-opacity"
      >
        <Image
          src="/ads/gusto/AwarenessAds_Characters_300x250.png"
          alt="Gusto - Simplify Your HR & Payroll"
          width={300}
          height={250}
          className="rounded-lg shadow-lg"
        />
      </a>
    </div>
  );
};

const BoulevardAd = () => {
  const handleAdClick = (action: string) => {
    trackEvent('Ad Clicked', {
      ad_type: 'boulevard',
      action,
      location: 'inline_content'
    });
  };

  return (
    <div className="my-8 flex justify-center">
      <a
        href="https://try.joinblvd.com/aesthetictrackcom"
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => handleAdClick('display_ad')}
        className="block hover:opacity-90 transition-opacity"
      >
        <Image
          src="/ads/boulevard/Affiliate Banner - Medspa - 300x250.jpg"
          alt="Boulevard - Medspa Software"
          width={300}
          height={250}
          className="rounded-lg shadow-lg"
        />
      </a>
    </div>
  );
};

export { GustoAd, BoulevardAd };
