import { useState } from "react";

type Brand = {
  id: number;
  name: string;
  logo: string;
  models: string[];
};

const brands: Brand[] = [
  {
    id: 1,
    name: "Apple",
    logo: "/images/apple-logo.png",
    models: [
      "iPhone 15 Pro Max",
      "iPhone 15 Pro",
      "iPhone 15",
      "iPhone 14 Pro Max",
      "iPhone 14 Pro",
      "iPhone 14",
      "iPhone 13 Pro Max",
      "iPhone 13 Pro",
      "iPhone 13",
      "iPhone 12 Pro Max",
      "iPhone 12 Pro",
      "iPhone 12",
      "iPhone SE (3rd Gen)",
    ],
  },
  {
    id: 2,
    name: "Xiaomi",
    logo: "/images/Mi-logo.png",
    models: [
      "Xiaomi 13 Pro",
      "Xiaomi 13",
      "Redmi Note 12 Pro",
      "Redmi Note 12",
      "Redmi K60",
      "Redmi Note 11 Pro",
      "Redmi Note 11",
      "POCO F5 Pro",
      "POCO X5 Pro",
    ],
  },
  {
    id: 3,
    name: "Samsung",
    logo: "/images/samsung-logo.png",
    models: [
      "Galaxy S23 Ultra",
      "Galaxy S23+",
      "Galaxy S23",
      "Galaxy S22 Ultra",
      "Galaxy S22+",
      "Galaxy S22",
      "Galaxy Z Fold 5",
      "Galaxy Z Flip 5",
      "Galaxy A54",
      "Galaxy A34",
    ],
  },
  {
    id: 4,
    name: "Vivo",
    logo: "/images/Vivo-logo.png",
    models: [
      "Vivo X90 Pro",
      "Vivo X90",
      "Vivo V29 Pro",
      "Vivo V29",
      "Vivo Y56",
      "Vivo T2",
      "Vivo Y27",
      "Vivo Y16",
    ],
  },
  {
    id: 5,
    name: "OnePlus",
    logo: "/images/oneplus-logo.png",
    models: [
      "OnePlus 11",
      "OnePlus 11R",
      "OnePlus 10 Pro",
      "OnePlus 10T",
      "OnePlus 9RT",
      "OnePlus Nord 3",
      "OnePlus Nord CE 3",
      "OnePlus Nord 2T",
    ],
  },
  {
    id: 6,
    name: "OPPO",
    logo: "/images/oppo-logo.png",
    models: [
      "OPPO Find X6 Pro",
      "OPPO Find X6",
      "OPPO Reno 10 Pro+",
      "OPPO Reno 10 Pro",
      "OPPO Reno 10",
      "OPPO A98",
      "OPPO F23",
      "OPPO A78",
    ],
  },
  {
    id: 7,
    name: "Realme",
    logo: "/images/realme-logo.png",
    models: [
      "Realme 11 Pro+",
      "Realme 11 Pro",
      "Realme GT 3",
      "Realme GT Neo 5",
      "Realme C55",
      "Realme 10 Pro+",
      "Realme 10 Pro",
      "Realme 10",
    ],
  },
  {
    id: 8,
    name: "Motorola",
    logo: "/images/motrorola-logo.png",
    models: [
      "Moto Edge 40 Pro",
      "Moto Edge 40",
      "Moto G82",
      "Moto G73",
      "Moto E13",
      "Moto Razr 40 Ultra",
      "Moto Razr 40",
      "Moto G14",
    ],
  },
  {
    id: 9,
    name: "Nokia",
    logo: "/images/nokia-logo.png",
    models: [
      "Nokia G60",
      "Nokia X30",
      "Nokia C32",
      "Nokia C22",
      "Nokia 2660 Flip",
      "Nokia 105",
      "Nokia 110 4G",
      "Nokia 150",
    ],
  },
  {
    id: 10,
    name: "Honor",
    logo: "/images/honor-logo.png",
    models: [
      "Honor 90",
      "Honor 90 Pro",
      "Honor Magic 5 Pro",
      "Honor Magic 5",
      "Honor X9a",
      "Honor 70",
      "Honor X8",
      "Honor X7",
    ],
  },
  {
    id: 11,
    name: "Asus",
    logo: "/images/asus-logo.png",
    models: [
      "ROG Phone 7 Ultimate",
      "ROG Phone 7",
      "Zenfone 10",
      "Zenfone 9",
      "ROG Phone 6D Ultimate",
      "ROG Phone 6",
      "ROG Phone 5s",
      "ROG Phone 5",
    ],
  },
  {
    id: 12,
    name: "Google",
    logo: "/images/google-logo.png",
    models: [
      "Pixel 7 Pro",
      "Pixel 7",
      "Pixel 7a",
      "Pixel 6 Pro",
      "Pixel 6",
      "Pixel 6a",
      "Pixel Fold",
      "Pixel 5a",
    ],
  },
  {
    id: 13,
    name: "POCO",
    logo: "/images/poco-logo.png",
    models: [
      "POCO F5 Pro",
      "POCO F5",
      "POCO X5 Pro",
      "POCO X5",
      "POCO M6 Pro",
      "POCO C55",
      "POCO C51",
      "POCO X4 Pro",
    ],
  },
  {
    id: 14,
    name: "Infinix",
    logo: "/images/infinix-logo.png",
    models: [
      "Infinix Zero 30 5G",
      "Infinix Zero 30",
      "Infinix Hot 30",
      "Infinix Hot 30i",
      "Infinix Note 30 VIP",
      "Infinix Note 30",
      "Infinix Smart 7",
      "Infinix Smart 7 HD",
    ],
  },
  {
    id: 15,
    name: "iQOO",
    logo: "/images/iqoo-logo.png",
    models: [
      "iQOO 11",
      "iQOO 11 Pro",
      "iQOO Z7 Pro",
      "iQOO Z7",
      "iQOO Neo 7",
      "iQOO 9T",
      "iQOO 9 SE",
      "iQOO 7 Legend",
    ],
  },
  {
    id: 16,
    name: "Nothing",
    logo: "/images/nothing-logo.png",
    models: ["Nothing Phone 2", "Nothing Phone 1", "Nothing Ear 2", "Nothing Ear 1"],
  },
];

const TopBrands = () => {
  const [selectedBrand, setSelectedBrand] = useState<Brand | null>(null);

  return (
    <section className="py-12 px-4 sm:px-8 max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold mb-8 text-gray-800">Select Your Mobile Brand</h2>

      {/* Brand Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {brands.map((brand) => (
          <div
            key={brand.id}
            onClick={() => setSelectedBrand(brand)}
            className="bg-white rounded-xl shadow-md hover:shadow-lg duration-300 p-4 flex flex-col items-center cursor-pointer hover:scale-105 transform transition-all"
          >
            <img src={brand.logo} alt={brand.name} className="h-16 w-16 object-contain mb-3" />
            <p className="text-sm font-medium text-center text-gray-700">{brand.name}</p>
          </div>
        ))}
      </div>

      {/* Model Modal */}
      {selectedBrand && (
        <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl w-full max-w-md mx-4 relative max-h-[90vh] overflow-hidden shadow-2xl">
            <div className="sticky top-0 bg-white z-10 p-6 pb-4 border-b border-gray-100">
              <div className="flex items-center gap-4">
                <img src={selectedBrand.logo} alt={selectedBrand.name} className="h-10 w-10 object-contain" />
                <h3 className="text-2xl font-bold text-gray-800">{selectedBrand.name} Models</h3>
              </div>
              <button
                className="absolute top-5 right-5 text-gray-400 hover:text-gray-600 text-2xl transition-colors"
                onClick={() => setSelectedBrand(null)}
                aria-label="Close modal"
              >
                &times;
              </button>
            </div>

            <div className="overflow-y-auto max-h-[70vh] p-6 pt-4">
              <div className="grid grid-cols-1 gap-3">
                {selectedBrand.models.map((model, idx) => (
                  <div
                    key={idx}
                    className="p-3 rounded-lg hover:bg-gray-50 transition-colors border border-gray-100"
                  >
                    <p className="font-medium text-gray-800 cursor-pointer" onClick={() => setSelectedBrand(null)}>
                      {model}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="sticky bottom-0 bg-gradient-to-t from-white to-transparent h-10"></div>
          </div>
        </div>
      )}
    </section>
  );
};

export default TopBrands;
