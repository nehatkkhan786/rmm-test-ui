import { useState } from 'react';

const BottomNav = () => {
  const [activeTab, setActiveTab] = useState("home");

  const handleTabClick = (tab:string) => {
    setActiveTab(tab);
  };

  return (
    <div className="fixed bottom-0 left-0 w-full bg-blue-600 p-4 md:hidden">
      <div className="flex justify-around items-center text-white">
        {/* Home Button */}
        <div onClick={() => handleTabClick('home')} className={`flex flex-col items-center ${activeTab === 'home' ? 'text-gray-300' : ''}`}>
          <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 9L12 2l9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9z" />
          </svg>
          <span>Home</span>
        </div>

        {/* Services Button */}
        <div onClick={() => handleTabClick('services')} className={`flex flex-col items-center ${activeTab === 'services' ? 'text-gray-300' : ''}`}>
          <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 3v18h18V3H3z" />
          </svg>
          <span>Services</span>
        </div>

        {/* FAQ Button */}
        <div onClick={() => handleTabClick('faq')} className={`flex flex-col items-center ${activeTab === 'faq' ? 'text-gray-300' : ''}`}>
          <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 6h18M3 12h18M3 18h18" />
          </svg>
          <span>FAQ</span>
        </div>

        {/* Contact Button */}
        <div onClick={() => handleTabClick('contact')} className={`flex flex-col items-center ${activeTab === 'contact' ? 'text-gray-300' : ''}`}>
          <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 7h18M3 12h18M3 17h18" />
          </svg>
          <span>Contact</span>
        </div>
      </div>
    </div>
  );
};

export default BottomNav;
