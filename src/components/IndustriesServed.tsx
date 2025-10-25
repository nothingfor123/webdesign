import { Drill, Factory, Zap, Waves } from 'lucide-react';

const industries = [
  {
    icon: Drill,
    title: 'Oil & Gas Exploration',
    description: 'Supplying critical equipment for upstream operations and field development.'
  },
  {
    icon: Factory,
    title: 'Refining & Processing',
    description: 'Complete solutions for refinery operations and petrochemical processing.'
  },
  {
    icon: Zap,
    title: 'Power Generation',
    description: 'Specialized equipment for power plants and energy generation facilities.'
  },
  {
    icon: Waves,
    title: 'Offshore Operations',
    description: 'Marine-grade equipment and solutions for offshore platforms and vessels.'
  }
];

const partners = [
  'Shell', 'BP', 'TotalEnergies', 'Chevron', 'ExxonMobil', 'Saudi Aramco'
];

export default function IndustriesServed() {
  return (
    <>
      <section className="section-padding bg-white">
        <div className="container-width">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-semibold text-[#0B0D0F] mb-4">
              Industries Served
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Trusted by leading energy companies worldwide
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {industries.map((industry, index) => (
              <div
                key={index}
                className="relative bg-gradient-to-br from-white to-[#F5F7FA] p-8 rounded-2xl border border-gray-200/50 hover:border-[#C0392B]/50 transition-all duration-500 group shadow-sm hover:shadow-xl hover:shadow-[#C0392B]/10 hover:-translate-y-2"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#C0392B]/0 via-[#C0392B]/0 to-[#C0392B]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
                <div className="relative z-10">
                  <industry.icon
                    className="w-12 h-12 text-[#C0392B] mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500"
                    strokeWidth={1.5}
                  />
                  <h3 className="text-lg font-bold text-[#0B0D0F] mb-3 group-hover:text-[#C0392B] transition-colors duration-300">
                    {industry.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {industry.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#1D232B]">
        <div className="container-width">
          <h3 className="text-2xl font-semibold text-white text-center mb-4">
            Global Partners
          </h3>
          <p className="text-white/70 text-center mb-12 max-w-2xl mx-auto">
            Collaborating with industry leaders to deliver exceptional results
          </p>
          <div className="flex flex-wrap justify-center items-center gap-12">
            {partners.map((partner, index) => (
              <div
                key={index}
                className="text-white/60 text-xl font-semibold hover:text-white transition-smooth"
              >
                {partner}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
