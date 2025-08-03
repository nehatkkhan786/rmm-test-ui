import {
  FileCheck,
  Handshake,
  ShieldCheck,
  Smartphone,
  Users,
  Wrench
} from "lucide-react";

const features = [
  {
    icon: <Wrench className="text-indigo-600 w-8 h-8" />,
    title: "Premium Repair",
    description: "Top quality certified parts"
  },
  {
    icon: <Smartphone className="text-indigo-600 w-8 h-8" />,
    title: "Instant Mobile Repair",
    description: "On-the-spot service at store or home"
  },
  {
    icon: <ShieldCheck className="text-indigo-600 w-8 h-8" />,
    title: "Physical Protection Warranty",
    description: "1 Month free screen replacement"
  },
  {
    icon: <Handshake className="text-indigo-600 w-8 h-8" />,
    title: "6 Months Warranty",
    description: "Hassle-free 6-month warranty on parts"
  },
  {
    icon: <Users className="text-indigo-600 w-8 h-8" />,
    title: "Skilled Technicians",
    description: "Trained & Qualified Professionals"
  },
  {
    icon: <FileCheck className="text-indigo-600 w-8 h-8" />,
    title: "Guaranteed Safety",
    description: "Total Device & Data Security"
  }
];

export default function WhyUs() {
  return (
    <section className=" py-12"  style={{
        background: 'linear-gradient(90deg, rgba(3, 47, 66, 1) 0%, rgba(87, 199, 133, 1) 50%, rgba(237, 221, 83, 1) 100%)'
      }}>
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-whitepm run decoration-violet-50 mb-10 text-white ">Why Choose Us</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex items-start gap-4 bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all text-left"
            >
              <div className="shrink-0">{feature.icon}</div>
              <div>
                <h4 className="font-semibold text-lg text-gray-900">
                  {feature.title}
                </h4>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
