import './App.css';
import { FAQ } from './components/faq';
import { Footer } from './components/footer';
import { Header } from './components/header';
import { Hero } from './components/hero';
import { HowItWorks } from './components/how-it-works';
import { Partner } from './components/partners';
import Services from './components/services';
import { Testimonials } from './components/testimonials';
import TopBrands from './components/top-brands';
import WhyUs from './components/why-us';
import { Home, Wrench, User } from 'lucide-react';
import { useState } from 'react';

function App() {
  const [activeTab, setActiveTab] = useState('Home');

  // Bottom navigation items
  const bottomNavItems = [
    { name: "Home", icon: Home },
    { name: "Services", icon: Wrench },
    { name: "Account", icon: User }
  ];

  return (
    <>
      <div className="relative">
        {/* Regular Header (shown on all screens) */}
        <Header />
        
        {/* Main Content - added padding-bottom for mobile nav */}
        <main className="pb-16 md:pb-0">
          <Hero/>
          <TopBrands/>
          <HowItWorks/>
          <Services/>
          <WhyUs/>
          <Testimonials/>
          <FAQ/>
          <Partner/>
        </main>
        
        {/* Footer */}
        <Footer/>

        {/* Mobile Bottom Navigation (hidden on desktop) */}
        <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 shadow-lg">
          <div className="flex justify-around items-center">
            {bottomNavItems.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.name}
                  className={`flex flex-col items-center p-3 w-full ${activeTab === item.name ? 'text-blue-600' : 'text-gray-500'}`}
                  onClick={() => setActiveTab(item.name)}
                >
                  <Icon className={`h-6 w-6 ${activeTab === item.name ? '' : ''}`} />
                  <span className="text-xs mt-1">{item.name}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;