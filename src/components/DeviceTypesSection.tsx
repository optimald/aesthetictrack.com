import { Zap, Circle, Radio, Volume2, Snowflake, Syringe, Flame, Camera } from 'lucide-react';

const DeviceTypesSection = () => {
  const deviceTypes = [
    { name: "IPL Systems", icon: Zap },
    { name: "Laser Devices", icon: Circle },
    { name: "RF Systems", icon: Radio },
    { name: "Ultrasound", icon: Volume2 },
    { name: "Cryolipolysis", icon: Snowflake },
    { name: "Microneedling", icon: Syringe },
    { name: "CO2 Lasers", icon: Flame },
    { name: "Imaging Systems", icon: Camera }
  ];

  return (
    <section id="devices" className="section-padding bg-white">
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
          {deviceTypes.map((device, index) => {
            const IconComponent = device.icon;
            return (
              <div key={index} className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-xl p-6 text-center card-hover">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <IconComponent className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900">{device.name}</h3>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default DeviceTypesSection;
