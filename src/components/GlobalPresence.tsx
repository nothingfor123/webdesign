import { useState } from 'react';
import { MapPin, Mail, Phone } from 'lucide-react';

const offices = [
  {
    id: 1,
    region: 'Europe',
    city: 'Rotterdam',
    country: 'Netherlands',
    position: { left: '50%', top: '25%' },
    email: 'europe@tiborn.com',
    phone: '+31 10 123 4567'
  },
  {
    id: 2,
    region: 'Middle East',
    city: 'Dubai',
    country: 'UAE',
    position: { left: '58%', top: '42%' },
    email: 'middleeast@tiborn.com',
    phone: '+971 4 123 4567'
  },
  {
    id: 3,
    region: 'Asia Pacific',
    city: 'Singapore',
    country: 'Singapore',
    position: { left: '75%', top: '55%' },
    email: 'asia@tiborn.com',
    phone: '+65 6123 4567'
  }
];

export default function GlobalPresence() {
  const [activeOffice, setActiveOffice] = useState<number | null>(null);

  return (
    <section className="section-padding bg-[#0B0D0F]">
      <div className="container-width">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-semibold text-white mb-4">
            Global Presence
          </h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            Supplying globally with local expertise
          </p>
        </div>

        <div className="relative bg-[#1D232B] rounded-[14px] p-8 md:p-12 overflow-hidden">
          <div className="relative w-full aspect-[2/1] bg-gradient-to-br from-[#2A323C] to-[#1D232B] rounded-[14px]">
            <svg
              viewBox="0 0 1000 500"
              className="w-full h-full opacity-20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M50 250 Q 250 150 450 250 T 850 250"
                stroke="#C0392B"
                strokeWidth="2"
                fill="none"
                opacity="0.3"
              />
              <circle cx="200" cy="200" r="80" fill="#2A323C" opacity="0.5" />
              <circle cx="500" cy="250" r="100" fill="#2A323C" opacity="0.5" />
              <circle cx="750" cy="280" r="90" fill="#2A323C" opacity="0.5" />
            </svg>

            {offices.map((office) => (
              <div
                key={office.id}
                className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group"
                style={{ left: office.position.left, top: office.position.top }}
                onMouseEnter={() => setActiveOffice(office.id)}
                onMouseLeave={() => setActiveOffice(null)}
              >
                <div className="relative">
                  <MapPin
                    className="w-8 h-8 text-[#C0392B] group-hover:scale-125 transition-smooth drop-shadow-lg"
                    fill="#C0392B"
                  />
                  {activeOffice === office.id && (
                    <div className="absolute left-1/2 -translate-x-1/2 top-full mt-2 bg-white rounded-[14px] p-4 shadow-xl z-10 w-64 fade-in">
                      <h4 className="font-semibold text-[#0B0D0F] mb-1">
                        {office.city}, {office.country}
                      </h4>
                      <p className="text-sm text-gray-600 mb-3">{office.region}</p>
                      <div className="space-y-2">
                        <div className="flex items-center gap-2 text-xs text-gray-600">
                          <Mail size={14} className="text-[#C0392B]" />
                          <span>{office.email}</span>
                        </div>
                        <div className="flex items-center gap-2 text-xs text-gray-600">
                          <Phone size={14} className="text-[#C0392B]" />
                          <span>{office.phone}</span>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            {offices.map((office) => (
              <div
                key={office.id}
                className="bg-[#2A323C] p-6 rounded-[14px] hover:bg-[#353D47] transition-smooth"
              >
                <h4 className="font-semibold text-white mb-2">
                  {office.city}, {office.country}
                </h4>
                <p className="text-white/60 text-sm mb-4">{office.region}</p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm text-white/70">
                    <Mail size={16} className="text-[#C0392B]" />
                    <span>{office.email}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-white/70">
                    <Phone size={16} className="text-[#C0392B]" />
                    <span>{office.phone}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
