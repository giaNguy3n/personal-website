import React, { useState } from 'react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 w-full bg-[#2d2f38] backdrop-blur-sm z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <button
              onClick={scrollToTop}
              className="focus:outline-none"
              aria-label="Back to top"
            >
              <img
                src={require('../assets/noBgWhite.png')}
                alt="Gia Nguyen Logo"
                className="h-10 w-auto"
                style={{ maxWidth: 160 }}
              />
            </button>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <button
                onClick={() => scrollToSection('about')}
                className="text-white hover:text-[#c7a645] px-3 py-2 text-sm font-medium transition-colors"
              >
                About
              </button>

              <button
                onClick={() => scrollToSection('contact')}
                className="text-white hover:text-[#c7a645] px-3 py-2 text-sm font-medium transition-colors"
              >
                Contact
              </button>
            </div>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white hover:text-[#c7a645] focus:outline-none focus:text-[#c7a645]"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-[#2d2f38] border-t">
              <button
                onClick={() => scrollToSection('about')}
                className="text-white hover:text-[#c7a645] block px-3 py-2 text-base font-medium"
              >
                About
              </button>

              <button
                onClick={() => scrollToSection('contact')}
                className="text-white hover:text-[#c7a645] block px-3 py-2 text-base font-medium"
              >
                Contact
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header; 