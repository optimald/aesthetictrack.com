import Navigation from '@/components/Navigation';
import ClientHeroSection from '@/components/ClientHeroSection';
import FeaturesSection from '@/components/FeaturesSection';
import DeviceTypesSection from '@/components/DeviceTypesSection';
import ManagementFeaturesSection from '@/components/ManagementFeaturesSection';
import PainPointsSection from '@/components/PainPointsSection';
import ROISection from '@/components/ROISection';
import ClientCTASection from '@/components/ClientCTASection';
import { GustoAd, BoulevardAd } from '@/components/InlineAds';
import ContactForm from '@/components/ContactForm';
import AdManager from '@/components/AdManager';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <ClientHeroSection />
      <FeaturesSection />
      <GustoAd />
      <DeviceTypesSection />
      <ManagementFeaturesSection />
      <BoulevardAd />
      <PainPointsSection />
      <ROISection />
      <ClientCTASection />
      
      {/* Contact Section */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Get in Touch
            </h2>
            <p className="text-xl text-gray-600">
              Ready to streamline your aesthetic practice? Let&apos;s talk.
            </p>
          </div>
          <ContactForm />
        </div>
      </section>
      
      <AdManager />
    </div>
  );
}
