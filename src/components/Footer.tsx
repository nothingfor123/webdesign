import { Mail, Linkedin, Twitter, Facebook } from 'lucide-react';

const footerLinks = {
  company: [
    { label: 'About Us', href: '#' },
    { label: 'Careers', href: '#' },
    { label: 'News & Media', href: '#' }
  ],
  products: [
    { label: 'Valves & Controls', href: '#' },
    { label: 'Pipes & Fittings', href: '#' },
    { label: 'Pumps & Compressors', href: '#' }
  ],
  resources: [
    { label: 'Product Catalog', href: '#' },
    { label: 'Technical Documentation', href: '#' },
    { label: 'Certificates', href: '#' }
  ]
};

export default function Footer() {
  return (
    <footer className="bg-[#0B0D0F] text-white pt-16 pb-8">
      <div className="container-width">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          <div className="lg:col-span-2">
            <div className="tiborn-logo text-3xl tracking-wide mb-4">
              <span className="text-white">TIB</span>
              <span className="text-[#C0392B]">O</span>
              <span className="text-white">RN</span>
            </div>
            <p className="text-white/60 text-sm leading-relaxed mb-6 max-w-sm">
              Industrial Solutions for Energy and Engineering. Trusted supplier of oil & gas equipment worldwide.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full border-2 border-white/20 flex items-center justify-center hover:border-[#C0392B] hover:bg-[#C0392B] transition-smooth"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full border-2 border-white/20 flex items-center justify-center hover:border-[#C0392B] hover:bg-[#C0392B] transition-smooth"
                aria-label="Twitter"
              >
                <Twitter size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full border-2 border-white/20 flex items-center justify-center hover:border-[#C0392B] hover:bg-[#C0392B] transition-smooth"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full border-2 border-white/20 flex items-center justify-center hover:border-[#C0392B] hover:bg-[#C0392B] transition-smooth"
                aria-label="Email"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4 uppercase tracking-wider text-sm">
              Company
            </h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-white/60 text-sm hover:text-white transition-smooth"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4 uppercase tracking-wider text-sm">
              Products
            </h4>
            <ul className="space-y-3">
              {footerLinks.products.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-white/60 text-sm hover:text-white transition-smooth"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4 uppercase tracking-wider text-sm">
              Resources
            </h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-white/60 text-sm hover:text-white transition-smooth"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/50 text-sm">
              © 2025 TIBORN. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-white/50 hover:text-white transition-smooth">
                Privacy Policy
              </a>
              <a href="#" className="text-white/50 hover:text-white transition-smooth">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
