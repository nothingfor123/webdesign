import { Drill, Factory, Truck, Package, ShoppingCart, Wrench } from 'lucide-react';

const services = [
  {
    icon: Drill,
    title: 'Exploration and Drilling',
    description: 'This service involves finding and drilling new oil and gas reserves.'
  },
  {
    icon: Factory,
    title: 'Production and Refining',
    description: 'This service involves processing crude oil into refined products such as gasoline, and diesel fuel.'
  },
  {
    icon: Truck,
    title: 'Transport and Logistics',
    description: 'Moving oil and gas safely and efficiently from production sites to distribution centers.'
  },
  {
    icon: Package,
    title: 'Equipment and Services',
    description: 'Supplying essential equipment and services to the oil and gas industry.'
  },
  {
    icon: ShoppingCart,
    title: 'Procurement Services',
    description: 'Acquiring necessary goods and services for efficient oil and gas operations.'
  },
  {
    icon: Wrench,
    title: 'Maintenance Service',
    description: 'Ensuring optimal performance and longevity of oil and gas equipment.'
  }
];

export default function ProductsServices() {
  return (
    <section id="services" className="section-padding bg-[#F5F7FA]">
      <div className="container-width">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-semibold text-[#0B0D0F] mb-4">
            Services
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive solutions for the oil and gas industry
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="relative bg-gradient-to-br from-white to-gray-50/50 p-8 rounded-3xl shadow-lg hover:shadow-2xl hover:shadow-[#C0392B]/20 hover:-translate-y-3 hover:scale-105 transition-all duration-500 ease-in-out cursor-pointer group border border-gray-100/50 overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#C0392B]/5 to-transparent rounded-full blur-3xl group-hover:scale-150 transition-transform duration-500"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-[#C0392B]/10 to-[#E74C3C]/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                  <service.icon className="w-8 h-8 text-[#C0392B]" strokeWidth={2} />
                </div>
                <h3 className="text-xl font-bold text-[#0B0D0F] mb-3 group-hover:text-[#C0392B] transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
