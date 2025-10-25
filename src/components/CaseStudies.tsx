import { useState } from 'react';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';

const caseStudies = [
  {
    title: 'Offshore Platform Equipment Supply',
    location: 'North Sea, Norway',
    metric: '35% Faster Delivery',
    description: 'Complete valve and piping system supply for major offshore platform upgrade.',
    image: 'https://images.pexels.com/photos/3785931/pexels-photo-3785931.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    title: 'Refinery Modernization Project',
    location: 'Abu Dhabi, UAE',
    metric: '$2M Cost Savings',
    description: 'Supply and technical support for complete refinery automation upgrade.',
    image: 'https://images.pexels.com/photos/257700/pexels-photo-257700.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    title: 'Pipeline Infrastructure Expansion',
    location: 'Texas, USA',
    metric: '500km Pipeline',
    description: 'Comprehensive pipe and fitting supply for interstate pipeline project.',
    image: 'https://images.pexels.com/photos/1143758/pexels-photo-1143758.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    title: 'Power Plant Safety System',
    location: 'Singapore',
    metric: 'Zero Incidents',
    description: 'Complete safety equipment installation for LNG power generation facility.',
    image: 'https://images.pexels.com/photos/2800832/pexels-photo-2800832.jpeg?auto=compress&cs=tinysrgb&w=800'
  }
];

export default function CaseStudies() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => setCurrentIndex((prev) => (prev + 1) % caseStudies.length);
  const prev = () => setCurrentIndex((prev) => (prev - 1 + caseStudies.length) % caseStudies.length);

  const visibleStudies = [
    caseStudies[currentIndex],
    caseStudies[(currentIndex + 1) % caseStudies.length],
    caseStudies[(currentIndex + 2) % caseStudies.length]
  ];

  return (
    <section className="section-padding bg-[#F5F7FA]">
      <div className="container-width">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-semibold text-[#0B0D0F] mb-4">
            Case Studies
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Real results from real partnerships
          </p>
        </div>

        <div className="relative bg-white/50 rounded-[14px] p-8 md:p-12 shadow-2xl border border-gray-200 hover:shadow-3xl hover:border-[#C0392B]/20 transition-all duration-700 ease-in-out" style={{ scrollBehavior: 'smooth' }}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 scroll-smooth">
            {visibleStudies.map((study, index) => (
              <div
                key={index}
                className="bg-white rounded-[14px] overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-[#C0392B]/20 hover:-translate-y-3 hover:scale-105 transition-all duration-500 ease-in-out"
              >
                <div
                  className="h-48 bg-cover bg-center transition-all duration-500 ease-in-out hover:scale-110"
                  style={{
                    backgroundImage: `url(${study.image})`,
                    filter: 'brightness(0.85)'
                  }}
                />
                <div className="p-6">
                  <div className="text-[#C0392B] font-bold text-2xl mb-2">
                    {study.metric}
                  </div>
                  <h3 className="text-xl font-semibold text-[#0B0D0F] mb-2">
                    {study.title}
                  </h3>
                  <p className="text-sm text-gray-500 mb-3">{study.location}</p>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    {study.description}
                  </p>
                  <a
                    href="#"
                    className="inline-flex items-center gap-2 text-[#C0392B] font-medium text-sm uppercase tracking-wider hover:gap-4 transition-all duration-500 ease-in-out hover:translate-x-1"
                  >
                    Read More
                    <ArrowRight size={16} className="transition-transform duration-500 ease-in-out" />
                  </a>
                </div>
              </div>
            ))}
          </div>

          <button
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 bg-white rounded-full p-3 shadow-lg hover:shadow-2xl hover:shadow-[#C0392B]/30 hover:bg-[#C0392B] hover:scale-110 transition-all duration-500 ease-in-out group"
            aria-label="Previous case study"
          >
            <ChevronLeft className="text-[#0B0D0F] group-hover:text-white transition-colors duration-500" />
          </button>
          <button
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 bg-white rounded-full p-3 shadow-lg hover:shadow-2xl hover:shadow-[#C0392B]/30 hover:bg-[#C0392B] hover:scale-110 transition-all duration-500 ease-in-out group"
            aria-label="Next case study"
          >
            <ChevronRight className="text-[#0B0D0F] group-hover:text-white transition-colors duration-500" />
          </button>
        </div>

        <div className="flex justify-center gap-3 mt-8">
          {caseStudies.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-2 rounded-full transition-all duration-500 ease-in-out hover:scale-125 ${
                index === currentIndex ? 'bg-[#C0392B] w-10 shadow-lg shadow-[#C0392B]/30' : 'bg-gray-300 w-2 hover:bg-gray-400'
              }`}
              aria-label={`Go to case study ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
