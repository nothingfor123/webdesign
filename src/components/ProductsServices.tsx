import { Wrench, Gauge, Zap, Droplets, ShieldCheck, Cog } from 'lucide-react';

const services = [
  {
    icon: Wrench,
    title: 'Pipes & Fittings',
    description: 'Comprehensive range of industrial pipes, fittings, and connectors for all applications.'
  },
  {
    icon: Gauge,
    title: 'Valves & Controls',
    description: 'High-performance valves and control systems for precise flow management.'
  },
  {
    icon: Droplets,
    title: 'Pumps & Compressors',
    description: 'Reliable pumping and compression equipment for demanding environments.'
  },
  {
    icon: Zap,
    title: 'Electrical & Automation',
    description: 'Advanced electrical systems and automation solutions for industrial operations.'
  },
  {
    icon: ShieldCheck,
    title: 'Safety Solutions',
    description: 'Complete safety equipment and systems to protect personnel and assets.'
  },
  {
    icon: Cog,
    title: 'Technical Services',
    description: 'Expert technical support, maintenance, and consulting services.'
  }
];

export default function ProductsServices() {
  return (
    <section id="services" className="section-padding bg-[#F5F7FA]">
      <div className="container-width">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-semibold text-[#0B0D0F] mb-4">
            Products & Services
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive industrial solutions for the energy sector
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-[14px] card-shadow hover:card-shadow-hover hover:-translate-y-2 transition-smooth cursor-pointer"
            >
              <service.icon className="w-12 h-12 text-[#C0392B] mb-6" strokeWidth={1.5} />
              <h3 className="text-xl font-semibold text-[#0B0D0F] mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                {service.description}
              </p>
              <a
                href="#"
                className="text-[#C0392B] font-medium text-sm uppercase tracking-wider hover:underline"
              >
                Download Datasheet
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
