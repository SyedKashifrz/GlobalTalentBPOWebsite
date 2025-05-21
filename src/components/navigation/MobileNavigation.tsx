
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { X, Home, ChevronDown } from 'lucide-react';
import { navStructure } from './NavigationItems';

interface MobileNavigationProps {
  mobileMenuOpen: boolean;
  closeMobileMenu: () => void;
}

const MobileNavigation: React.FC<MobileNavigationProps> = ({ 
  mobileMenuOpen, 
  closeMobileMenu 
}) => {
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  
  if (!mobileMenuOpen) return null;

  return (
    <div className="lg:hidden fixed inset-0 z-50 bg-[rgb(20,34,83)]">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center border-b border-gray-500">
        <Link to="/" className="flex items-center" onClick={closeMobileMenu}>
          <img src="/lovable-uploads/26f160ac-57ea-4929-98cb-94469ff13c2d.png" alt="The Global Talent BPO Logo" className="h-14 w-auto" />
        </Link>
        <button onClick={closeMobileMenu} className="text-white focus:outline-none" aria-label="Close menu">
          <X size={24} />
        </button>
      </div>
      <nav className="container mx-auto px-4 py-8 flex flex-col space-y-6">
        <Link to="/" className="text-lg font-medium text-white flex items-center" onClick={closeMobileMenu}>
          <Home size={18} className="mr-2" />
          Home
        </Link>
      
        <Link to="/about" className="text-lg font-medium text-white" onClick={closeMobileMenu}>
          About Us
        </Link>
        
        {/* Solutions Dropdown */}
        <div className="relative">
          <button 
            className="text-lg font-medium text-white flex items-center w-full justify-between" 
            onClick={() => setSolutionsOpen(!solutionsOpen)}
          >
            <span>Solutions</span>
            <ChevronDown size={18} className={`transition-transform ${solutionsOpen ? 'rotate-180' : ''}`} />
          </button>
          
          {solutionsOpen && (
            <div className="mt-3 pl-4 space-y-3 border-l border-gray-500">
              {navStructure.solutions.items.map((item) => (
                <Link 
                  key={item.path} 
                  to={item.path} 
                  className="text-base text-white block hover:text-gray-300"
                  onClick={closeMobileMenu}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          )}
        </div>
        
        <Link to="/products/payroll-software" className="text-lg font-medium text-white" onClick={closeMobileMenu}>
          Global Payroll Software
        </Link>
        
        <Link to="/global-coverage" className="text-lg font-medium text-white" onClick={closeMobileMenu}>
          Global Coverage
        </Link>
        
        <Link to="/contact" className="text-lg font-medium text-white" onClick={closeMobileMenu}>
          Contact
        </Link>
        
        <Link to="/contact" className="btn-primary text-center mt-4 bg-white text-gray-600 hover:bg-gray-100" onClick={closeMobileMenu}>
          Get Started
        </Link>
      </nav>
    </div>
  );
};

export default MobileNavigation;
