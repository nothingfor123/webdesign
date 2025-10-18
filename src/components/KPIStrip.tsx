import { Award, Globe, TrendingUp, Shield } from 'lucide-react';

const kpis = [
  { icon: Award, label: '25+ Years of Excellence', value: '25+' },
  { icon: Globe, label: '40+ Countries Served', value: '40+' },
  { icon: TrendingUp, label: '10K+ Projects Delivered', value: '10K+' },
  { icon: Shield, label: 'ISO 9001 / 14001 / 45001 Certified', value: 'ISO' }
];

export default function KPIStrip() {
  return (
    <section className="bg-white py-12 border-b border-gray-200">
      <div className="container-width">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {kpis.map((kpi, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center group"
            >
              <kpi.icon className="w-10 h-10 text-[#C0392B] mb-3 group-hover:scale-110 transition-smooth" strokeWidth={1.5} />
              <p className="text-sm text-gray-600 leading-relaxed">{kpi.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
