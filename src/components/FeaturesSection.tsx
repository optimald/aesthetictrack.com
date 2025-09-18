import { DollarSign, Shield, Users } from 'lucide-react';

const FeaturesSection = () => {
  const features = [
    {
      title: "Protect Revenue & Client Trust",
      icon: DollarSign,
      benefits: [
        "Prevent appointment cancellations from breakdowns",
        "Maintain warranty coverage with proper maintenance",
        "Reduce high-cost emergency repairs by 75%",
        "Extend expensive equipment lifespan significantly"
      ]
    },
    {
      title: "Ensure Safety & Compliance",
      icon: Shield,
      benefits: [
        "Maintain critical calibration schedules",
        "Automated regulatory documentation",
        "Staff certification tracking & renewals",
        "Insurance requirement compliance"
      ]
    },
    {
      title: "Reduce Staff Stress & Turnover",
      icon: Users,
      benefits: [
        "Eliminate equipment-related frustrations",
        "Streamlined training & documentation",
        "Better workflow coordination & scheduling",
        "Improved job satisfaction & retention"
      ]
    }
  ];

  return (
    <section className="section-padding bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Why Aesthetic Clinics Choose Us
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Eliminate costly downtime, ensure compliance, and maximize equipment ROI
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div key={index} className="bg-white rounded-xl p-8 shadow-lg card-hover">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                  <IconComponent className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">{feature.title}</h3>
                <ul className="space-y-3">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-start">
                      <span className="text-green-500 mr-3 mt-1 text-lg">•</span>
                      <span className="text-gray-700">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
