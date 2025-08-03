import { 
  CalendarCheck, 
  PhoneIncoming, 
  Smartphone, 
  MailCheck, 
  CheckCircle 
} from 'lucide-react';

export const HowItWorks = () => {
  const steps = [
    {
      icon: <CalendarCheck className="h-6 w-6" />,
      title: "Book Request",
      description: "Quick online booking in 30 seconds"
    },
    {
      icon: <PhoneIncoming className="h-6 w-6" />,
      title: "Get Call Back",
      description: "Instant confirmation from our team"
    },
    {
      icon: <Smartphone className="h-6 w-6" />,
      title: "Submit Phone",
      description: "Drop-off or free pickup service"
    },
    {
      icon: <MailCheck className="h-6 w-6" />,
      title: "Repair Updates",
      description: "Real-time SMS notifications"
    },
    {
      icon: <CheckCircle className="h-6 w-6" />,
      title: "Collect Phone",
      description: "Fast return with warranty"
    }
  ];

  return (
    <section className="py-16 px-4 bg-gradient-to-br from-blue-500 to-indigo-600">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
            Our 5-Step Repair Process
          </h2>
          <p className="text-blue-100 max-w-2xl mx-auto">
            Simple, transparent, and hassle-free
          </p>
        </div>

        <div className="relative">
          {/* Progress line */}
          <div className="hidden md:block absolute left-10 right-10 top-5 h-1 bg-white/30 z-0"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6 relative z-10">
            {steps.map((step, index) => (
              <div key={index} className="flex flex-col items-center text-center bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all">
                <div className="h-12 w-12 rounded-full bg-white flex items-center justify-center mb-4 text-blue-600">
                  {step.icon}
                </div>
                <h3 className="font-semibold text-lg mb-2 text-white">{step.title}</h3>
                <p className="text-blue-100 text-sm px-2">{step.description}</p>
                <span className="md:hidden mt-2 text-xs text-white/70">Step {index + 1} of 5</span>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <button className="px-8 py-3 bg-white text-blue-600 hover:bg-blue-50 font-medium rounded-lg shadow-lg hover:shadow-xl transition-all">
            Book Your Repair Now
          </button>
        </div>
      </div>
    </section>
  );
};