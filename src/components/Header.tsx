
import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu } from 'lucide-react';
import DesktopNavigation from './navigation/DesktopNavigation';
import MobileNavigation from './navigation/MobileNavigation';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const handleNavigation = (path: string) => {
    navigate(path);
    closeMobileMenu();
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-[rgb(20,34,83)] shadow-md py-2' : 'bg-[rgb(20,34,83)] py-4'}`}>
      <div className="container-custom flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <img src="/lovable-uploads/26f160ac-57ea-4929-98cb-94469ff13c2d.png" alt="The Global Talent BPO Logo" className="h-20 w-auto" />
        </Link>

        {/* Desktop Navigation */}
        <DesktopNavigation isActive={isActive} />

        <button onClick={toggleMobileMenu} className="lg:hidden focus:outline-none text-white" aria-label="Toggle menu">
          {mobileMenuOpen ? null : <Menu size={24} />}
        </button>

        {/* Mobile Menu */}
        <MobileNavigation 
          mobileMenuOpen={mobileMenuOpen}
          closeMobileMenu={closeMobileMenu}
        />
      </div>
    </header>
  );
};

export default Header;
