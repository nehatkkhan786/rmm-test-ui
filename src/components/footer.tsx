import { Facebook, Instagram, Linkedin, Twitter, Youtube } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-gray-100 to-gray-200 text-gray-900 pt-16 pb-8">
      <div className="container mx-auto px-4">
        {/* Top grid */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {/* Logo and Tagline */}
          <div className="space-y-4">
            <div className="text-2xl font-bold">
               <img src="/images/logo.png" alt="RepairMyMobile Logo" className="h-30 w-auto" />
            </div>
            <p className="text-sm text-gray-600">
              A Brand of WeJoy PhoneFix Pvt Ltd
            </p>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="text-gray-500 hover:text-blue-600 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-500 hover:text-pink-600 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-500 hover:text-red-600 transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-500 hover:text-blue-700 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-500 hover:text-sky-500 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-gray-800 mb-4 text-lg">Services</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">Repair</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">Technical Training</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">Device</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-gray-800 mb-4 text-lg">Company</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">About Us</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">Careers</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">Press Releases</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">Become a Partner</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">Corporate Information</a></li>
            </ul>
          </div>

          {/* Help & Support */}
          <div>
            <h4 className="font-semibold text-gray-800 mb-4 text-lg">Help & Support</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">FAQ</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">Contact Us</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">Warranty Policy</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">Refund Policy</a></li>
            </ul>
          </div>

          {/* More Info / Contact */}
          <div>
            <h4 className="font-semibold text-gray-800 mb-4 text-lg">More Info</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">Terms and Conditions</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">Terms of Use</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">E-waste Policy</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">Cookie Policy</a></li>
            </ul>
            <h4 className="font-semibold text-gray-800 mt-6 mb-3 text-lg">Contact</h4>
            <p className="text-sm text-gray-600">Phone: +91 99XXX XXXXX</p>
            <p className="text-sm text-gray-600">XXXXX, +91 99XXX XXXXX</p>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-300 mt-12 pt-6">
          <div className="text-center text-sm text-gray-600">
            <p>
              <strong className="text-gray-800">Registered Office:</strong> Bakergunj Main Road, Bankipur, PATNA, Bihar, India PIN: 800004 |{' '}
              <strong className="text-gray-800">Corporate Office:</strong> 456 Service Rd, Koramangla, Bengaluru, Karnataka, India PIN: XXX XXX
            </p>
            <p className="mt-3">
              © {new Date().getFullYear()} Repair My Mobile, a brand of WeJoy PhoneFix Pvt Ltd
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};