import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const slides = [
  {
    image: 'https://images.pexels.com/photos/1143758/pexels-photo-1143758.jpeg?auto=compress&cs=tinysrgb&w=1920',
    title: 'Powering the Future of Energy Supply',
    subtitle: 'Reliable industrial solutions for the oil & gas industry'
  },
  {
    image: 'https://images.pexels.com/photos/3785931/pexels-photo-3785931.jpeg?auto=compress&cs=tinysrgb&w=1920',
    title: 'Global Excellence in Industrial Equipment',
    subtitle: 'Trusted by leading energy companies worldwide'
  },
  {
    image: 'https://images.pexels.com/photos/257700/pexels-photo-257700.jpeg?auto=compress&cs=tinysrgb&w=1920',
    title: 'Engineering Precision for Critical Operations',
    subtitle: 'Advanced technical services and spare parts supply'
  }
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 7000);

    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <section className="relative h-screen w-full overflow-hidden" style={{ marginTop: '80px' }}>
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url(${slide.image})`,
              filter: 'brightness(0.6) saturate(0.8)'
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/60" />
        </div>
      ))}

      <div className="relative h-full flex items-center justify-center">
        <div className="container-width text-center text-white">
          <h1 className="text-5xl md:text-7xl font-semibold mb-6 fade-in leading-tight">
            {slides[currentSlide].title}
          </h1>
          <p className="text-xl md:text-2xl mb-12 text-white/90 max-w-3xl mx-auto fade-in">
            {slides[currentSlide].subtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center fade-in">
            <button className="bg-[#C0392B] text-white px-8 py-4 rounded-[14px] font-semibold uppercase tracking-wider hover:bg-[#A93226] transition-smooth hover:shadow-xl hover:shadow-[#C0392B]/30">
              Explore Services
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-[14px] font-semibold uppercase tracking-wider hover:bg-white hover:text-[#0B0D0F] transition-smooth">
              Request a Quote
            </button>
          </div>
        </div>
      </div>

      <button
        onClick={prevSlide}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 text-white/80 hover:text-white transition-smooth"
        aria-label="Previous slide"
      >
        <ChevronLeft size={48} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 text-white/80 hover:text-white transition-smooth"
        aria-label="Next slide"
      >
        <ChevronRight size={48} />
      </button>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 rounded-full transition-smooth ${
              index === currentSlide ? 'bg-[#C0392B] w-8' : 'bg-white/50'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
