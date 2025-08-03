
const heroSlides = [
  {
    image: "/images/hero-1.png",
    title: "Upto 25% off on Mobile repairs",
    code: "RMM25",
    cta: "Book Repair Today",
    gradient: "bg-gradient-to-r from-green-400 to-black"
  },
  {
    image: "/images/hero-2.png",
    title: "Free Battery Checkup",
    code: "BATT100",
    cta: "Check Battery",
    gradient: "bg-gradient-to-r from-yellow-400 to-black"
  },
  {
    image: "/images/hero-3.png",
    title: "Water Damage Special Offer",
    code: "WTRFIX",
    cta: "Book Water Repair",
    gradient: "bg-gradient-to-r from-blue-500 to-black"
  }
];

export const Hero = () => {
  return (
    <section className="relative w-full overflow-hidden rounded-2xl">
      <div className="w-full flex overflow-hidden">
        {heroSlides.map((slide, index) => (
          <div
            key={index}
            className={`${slide.gradient} text-white w-full flex-shrink-0`}
            style={{ minHeight: '400px' }}
          >
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-6 py-10 px-6 md:px-20">
              {/* Slide Image */}
              <div className="flex justify-center md:justify-start">
                <img
                  src={slide.image}
                  alt={`Slide ${index + 1}`}
                  className="max-h-[300px] md:max-h-[400px] object-contain"
                />
              </div>

              {/* Slide Content */}
              <div className="text-center md:text-left">
                <h2 className="text-2xl md:text-4xl font-bold mb-4">{slide.title}</h2>
                <p className="text-lg mb-6">
                  Coupon code: <span className="font-semibold">{slide.code}</span>
                </p>
                <button className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-6 rounded-md transition-colors duration-300">
                  {slide.cta}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
