import Header from './components/Header';
import Hero from './components/Hero';
import KPIStrip from './components/KPIStrip';
import ProductsServices from './components/ProductsServices';
import IndustriesServed from './components/IndustriesServed';
import QualityHSE from './components/QualityHSE';
import GlobalPresence from './components/GlobalPresence';
import CaseStudies from './components/CaseStudies';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import ScrollProgress from './components/ScrollProgress';
import StickyQuoteButton from './components/StickyQuoteButton';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <ScrollProgress />
      <Header />
      <Hero />
      <KPIStrip />
      <ProductsServices />
      <IndustriesServed />
      <QualityHSE />
      <GlobalPresence />
      <CaseStudies />
      <ContactForm />
      <Footer />
      <StickyQuoteButton />
    </div>
  );
}

export default App;
