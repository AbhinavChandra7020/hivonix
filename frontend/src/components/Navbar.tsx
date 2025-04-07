import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import hivonixLogo from '../assets/Hivonix.png';

type NavItemProps = {
  label: string;
  href: string;
};

const Navbar: React.FC = () => {
  const location = useLocation();

  const navItems: NavItemProps[] = [
    { label: 'Services', href: '/services' },
    { label: 'Courses', href: '/courses' },
    { label: 'Connect', href: '/contact' },
    { label: 'About Us', href: '/about' }
  ];

  return (
    <nav className="bg-black shadow-md fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center">
            <img
              src={hivonixLogo}
              alt="Hivonix Logo"
              className="h-12 opacity-80 transition duration-300"
            />
          </Link>

          <ul className="flex space-x-8">
            {navItems.map((item, index) => {
              const isActive = location.pathname === item.href;

              return (
                <li key={index}>
                  <Link
                    to={item.href}
                    className={`text-sm font-medium transition duration-300 ${
                      isActive
                        ? 'text-white'
                        : 'text-gray-400 hover:text-white'
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
