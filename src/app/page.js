import AboutSection from "../components/About";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";
import HeroSection from "../components/Hero";
import PortfolioSection from "../components/Photofolio";
import TestimonialsSection from "../components/TestimonialsSection";

export default function Home() {
  return (
    <div className="dark:bg-zinc-900">
    <HeroSection/>
    <PortfolioSection/>
    <AboutSection/>
    <TestimonialsSection/>
    <ContactSection/> 
    <Footer/> 
    </div>
  );
}
