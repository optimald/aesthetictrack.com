const ROISection = () => {
  const metrics = [
    { value: "40%", label: "Reduction in Maintenance Costs", color: "text-green-400" },
    { value: "75%", label: "Faster Equipment Lookup", color: "text-blue-300" },
    { value: "90%", label: "Reduction in Lost Equipment", color: "text-purple-300" },
    { value: "100%", label: "Compliance Achievement Rate", color: "text-green-400" },
    { value: "$50K+", label: "Annual Savings Per Clinic", color: "text-yellow-300" },
    { value: "17", label: "Devices Tracked", color: "text-indigo-300" },
    { value: "25+", label: "Applicators Managed", color: "text-pink-300" },
    { value: "99.9%", label: "Uptime Guarantee", color: "text-green-400" }
  ];

  return (
    <section className="section-padding bg-gradient-to-br from-blue-600 to-purple-700 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Return on Investment
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Typical clinics see 400-800% ROI within the first year through cost savings and efficiency gains
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {metrics.map((metric, index) => (
            <div key={index} className="text-center">
              <div className={`text-4xl md:text-5xl font-bold mb-2 ${metric.color}`}>
                {metric.value}
              </div>
              <div className="text-blue-100 text-sm md:text-base">
                {metric.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ROISection;
