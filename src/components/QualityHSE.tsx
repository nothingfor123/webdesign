import { Shield, TrendingDown, Calendar, FileCheck } from 'lucide-react';

const metrics = [
  {
    icon: TrendingDown,
    value: '0.00',
    label: 'TRIR Rate',
    description: 'Total Recordable Incident Rate'
  },
  {
    icon: Calendar,
    value: '365+',
    label: 'Days Without Incident',
    description: 'Consecutive safe operations'
  },
  {
    icon: Shield,
    value: 'Triple',
    label: 'ISO Certified',
    description: '9001 / 14001 / 45001'
  }
];

export default function QualityHSE() {
  return (
    <section id="quality-&-hse" className="section-padding bg-white">
      <div className="container-width">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-semibold text-[#0B0D0F] mb-4">
            Quality & HSE
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            At TIBORN, safety and quality define everything we do. We maintain world-class standards and certified management systems.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {metrics.map((metric, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-[#F5F7FA] to-white p-8 rounded-[14px] card-shadow text-center hover:-translate-y-2 transition-smooth"
            >
              <metric.icon className="w-14 h-14 text-[#C0392B] mx-auto mb-6" strokeWidth={1.5} />
              <div className="text-5xl font-bold text-[#0B0D0F] mb-2">
                {metric.value}
              </div>
              <div className="text-xl font-semibold text-[#0B0D0F] mb-2">
                {metric.label}
              </div>
              <p className="text-gray-600 text-sm">
                {metric.description}
              </p>
            </div>
          ))}
        </div>

        <div className="bg-[#1D232B] p-8 md:p-12 rounded-[14px] text-center">
          <FileCheck className="w-16 h-16 text-[#C0392B] mx-auto mb-6" strokeWidth={1.5} />
          <h3 className="text-2xl font-semibold text-white mb-4">
            Certification Documents
          </h3>
          <p className="text-white/70 mb-8 max-w-2xl mx-auto">
            Download our quality management and HSE certification documents
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-[#0B0D0F] px-6 py-3 rounded-[14px] font-semibold hover:bg-gray-100 transition-smooth">
              ISO 9001 Certificate
            </button>
            <button className="bg-white text-[#0B0D0F] px-6 py-3 rounded-[14px] font-semibold hover:bg-gray-100 transition-smooth">
              ISO 14001 Certificate
            </button>
            <button className="bg-white text-[#0B0D0F] px-6 py-3 rounded-[14px] font-semibold hover:bg-gray-100 transition-smooth">
              ISO 45001 Certificate
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
