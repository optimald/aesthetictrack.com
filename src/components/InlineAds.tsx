'use client';

import { trackEvent } from '@/lib/mixpanel';

const GustoAd = () => {
  const handleAdClick = (action: string) => {
    trackEvent('Ad Clicked', {
      ad_type: 'gusto',
      action,
      location: 'inline_content'
    });
  };

  return (
    <div className="bg-gradient-to-r from-green-50 to-green-100 border border-green-200 rounded-lg p-6 my-8">
      <div className="flex flex-col md:flex-row items-center gap-4">
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            Simplify Your HR & Payroll with Gusto
          </h3>
          <p className="text-gray-600 text-sm mb-3">
            Trusted by 300,000+ businesses. Handle payroll, benefits, and HR in one place.
          </p>
          <div className="flex flex-wrap gap-2 text-xs text-gray-500">
            <span>✓ Automated Payroll</span>
            <span>✓ Benefits Management</span>
            <span>✓ HR Tools</span>
            <span>✓ Tax Filing</span>
          </div>
        </div>
        <div className="flex-shrink-0">
          <a
            href="https://get.gusto.com/q0duhc39sen7"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-lg font-semibold text-sm transition-colors"
            onClick={() => handleAdClick('primary_cta')}
          >
            Get Started Free
          </a>
        </div>
      </div>
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
    <div className="bg-gradient-to-r from-blue-50 to-blue-100 border border-blue-200 rounded-lg p-6 my-8">
      <div className="flex flex-col md:flex-row items-center gap-4">
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            Medspa Software by Boulevard
          </h3>
          <p className="text-gray-600 text-sm mb-3">
            Smarter than your EMR. Built for client experience and medspa operations.
          </p>
          <div className="flex flex-wrap gap-2 text-xs text-gray-500">
            <span>✓ Client Experience Platform</span>
            <span>✓ Scheduling & Booking</span>
            <span>✓ Payment Processing</span>
            <span>✓ Marketing Tools</span>
          </div>
        </div>
        <div className="flex-shrink-0">
          <a
            href="https://try.joinblvd.com/aesthetictrackcom"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg font-semibold text-sm transition-colors"
            onClick={() => handleAdClick('primary_cta')}
          >
            Try Boulevard
          </a>
        </div>
      </div>
    </div>
  );
};

export { GustoAd, BoulevardAd };
