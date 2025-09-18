import { QrCode, Building2, Wrench, Users, FileText, Plug, BarChart3, Cloud, Smartphone } from 'lucide-react';
import { trackSectionView } from '@/lib/mixpanel';

const ManagementFeaturesSection = () => {
  // Track section view
  trackSectionView('Management Features Section');

  const features = [
    {
      title: "QR Code Asset Tracking",
      description: "Generate and scan QR codes for instant equipment identification and history access",
      icon: QrCode
    },
    {
      title: "Multi-Location Management",
      description: "Track equipment across multiple clinic locations with transfer history",
      icon: Building2
    },
    {
      title: "Maintenance & Service",
      description: "Schedule preventive maintenance, track repairs, and manage service providers",
      icon: Wrench
    },
    {
      title: "Staff Training Management",
      description: "Track certifications, training hours, and equipment competencies",
      icon: Users
    },
    {
      title: "Equipment Documentation",
      description: "Store manuals, warranties, and compliance documentation digitally",
      icon: FileText
    },
    {
      title: "Applicator & Accessories",
      description: "Track expensive applicators, consumables, and shot counts",
      icon: Plug
    },
    {
      title: "Analytics & Reporting",
      description: "Comprehensive insights on utilization, costs, and performance metrics",
      icon: BarChart3
    },
    {
      title: "Cloud-Based Platform",
      description: "Secure, HIPAA-compliant cloud storage with automatic backups",
      icon: Cloud
    },
    {
      title: "Mobile Access",
      description: "Full functionality on tablets and smartphones for on-the-go management",
      icon: Smartphone
    }
  ];

  return (
    <section id="locations" className="section-padding bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Comprehensive Management Features
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Everything you need to manage your aesthetic equipment and staff training
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg card-hover">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <IconComponent className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ManagementFeaturesSection;
