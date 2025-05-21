
import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook, Instagram } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-[rgb(20,34,83)] text-white">
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="mb-6">
              <img 
                src="/lovable-uploads/26f160ac-57ea-4929-98cb-94469ff13c2d.png" 
                alt="The Global Talent BPO Logo" 
                className="h-24 w-auto"
              />
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Connecting the world's best talent with forward-thinking companies. 
              We're redefining recruitment for the modern workplace.
            </p>
            <div className="flex space-x-4 pt-4">
              <a href="#" className="text-white hover:text-gray-400 transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-white hover:text-gray-400 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-white hover:text-gray-400 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-white hover:text-gray-400 transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { name: 'Home', path: '/' },
                { name: 'About Us', path: '/about' },
                { name: 'Solutions', path: '/services' },
                { name: 'Global Payroll Software', path: '/products/payroll-software' },
                { name: 'Global Coverage', path: '/global-coverage' },
                { name: 'Contact', path: '/contact' },
              ].map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.path} 
                    className="text-white hover:opacity-80 transition-opacity"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-white">Our Solutions</h3>
            <ul className="space-y-2">
              {[
                { name: 'Global Payroll Management', path: '/services/managed-payroll-services' },
                { name: 'Remote Talent Solutions', path: '/services/remote-talent-solutions' },
                { name: 'Employer of Record EOR', path: '/services/employer-of-record' },
                { name: 'Outsourcing Accounting', path: '/services/outsourcing-accounting' },
              ].map((service) => (
                <li key={service.name}>
                  <Link 
                    to={service.path} 
                    className="text-white hover:opacity-80 transition-opacity"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-white">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin size={18} className="mt-1 mr-3 flex-shrink-0" />
                <span className="text-gray-300">
                  Calle Sant Jaume 35, Rubi,Barcelona<br />08191, Spain
                </span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="mr-3 flex-shrink-0" />
                <a href="tel:+15551234567" className="text-gray-300 hover:text-white">
                +35 6658 66669
                </a>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="mr-3 flex-shrink-0" />
                <a href="mailto:info@globaltalenthire.com" className="text-gray-300 hover:text-white">
                  info@globaltalenthire.com
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Bottom Footer */}
        <div className="border-t border-gray-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          <p>© {currentYear} The Global Talent BPO. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/privacy" className="hover:text-white">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-white">Terms of Service</Link>
            <Link to="/cookies" className="hover:text-white">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
