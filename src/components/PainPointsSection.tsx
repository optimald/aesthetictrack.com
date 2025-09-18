import { trackSectionView } from '@/lib/mixpanel';

const PainPointsSection = () => {
  // Track section view
  trackSectionView('Pain Points Section');

  const painPoints = [
    {
      title: "Equipment Downtime Disrupts Revenue",
      description: "Unexpected malfunctions cancel appointments, damage client trust, and require specialized knowledge that's not always available in-house."
    },
    {
      title: "Maintenance Overlooked in Busy Practices",
      description: "Critical calibration and maintenance gets delayed, risking patient safety, warranty coverage, and regulatory compliance."
    },
    {
      title: "Staff Training & Documentation Gaps",
      description: "Inadequate training leads to equipment misuse and safety risks. Poor documentation jeopardizes compliance and insurance coverage."
    }
  ];

  const solutions = [
    {
      title: "Proactive Maintenance Scheduling",
      description: "Automated alerts ensure maintenance never gets overlooked, maintaining warranty coverage and preventing unexpected breakdowns."
    },
    {
      title: "Staff Training & Certification Tracking",
      description: "Ensure every team member is properly trained and certified. Automated documentation maintains compliance and reduces liability."
    },
    {
      title: "Complete Equipment & Inventory Management",
      description: "Track devices, disposables, and environmental conditions. Coordinate staff schedules with equipment availability seamlessly."
    }
  ];

  return (
    <section className="section-padding bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Pain Points */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
              Research-Proven Pain Points Plaguing Aesthetic Practices
            </h2>
            <div className="space-y-8">
              {painPoints.map((point, index) => (
                <div key={index} className="border-l-4 border-red-500 pl-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{point.title}</h3>
                  <p className="text-gray-600">{point.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Solutions */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
              Proven Solutions That Address These Issues
            </h2>
            <div className="space-y-8">
              {solutions.map((solution, index) => (
                <div key={index} className="border-l-4 border-green-500 pl-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{solution.title}</h3>
                  <p className="text-gray-600">{solution.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PainPointsSection;
