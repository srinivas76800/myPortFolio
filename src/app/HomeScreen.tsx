import React from 'react'
import Footer from "./Components/Footer";
import HeroSection from "./HeroSction/Hero";
import AboutSection from "./AboutSection/page";
import ContactSection from "./ContactSection/page";
import ScrollTriggered from "./Skills/page";
import PortfolioSection from "./Projects/page";

const HomeScreen = () => {
    return (
        <div className=" overflow-hidden">
            <HeroSection />
            <AboutSection />
            <PortfolioSection />
            {/* <ScrollTriggered /> */}
            <ContactSection />
            <Footer />
        </div>
    )
}

export default HomeScreen