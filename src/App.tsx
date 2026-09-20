import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import Articles from '@/components/Articles';
import FAQ from '@/components/FAQ';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-ink-950 text-ink-100">
      <Header />
      <main>
        <Hero />
        <Features />
        <Articles />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
