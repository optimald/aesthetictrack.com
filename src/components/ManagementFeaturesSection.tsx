const ManagementFeaturesSection = () => {
  const features = [
    {
      title: "QR Code Asset Tracking",
      description: "Generate and scan QR codes for instant equipment identification and history access",
      icon: "📱"
    },
    {
      title: "Multi-Location Management",
      description: "Track equipment across multiple clinic locations with transfer history",
      icon: "🏢"
    },
    {
      title: "Maintenance & Service",
      description: "Schedule preventive maintenance, track repairs, and manage service providers",
      icon: "🔧"
    },
    {
      title: "Staff Training Management",
      description: "Track certifications, training hours, and equipment competencies",
      icon: "👥"
    },
    {
      title: "Equipment Documentation",
      description: "Store manuals, warranties, and compliance documentation digitally",
      icon: "📄"
    },
    {
      title: "Applicator & Accessories",
      description: "Track expensive applicators, consumables, and shot counts",
      icon: "🔌"
    },
    {
      title: "Analytics & Reporting",
      description: "Comprehensive insights on utilization, costs, and performance metrics",
      icon: "📊"
    },
    {
      title: "Cloud-Based Platform",
      description: "Secure, HIPAA-compliant cloud storage with automatic backups",
      icon: "☁️"
    },
    {
      title: "Mobile Access",
      description: "Full functionality on tablets and smartphones for on-the-go management",
      icon: "📱"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
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
          {features.map((feature, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-lg card-hover">
              <div className="text-3xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ManagementFeaturesSection;
