import type { CSSProperties } from 'react';
import { Drill, Factory, Zap, Waves } from 'lucide-react';
import accentureLogo from '../assets/logo/accenture.png';
import adnocLogo from '../assets/logo/adnoc.png';
import bestPickLogo from '../assets/logo/best-pick.png';
import cruxocmLogo from '../assets/logo/cruxocm.png';
import enercapLogo from '../assets/logo/enercap.png';
import energyFutureLogo from '../assets/logo/energy_future.jpg';
import eniLogo from '../assets/logo/eni.png';
import honeywellLogo from '../assets/logo/Honeywell.png';
import kentLogo from '../assets/logo/kent.jpg';
import mcdermottLogo from '../assets/logo/McDermott.jpg';
import menaTerminalsLogo from '../assets/logo/mena-terminals.jpeg';
import petronasLogo from '../assets/logo/petronas.png';
import visionLogo from '../assets/logo/vision.webp';

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

const partnerLogos = [
  { name: 'Honeywell', src: honeywellLogo },
  { name: 'Accenture', src: accentureLogo },
  { name: 'ADNOC', src: adnocLogo },
  { name: 'Best Pick', src: bestPickLogo },
  { name: 'CruxOCM', src: cruxocmLogo },
  { name: 'Enercap', src: enercapLogo },
  { name: 'Energy Future', src: energyFutureLogo },
  { name: 'ENI', src: eniLogo },
  { name: 'Kent', src: kentLogo },
  { name: 'McDermott', src: mcdermottLogo },
  { name: 'MENA Terminals', src: menaTerminalsLogo },
  { name: 'Petronas', src: petronasLogo },
  { name: 'Vision', src: visionLogo }
];

type MarqueeTrackStyle = CSSProperties & { '--marquee-duration'?: string };

const marqueeRows = [
  partnerLogos.filter((_, index) => index % 2 === 0),
  partnerLogos.filter((_, index) => index % 2 !== 0)
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

      <section id="corporate" className="relative py-20 bg-[#05080C] overflow-hidden">
        <div
          className="pointer-events-none absolute inset-0 opacity-50"
          style={{
            background:
              'radial-gradient(circle at top, rgba(192,57,43,0.35), transparent 50%), radial-gradient(circle at bottom, rgba(13,17,23,0.9), rgba(5,8,12,1))'
          }}
        />
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
        <div className="container-width relative">
          <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] items-start">
            <div>
              <p className="text-xs tracking-[0.4em] text-white/50 uppercase mb-4">
                Global Partners
              </p>
              <h3 className="text-3xl md:text-4xl font-semibold text-white mb-6 leading-tight">
                Modern alliances with world-class operators and technology firms
              </h3>
              <p className="text-white/70 text-lg leading-relaxed max-w-2xl">
                We collaborate with future-focused companies across energy, petrochemical and
                industrial verticals to keep critical infrastructure online and optimized.
              </p>
              <div className="flex flex-wrap gap-3 mt-10">
                {['Critical spares supply', 'Lifecycle support', 'Integrated engineering', 'On-site expertise'].map(
                  (highlight) => (
                    <span
                      key={highlight}
                      className="rounded-full border border-white/15 px-4 py-2 text-sm text-white/70 backdrop-blur-sm"
                    >
                      {highlight}
                    </span>
                  )
                )}
              </div>
            </div>

            <div className="rounded-[32px] border border-white/10 bg-white/5 backdrop-blur-xl p-6 md:p-8 shadow-2xl shadow-black/30">
              <div className="grid grid-cols-2 gap-6 text-white">
                {[
                  { value: '40+', label: 'Strategic alliances' },
                  { value: '28', label: 'Countries supported' },
                  { value: '120+', label: 'Mission-critical assets' },
                  { value: '24/7', label: 'Partner response' }
                ].map((stat) => (
                  <div key={stat.label}>
                    <p className="text-3xl font-semibold">{stat.value}</p>
                    <p className="text-sm text-white/60 mt-1">{stat.label}</p>
                  </div>
                ))}
              </div>
              <div className="mt-8 text-white/70 text-sm leading-relaxed">
                Dedicated partner success managers and engineering teams coordinate every deliverable—from
                procurement and logistics to onsite commissioning—so our partners can stay focused on performance.
              </div>
            </div>
          </div>

          <div className="mt-14 space-y-6">
            {marqueeRows.map((row, rowIndex) => {
              const trackStyle: MarqueeTrackStyle = {
                '--marquee-duration': rowIndex === 0 ? '26s' : '32s'
              };

              return (
                <div key={rowIndex} className="partner-marquee-wrapper">
                  <div className="partner-marquee-gradient partner-marquee-gradient--left" />
                  <div className="partner-marquee-gradient partner-marquee-gradient--right" />
                  <div
                    className={`partner-track ${rowIndex === 1 ? 'partner-track--reverse' : ''}`}
                    style={trackStyle}
                  >
                    {[...row, ...row].map((logo, index) => (
                      <div key={`${logo.name}-${index}`} className="partner-logo-tile">
                        <div className="partner-logo">
                          <img src={logo.src} alt={`${logo.name} logo`} />
                        </div>
                        <span>{logo.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
