import { useState } from 'react';
import { MapPin, Mail, Phone } from 'lucide-react';

const office = {
  id: 1,
  region: 'Turkey',
  city: 'Bursa',
  country: 'Türkiye',
  address: 'Konak, Lefkoşe Cd. No:52, 16110 Nilüfer/Bursa',
  position: { left: '50%', top: '50%' },
  email: 'info@tiborn.com.tr',
  phone: '+90 224 123 4567'
};

export default function GlobalPresence() {
  const [activeOffice, setActiveOffice] = useState<boolean>(false);

  return (
    <section id="headquarter" className="section-padding bg-[#0B0D0F]">
      <div className="container-width">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-semibold text-white mb-4">
            Our Headquarter
          </h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
          Our central office serves as the hub of Tiborn's global network.
          </p>
        </div>

        <div className="relative bg-[#1D232B] rounded-[14px] p-8 md:p-12 overflow-hidden shadow-2xl border border-[#2A323C] hover:shadow-[#C0392B]/10 hover:shadow-3xl transition-all duration-700 ease-in-out" style={{ scrollBehavior: 'smooth' }}>
          <div className="relative w-full aspect-[2/1] bg-gradient-to-br from-[#2A323C] to-[#1D232B] rounded-[14px] overflow-hidden shadow-inner transition-all duration-500 ease-in-out">
            <iframe
              src="https://maps.google.com/maps?q=Konak,+Lefko%C5%9Fe+Cd.+No:52,+16110+Nil%C3%BCfer/Bursa,+T%C3%BCrkiye&t=&z=15&ie=UTF8&iwloc=&output=embed"
              className="w-full h-full opacity-20 pointer-events-none"
              style={{ border: 0, filter: 'grayscale(1) invert(1)' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Konak, Nilüfer/Bursa Office Location"
            />

            <div
              className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group z-20"
              style={{ left: office.position.left, top: office.position.top }}
              onMouseEnter={() => setActiveOffice(true)}
              onMouseLeave={() => setActiveOffice(false)}
            >
              <div className="relative">
                <MapPin
                  className="w-10 h-10 text-[#C0392B] group-hover:scale-125 transition-smooth drop-shadow-lg"
                  fill="#C0392B"
                  strokeWidth={2}
                />
                {activeOffice && (
                  <div className="absolute left-1/2 -translate-x-1/2 top-full mt-2 bg-white rounded-[14px] p-4 shadow-xl z-10 w-72 fade-in">
                    <h4 className="font-semibold text-[#0B0D0F] mb-1">
                      {office.city}, {office.country}
                    </h4>
                    <p className="text-sm text-gray-600 mb-3">{office.address}</p>
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
          </div>

          <div className="mt-12 flex justify-center">
            <div className="relative max-w-xl w-full rounded-2xl p-[1px] bg-gradient-to-br from-[#C0392B]/40 via-white/10 to-transparent">
              <div className="rounded-2xl bg-[#1F2832]/80 backdrop-blur-md border border-white/10 p-8">
                <div className="mb-4 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#C0392B]/15 flex items-center justify-center">
                    <MapPin className="text-[#C0392B]" size={18} />
                  </div>
                  <h4 className="text-white text-lg font-semibold">
                    Bursa, Türkiye
                  </h4>
                </div>
                <p className="text-white/70 text-sm mb-5 leading-relaxed">
                  Konak, Lefkoşe Cd. No:52, 16110 Nilüfer/Bursa
                </p>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-sm text-white/80">
                    <Mail size={18} className="text-[#C0392B]" />
                    <span>info@tiborn.com.tr</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-white/80">
                    <Phone size={18} className="text-[#C0392B]" />
                    <span>+90 224 123 4567</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
