const kpis = [
  { value: '25+', label: 'Years Experience' },
  { value: '500+', label: 'Projects Delivered' },
  { value: '50+', label: 'Countries Served' },
  { value: '98%', label: 'Client Satisfaction' }
];

export default function KPIStrip() {
  return (
    <section className="relative bg-gradient-to-br from-[#0B0D0F] via-[#1D232B] to-[#0B0D0F] py-16 border-y border-white/5 overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMiI+PHBhdGggZD0iTTM2IDM0djItaDJ2LTJoLTJ6bTAgNHYyaDJ2LTJoLTJ6bS0yIDJ2Mmgy di0yaC0yem0wLTR2Mmgydi0yaC0yem0yLTJ2LTJoLTJ2Mmgyem0tMi0ydi0yaDJ2MmgtMnptMi00di0yaC0ydjJoMnptLTItMnYtMmgydjJoLTJ6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-30"></div>
      <div className="container-width relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {kpis.map((kpi, index) => (
            <div 
              key={index} 
              className="text-center group"
            >
              <div className="relative inline-block mb-3 overflow-visible">
                <div className="absolute inset-0 bg-gradient-to-r from-[#C0392B] to-[#E74C3C] blur-lg opacity-20 group-hover:opacity-30 transition-opacity duration-500 scale-75"></div>
                <div className="relative text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300 group-hover:scale-105 transition-transform duration-500">
                  {kpi.value}
                </div>
              </div>
              <div className="text-sm md:text-base text-gray-400 font-medium uppercase tracking-wider group-hover:text-white transition-colors duration-300">
                {kpi.label}
              </div>
              <div className="mt-3 h-1 w-12 mx-auto bg-gradient-to-r from-[#C0392B] to-[#E74C3C] rounded-full opacity-50 group-hover:opacity-100 group-hover:w-20 transition-all duration-500"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
