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

  if (!isVisible) return null;

  return (
    <button
      className="fixed bottom-8 right-8 bg-[#C0392B] text-white p-4 rounded-full shadow-lg hover:bg-[#A93226] hover:shadow-xl hover:shadow-[#C0392B]/30 transition-smooth z-40 group"
      aria-label="Request a quote"
    >
      <MessageSquare size={24} className="group-hover:scale-110 transition-smooth" />
    </button>
  );
}
