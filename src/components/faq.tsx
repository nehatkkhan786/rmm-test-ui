import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "What types of mobile repairs do you offer?",
      answer:
        "We offer all types of mobile repairs including screen replacement, battery replacement, software issues, charging port repair, and more.",
    },
    {
      question: "How long does a typical repair take?",
      answer:
        "The duration of repair depends on the issue, but most repairs are completed within a few hours to a day.",
    },
    {
      question: "Do you provide warranty for repairs?",
      answer: "Yes, we provide a 90-day warranty on all our repairs.",
    },
    {
      question: "Can I book a repair online?",
      answer: "Yes, you can book your repair through our website or mobile app.",
    },
    {
      question: "Do you offer home service for repairs?",
      answer:
        "Yes, we offer home service in selected areas. Please check availability during booking.",
    },
    {
      question: "Are your technicians certified?",
      answer:
        "Yes, all our technicians are certified professionals with years of experience.",
    },
  ];

  return (
    <section className="py-12 px-4 sm:px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header matching the image style */}
        <div className="mb-10 text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">FAQs</h1>
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">Frequently Asked Questions</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Find answers to common questions about our services.
          </p>
          <div className="w-24 h-1 bg-blue-600 mx-auto mt-6"></div>
        </div>

        {/* FAQ Items */}
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className={`border-b border-gray-200 pb-6 ${index === faqs.length - 1 ? 'border-b-0' : ''}`}
            >
              <button
                className="w-full flex justify-between items-start text-left"
                onClick={() => toggleAccordion(index)}
                aria-expanded={openIndex === index}
              >
                <h3 className="text-lg font-medium text-gray-900">
                  {faq.question}
                </h3>
                <ChevronDown 
                  className={`h-5 w-5 ml-4 mt-1 flex-shrink-0 transition-transform duration-200 ${
                    openIndex === index ? 'rotate-180 text-blue-600' : 'text-gray-500'
                  }`} 
                />
              </button>
              
              {openIndex === index && (
                <div className="mt-3 pl-2">
                  <p className="text-gray-600 text-left">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};