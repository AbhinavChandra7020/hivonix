import React from 'react';
import hivonixLogo from '../assets/Hivonix.png';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white py-8 border-t border-blue-900">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start">
          {/* Left Section */}
          <div className="mb-8 md:mb-0">
            <div className="w-32 mb-2">
              <img src={hivonixLogo} alt="Hivonix Logo" className="w-full" />
            </div>
            <p className="text-white text-opacity-70">© 2025 Hivonix Learning</p>
            <p className="text-white text-opacity-50">Abhinav Chandra</p>
          </div>

          {/* Right Section - Quick Links */}
          <div>
            <h4 className="text-white text-lg font-semibold mb-4">Quick Links</h4>
            <div className="grid grid-cols-2 gap-x-10 gap-y-3">
              <a
                href="/about"
                className="text-white text-opacity-90 font-medium hover:text-white transition duration-200"
              >
                About Us
              </a>
              <a
                href="/services"
                className="text-white text-opacity-90 font-medium hover:text-white transition duration-200"
              >
                Services
              </a>
              <a
                href="/courses"
                className="text-white text-opacity-90 font-medium hover:text-white transition duration-200"
              >
                Courses
              </a>
              <a
                href="/contact"
                className="text-white text-opacity-90 font-medium hover:text-white transition duration-200"
              >
                Connect
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
