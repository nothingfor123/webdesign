import { useState, useEffect } from 'react';
import tibornLogo from '../assets/tiborn.png';
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

  const smoothScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    
    // Handle Homepage - scroll to top
    let targetPosition: number;
    if (targetId === 'homepage') {
      targetPosition = 0;
    } else {
      const targetElement = document.getElementById(targetId);
      if (!targetElement) return;
      
      const headerOffset = 72; // Height of the fixed header
      targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerOffset;
    }

    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    const duration = 1800; // Even more gentle - 1.8 seconds for ultra-smooth scroll
    let startTime: number | null = null;

    // Ultra-smooth easing function (ease-in-out-quart for very gentle motion)
    const easeInOutQuart = (t: number): number => {
      return t < 0.5 
        ? 8 * t * t * t * t 
        : 1 - Math.pow(-2 * t + 2, 4) / 2;
    };

    const animation = (currentTime: number) => {
      if (startTime === null) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const progress = Math.min(timeElapsed / duration, 1);
      const ease = easeInOutQuart(progress);
      
      window.scrollTo(0, startPosition + distance * ease);
      
      if (progress < 1) {
        requestAnimationFrame(animation);
      }
    };

    requestAnimationFrame(animation);
    setMobileMenuOpen(false);
  };

  const menuItems = ['Homepage', 'Corporate', 'Services', 'Contact'];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ease-out ${
          scrolled 
            ? 'bg-[#0B0D0F]/60 backdrop-blur-2xl backdrop-saturate-150 shadow-lg shadow-black/10 border-b border-white/10' 
            : 'bg-[#0B0D0F]/80 backdrop-blur-xl backdrop-saturate-180'
        }`}
        style={{ 
          height: '72px',
          WebkitBackdropFilter: scrolled ? 'blur(40px) saturate(150%)' : 'blur(24px) saturate(180%)',
          backdropFilter: scrolled ? 'blur(40px) saturate(150%)' : 'blur(24px) saturate(180%)'
        }}
      >
        <div className="container-width h-full flex items-center justify-between">
          <a
            href="#homepage"
            onClick={(e) => smoothScrollTo(e, 'homepage')}
            className="block select-none"
            aria-label="TIBORN - Homepage"
          >
            <img
              src={tibornLogo}
              alt="TIBORN"
              className="h-8 md:h-10 w-auto pointer-events-none"
              decoding="async"
              draggable={false}
            />
          </a>

          <nav className="hidden md:flex items-center gap-10">
            {menuItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                onClick={(e) => smoothScrollTo(e, item.toLowerCase().replace(/\s+/g, '-'))}
                className="relative text-white/80 hover:text-white text-sm font-medium tracking-wide transition-all duration-300 group"
              >
                <span className="relative z-10">{item}</span>
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#C0392B] to-[#E74C3C] group-hover:w-full transition-all duration-300 rounded-full"></span>
              </a>
            ))}
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
        <div className="fixed inset-0 z-40 bg-[#0B0D0F]/50 backdrop-blur-2xl backdrop-saturate-150 md:hidden" style={{ WebkitBackdropFilter: 'blur(40px) saturate(150%)', backdropFilter: 'blur(40px) saturate(150%)' }}>
          <div className="flex flex-col items-center justify-center h-full gap-8">
            {menuItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                onClick={(e) => smoothScrollTo(e, item.toLowerCase().replace(/\s+/g, '-'))}
                className="text-white text-2xl font-medium hover:text-[#C0392B] transition-all duration-300 hover:scale-110"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
