import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = ['Homepage', 'Corporate', 'Services', 'Quality & HSE', 'Contact'];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-smooth ${
          scrolled ? 'bg-[#0B0D0F]/85 backdrop-blur-md' : 'bg-transparent'
        }`}
        style={{ height: '80px' }}
      >
        <div className="container-width h-full flex items-center justify-between">
          <div className="tiborn-logo text-2xl tracking-wide">
            <span className="text-white">TIB</span>
            <span className="text-[#C0392B]">O</span>
            <span className="text-white">RN</span>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            {menuItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                className="text-white/90 hover:text-white text-sm font-medium transition-smooth"
              >
                {item}
              </a>
            ))}
            <button className="bg-[#C0392B] text-white px-6 py-2.5 rounded-[14px] text-sm font-semibold uppercase tracking-wider hover:bg-[#A93226] transition-smooth hover:shadow-lg hover:shadow-[#C0392B]/20">
              Request a Quote
            </button>
          </nav>

          <button
            className="md:hidden text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-[#0B0D0F]/95 backdrop-blur-md md:hidden">
          <div className="flex flex-col items-center justify-center h-full gap-8">
            {menuItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                className="text-white text-xl font-medium hover:text-[#C0392B] transition-smooth"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item}
              </a>
            ))}
            <button className="bg-[#C0392B] text-white px-8 py-3 rounded-[14px] text-sm font-semibold uppercase tracking-wider hover:bg-[#A93226] transition-smooth">
              Request a Quote
            </button>
          </div>
        </div>
      )}
    </>
  );
}
