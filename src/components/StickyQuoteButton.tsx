import { useState, useEffect } from 'react';
import { MessageSquare } from 'lucide-react';

export default function StickyQuoteButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 500);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const smoothScrollTo = (targetId: string) => {
    const targetElement = document.getElementById(targetId);
    if (!targetElement) return;

    const headerOffset = 72;
    const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerOffset;
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    const duration = 1800;
    let startTime: number | null = null;

    const easeInOutQuart = (t: number): number => {
      return t < 0.5 ? 8 * t * t * t * t : 1 - Math.pow(-2 * t + 2, 4) / 2;
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
  };

  if (!isVisible) return null;

  return (
    <button
      onClick={() => smoothScrollTo('contact')}
      className="fixed bottom-8 right-8 bg-gradient-to-r from-[#C0392B] to-[#E74C3C] text-white p-5 rounded-full shadow-2xl hover:shadow-[#C0392B]/50 transition-all duration-500 z-40 group hover:scale-110 animate-bounce-slow"
      aria-label="Request a quote"
      style={{ animation: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite' }}
    >
      <div className="absolute inset-0 bg-white/20 rounded-full blur-xl group-hover:blur-2xl transition-all duration-500"></div>
      <MessageSquare size={24} className="relative z-10 group-hover:rotate-12 transition-transform duration-500" strokeWidth={2.5} />
    </button>
  );
}
