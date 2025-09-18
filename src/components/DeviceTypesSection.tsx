const DeviceTypesSection = () => {
  const deviceTypes = [
    { name: "IPL Systems", icon: "⚡" },
    { name: "Laser Devices", icon: "🔴" },
    { name: "RF Systems", icon: "📡" },
    { name: "Ultrasound", icon: "🔊" },
    { name: "Cryolipolysis", icon: "❄️" },
    { name: "Microneedling", icon: "💉" },
    { name: "CO2 Lasers", icon: "🔥" },
    { name: "Imaging Systems", icon: "📷" }
  ];

  return (
    <section id="devices" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Supported Device Types
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive tracking for every piece of aesthetic equipment in your practice
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {deviceTypes.map((device, index) => (
            <div key={index} className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-xl p-6 text-center card-hover">
              <div className="text-4xl mb-4">{device.icon}</div>
              <h3 className="text-lg font-semibold text-gray-900">{device.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DeviceTypesSection;
