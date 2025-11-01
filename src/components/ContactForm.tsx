import { useState } from 'react';
import { MapPin, Mail, Phone, Clock, Upload, CheckCircle } from 'lucide-react';

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [fileName, setFileName] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFileName(e.target.files[0].name);
    }
  };

  return (
    <section id="contact" className="section-padding bg-white">
      <div className="container-width">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-semibold text-[#0B0D0F] mb-4">
            Get in Touch
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Request a quote or contact our team for expert consultation
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold text-[#0B0D0F] mb-8">
              Contact Information
            </h3>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-[#C0392B]/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="text-[#C0392B]" size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-[#0B0D0F] mb-1">
                    Head Office
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Plaza, Baris St., Lefkose Ave.<br />
                    16110 Bursa, Turkiye
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-[#C0392B]/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="text-[#C0392B]" size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-[#0B0D0F] mb-1">
                    Email Address
                  </h4>
                  <p className="text-gray-600 text-sm">
                    info@tiborn.com.tr<br />
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-[#C0392B]/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="text-[#C0392B]" size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-[#0B0D0F] mb-1">
                    Phone Number
                  </h4>
                  <p className="text-gray-600 text-sm">
                    +90 543 897 6683<br />
                    +90 543 897 5928
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-[#C0392B]/10 flex items-center justify-center flex-shrink-0">
                  <Clock className="text-[#C0392B]" size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-[#0B0D0F] mb-1">
                    Working Hours
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Monday–Friday: 09:00 – 17:00 (UTC +3, Türkiye Standard Time)<br />
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="bg-[#F5F7FA] p-8 rounded-[14px]">
              {submitted ? (
                <div className="text-center py-12 fade-in">
                  <CheckCircle className="w-16 h-16 text-[#C0392B] mx-auto mb-6" />
                  <h3 className="text-2xl font-semibold text-[#0B0D0F] mb-3">
                    Thank You!
                  </h3>
                  <p className="text-gray-600">
                    Our team will contact you soon.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-semibold text-[#0B0D0F] mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-3 rounded-[14px] border border-gray-300 focus:border-[#C0392B] focus:outline-none transition-smooth"
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-[#0B0D0F] mb-2">
                      Company *
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-3 rounded-[14px] border border-gray-300 focus:border-[#C0392B] focus:outline-none transition-smooth"
                      placeholder="Company Name"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-[#0B0D0F] mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        required
                        className="w-full px-4 py-3 rounded-[14px] border border-gray-300 focus:border-[#C0392B] focus:outline-none transition-smooth"
                        placeholder="john@company.com"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-[#0B0D0F] mb-2">
                        Phone
                      </label>
                      <input
                        type="tel"
                        className="w-full px-4 py-3 rounded-[14px] border border-gray-300 focus:border-[#C0392B] focus:outline-none transition-smooth"
                        placeholder="+31 10 123 4567"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-[#0B0D0F] mb-2">
                      Message *
                    </label>
                    <textarea
                      required
                      rows={5}
                      className="w-full px-4 py-3 rounded-[14px] border border-gray-300 focus:border-[#C0392B] focus:outline-none transition-smooth resize-none"
                      placeholder="Tell us about your requirements..."
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-[#C0392B] text-white py-4 rounded-[14px] font-semibold uppercase tracking-wider hover:bg-[#A93226] transition-smooth hover:shadow-xl hover:shadow-[#C0392B]/20"
                  >
                    Send Inquiry
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
