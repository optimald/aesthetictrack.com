import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import FeaturesSection from '@/components/FeaturesSection';
import DeviceTypesSection from '@/components/DeviceTypesSection';
import ManagementFeaturesSection from '@/components/ManagementFeaturesSection';
import PainPointsSection from '@/components/PainPointsSection';
import ROISection from '@/components/ROISection';
import CTASection from '@/components/CTASection';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <FeaturesSection />
      <DeviceTypesSection />
      <ManagementFeaturesSection />
      <PainPointsSection />
      <ROISection />
      <CTASection />
    </div>
  );
}
