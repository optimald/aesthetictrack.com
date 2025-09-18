'use client';

import Link from 'next/link';
import { trackCTA, trackButtonClick, trackSectionView } from '@/lib/mixpanel';
import { useEffect } from 'react';

const ClientCTASection = () => {
  useEffect(() => {
    trackSectionView('CTA Section');
  }, []);

  return (
    <section id="pricing" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Ready to Save $50K+ This Year?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Join leading aesthetic clinics using our platform to reduce costs, eliminate risks, and boost efficiency
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Link
              href="#pricing"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-200 transform hover:scale-105 shadow-lg"
              onClick={() => {
                trackCTA('View Pricing Plans', 'primary_button', { location: 'footer_cta' });
                trackButtonClick('View Pricing Plans - Footer', 'cta');
              }}
            >
              View Pricing Plans
            </Link>
            <Link
              href="#demo"
              className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-200 transform hover:scale-105"
              onClick={() => {
                trackCTA('Try Live Demo', 'secondary_button', { location: 'footer_cta' });
                trackButtonClick('Try Live Demo - Footer', 'cta');
              }}
            >
              Try Live Demo
            </Link>
          </div>

          {/* Footer */}
          <div className="border-t pt-8">
            <p className="text-gray-500 text-sm">
              Powered by{' '}
              <span className="font-semibold text-gray-700">optimal.dev</span>
            </p>
            <p className="text-gray-400 text-xs mt-1">
              AI-accelerated software, engineered for results
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientCTASection;
