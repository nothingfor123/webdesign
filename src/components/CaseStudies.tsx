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

        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {visibleStudies.map((study, index) => (
              <div
                key={index}
                className="bg-white rounded-[14px] overflow-hidden card-shadow hover:card-shadow-hover hover:-translate-y-2 transition-smooth"
              >
                <div
                  className="h-48 bg-cover bg-center"
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
                    className="inline-flex items-center gap-2 text-[#C0392B] font-medium text-sm uppercase tracking-wider hover:gap-3 transition-smooth"
                  >
                    Read More
                    <ArrowRight size={16} />
                  </a>
                </div>
              </div>
            ))}
          </div>

          <button
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 bg-white rounded-full p-3 card-shadow hover:card-shadow-hover transition-smooth"
            aria-label="Previous case study"
          >
            <ChevronLeft className="text-[#0B0D0F]" />
          </button>
          <button
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 bg-white rounded-full p-3 card-shadow hover:card-shadow-hover transition-smooth"
            aria-label="Next case study"
          >
            <ChevronRight className="text-[#0B0D0F]" />
          </button>
        </div>

        <div className="flex justify-center gap-2 mt-8">
          {caseStudies.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-smooth ${
                index === currentIndex ? 'bg-[#C0392B] w-8' : 'bg-gray-300'
              }`}
              aria-label={`Go to case study ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
