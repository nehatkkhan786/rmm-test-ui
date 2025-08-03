
export const Partner = () => {
  return (
    <section className="relative py-16 px-4 sm:py-24 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-800 opacity-95"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className="absolute top-20 left-20 w-40 h-40 rounded-full bg-white"></div>
        <div className="absolute bottom-10 right-10 w-32 h-32 rounded-full bg-white"></div>
        <div className="absolute top-1/3 right-1/4 w-24 h-24 rounded-full bg-white"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text content - left side */}
          <div className="text-white space-y-6">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
              Want to become a <br />
              <span className="text-yellow-300">Repair my Mobile</span> Partner?
            </h2>
            <p className="text-lg sm:text-xl text-blue-100 max-w-lg">
              Join our network of trusted repair partners and grow your business with our platform.
            </p>
            <button className=" mt-6 px-8 py-3 bg-yellow-400 hover:bg-yellow-300 text-blue-900 font-bold rounded-lg shadow-lg transform hover:scale-105 transition-all duration-200 cursor-pointer">
              Join Today
            </button>
          </div>
          
          {/* Image container - right side */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md h-64 sm:h-80 lg:h-96 rounded-xl overflow-hidden">
              {/* Replace this img tag with your actual image */}
              <img
                src="/images/hero-3.png"
                alt="Mobile repair technician working"
                className="w-full h-full object-cover"
              />
              {/* Overlay for better text contrast */}
              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};