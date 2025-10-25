import { lazy, Suspense } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ScrollProgress from './components/ScrollProgress';

// Lazy load components below the fold for better initial load performance
const KPIStrip = lazy(() => import('./components/KPIStrip'));
const ProductsServices = lazy(() => import('./components/ProductsServices'));
const IndustriesServed = lazy(() => import('./components/IndustriesServed'));
const GlobalPresence = lazy(() => import('./components/GlobalPresence'));
// const CaseStudies = lazy(() => import('./components/CaseStudies'));
const ContactForm = lazy(() => import('./components/ContactForm'));
const Footer = lazy(() => import('./components/Footer'));
const StickyQuoteButton = lazy(() => import('./components/StickyQuoteButton'));

// Simple loading fallback
const LoadingFallback = () => (
  <div className="w-full h-32 flex items-center justify-center">
    <div className="w-8 h-8 border-4 border-[#C0392B] border-t-transparent rounded-full animate-spin"></div>
  </div>
);

function App() {
  return (
    <div className="min-h-screen bg-white">
      <ScrollProgress />
      <Header />
      <Hero />
      <Suspense fallback={<LoadingFallback />}>
        <KPIStrip />
        <ProductsServices />
        <IndustriesServed />
        <GlobalPresence />
        {/* <CaseStudies /> */}
        <ContactForm />
        <Footer />
        <StickyQuoteButton />
      </Suspense>
    </div>
  );
}

export default App;
