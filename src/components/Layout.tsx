import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Shield, Phone, Mail } from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Batches', href: '/batches' },
    { name: 'About', href: '/about' },
    { name: 'Testimonials', href: '/testimonials' },
    { name: 'Contact', href: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-3">
              <img src="/images/logo.png" alt="Trinity SSB Mentorship Logo" className="h-12 w-auto rounded-lg"/>
              <div>
                <h1 className="text-xl font-bold text-gray-900">Trinity SSB</h1>
                <p className="text-sm text-gray-600">Mentorship</p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                    isActive(item.href)
                      ? 'bg-green-100 text-green-800'
                      : 'text-gray-700 hover:text-green-600 hover:bg-green-50'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            {/* CTA Button */}
            <div className="hidden md:flex">
              <Link
                to="/enroll"
                className="bg-gradient-to-r from-orange-500 to-red-600 text-white px-6 py-2 rounded-lg font-semibold hover:from-orange-600 hover:to-red-700 transform hover:scale-105 transition-all duration-200 shadow-lg"
              >
                Enroll Now
              </Link>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-4 py-2 space-y-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 ${
                    isActive(item.href)
                      ? 'bg-green-100 text-green-800'
                      : 'text-gray-700 hover:text-green-600 hover:bg-green-50'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                to="/enroll"
                onClick={() => setIsMenuOpen(false)}
                className="block w-full mt-4 bg-gradient-to-r from-orange-500 to-red-600 text-white px-4 py-2 rounded-lg font-semibold text-center hover:from-orange-600 hover:to-red-700 transition-all duration-200"
              >
                Enroll Now
              </Link>
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main>{children}</main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Logo and Description */}
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center space-x-3 mb-4 text-white">
              <img src="/images/logo.png" alt="Trinity SSB Mentorship Logo" className="h-12 w-auto rounded-lg"/>
                <div>
                  <h2 className="text-xl font-bold">Trinity SSB Mentorship</h2>
                  <p className="text-gray-400">Your Gateway to Defence Forces</p>
                </div>
              </div>
              <p className="text-gray-400 mb-4">
                Training for Services Selection Board by Qualified Veteran Assessors. 
                12-day flexible online sessions with personalized mentoring.
              </p>
              <div className="text-sm text-gray-400">
                <p>500+ Students Trained • Veteran Instructors • Proven Results</p>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                {navigation.map((item) => (
                  <li key={item.name}>
                    <Link to={item.href} className="text-gray-400 hover:text-white transition-colors duration-200">
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact</h3>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <Phone className="h-4 w-4 text-green-400" />
                  <span className="text-gray-400">+91 9876543210</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="h-4 w-4 text-green-400" />
                  <span className="text-gray-400">info@trinityssb.com</span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Trinity SSB Mentorship. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;