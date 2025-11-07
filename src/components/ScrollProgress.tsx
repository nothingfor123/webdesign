import { useState, useEffect } from 'react';

export default function ScrollProgress() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <div className="fixed top-0 left-0 right-0 h-1 bg-gray-900/20 z-[100] backdrop-blur-sm">
      <div
          className="h-full bg-gradient-to-r from-[#C0392B] via-[#E74C3C] to-[#C0392B] transition-all duration-150 ease-out shadow-lg shadow-[#C0392B]/50"
          style={{ 
            width: `${scrollProgress}%`,
            boxShadow: '0 0 20px rgba(192, 57, 43, 0.6)'
          }}
      />
    </div>
    </>
  );
}
