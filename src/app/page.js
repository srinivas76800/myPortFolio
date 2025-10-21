import AboutSection from "../components/About";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";
import HeroSection from "../components/Hero";
import ScrollTriggered from "../components/Skills";
import PortfolioSection from "../components/Photofolio";
import TestimonialsSection from "../components/TestimonialsSection";
import Drag from "../components/Pointer"

export default function Home() {
  return (
    <div className="dark:bg-zinc-900">
      <HeroSection />
      <Drag />
      <PortfolioSection />
      <AboutSection />
      <ScrollTriggered />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
