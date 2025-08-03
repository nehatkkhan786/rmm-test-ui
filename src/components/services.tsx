import {
  BatteryFull,
  Mic,
  MonitorSmartphone,
  PanelRightOpen,
  PlugZap,
  SmartphoneNfc,
  Volume2
} from 'lucide-react';

const services = [
  { name: 'Screen', icon: <MonitorSmartphone className="w-10 h-10 text-white" /> },
  { name: 'Battery', icon: <BatteryFull className="w-10 h-10 text-white" /> },
  { name: 'Speakers', icon: <Volume2 className="w-10 h-10 text-white" /> },
  { name: 'Charging Port', icon: <PlugZap className="w-10 h-10 text-white" /> },
  { name: 'Mic', icon: <Mic className="w-10 h-10 text-white" /> },
  { name: 'Back Panel', icon: <PanelRightOpen className="w-10 h-10 text-white" /> },
  { name: 'Proximity Sensor', icon: <SmartphoneNfc className="w-10 h-10 text-white" /> },
];

const Services = () => {
  return (
    <section className="py-10 px-4 sm:px-8">
      <h2 className="text-2xl font-bold mb-6 text-left">Services</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-4">
        {services.map((service, idx) => (
          <div
            key={idx}
            className="flex flex-col items-center justify-center p-6 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition duration-300 cursor-pointer"
          >
            {service.icon}
            <p className="mt-4 font-semibold text-center ">{service.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
