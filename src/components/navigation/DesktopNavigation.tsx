import React, { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, ChevronDown } from 'lucide-react';
import { NavigationMenu, NavigationMenuList, NavigationMenuItem } from "@/components/ui/navigation-menu";
import { navStructure } from './NavigationItems';

interface DesktopNavigationProps {
  isActive: (path: string) => boolean;
}

const DesktopNavigation: React.FC<DesktopNavigationProps> = ({
  isActive
}) => {
  const [isSolutionsHovered, setIsSolutionsHovered] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout>();
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setIsSolutionsHovered(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsSolutionsHovered(false);
    }, 100); // Small delay before closing
  };

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return (
    <nav className="hidden lg:flex items-center space-x-6">
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <Link to="/" className={`text-base font-medium transition-colors hover:text-white ${isActive('/') ? 'text-white font-semibold' : 'text-white'}`}>
              <div className="flex items-center px-[10px]">
                <Home size={16} className="mr-1" />
                Home
              </div>
            </Link>
          </NavigationMenuItem>
          
          <NavigationMenuItem className="px-[5px]">
            <Link to="/about" className={`text-base font-medium transition-colors hover:text-white ${isActive('/about') ? 'text-white font-semibold' : 'text-white'}`}>
              About Us
            </Link>
          </NavigationMenuItem>
          
          {/* Solutions Dropdown */}
          <NavigationMenuItem 
            className="px-[5px] relative"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <button 
              className={`text-base font-medium transition-colors hover:text-white flex items-center ${isActive('/services') ? 'text-white font-semibold' : 'text-white'}`}
            >
              Solutions <ChevronDown size={16} className="ml-1" />
            </button>
            
            {isSolutionsHovered && (
              <div 
                ref={dropdownRef}
                className="absolute top-full left-0 mt-1 w-64 bg-white rounded-md shadow-lg py-2 z-50"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                {navStructure.solutions.items.map((item) => (
                  <Link 
                    key={item.path} 
                    to={item.path} 
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-100 hover:text-blue-800 transition-colors"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            )}
          </NavigationMenuItem>
          
          <NavigationMenuItem>
            <Link to="/products/payroll-software" className={`text-base font-medium transition-colors hover:text-white ${isActive('/products/payroll-software') ? 'text-white font-semibold' : 'text-white'}`}>
              Global Payroll Software
            </Link>
          </NavigationMenuItem>
          
          <NavigationMenuItem className="px-[5px]">
            <Link to="/global-coverage" className={`text-base font-medium transition-colors hover:text-white ${isActive('/global-coverage') ? 'text-white font-semibold' : 'text-white'}`}>
              Global Coverage
            </Link>
          </NavigationMenuItem>
          
          <NavigationMenuItem>
            <Link to="/contact" className={`text-base font-medium transition-colors hover:text-white ${isActive('/contact') ? 'text-white font-semibold' : 'text-white'}`}>
              Contact
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
      
      <Link to="/contact" className={`btn-primary text-base bg-white text-gray-600 hover:bg-gray-100`}>
        Get Started
      </Link>
    </nav>
  );
};

export default DesktopNavigation;
