import React from 'react'
import Footer from "./Components/Footer";
import HeroSection from "./HeroSction/Hero";
import AboutSection from "./AboutSection/page";
import ContactSection from "./ContactSection/page";
import ScrollTriggered from "./Skills/page";
import PortfolioSection from "./Projects/page";
import Drag from "./Components/Pointer"

const HomeScreen = () => {
    return (
        <div className=" overflow-hidden">
            <HeroSection />
            {/* <Drag /> */}
            <AboutSection />
            <PortfolioSection />
            {/* <ScrollTriggered /> */}
            {/* <ContactSection /> */}
            <Footer />
        </div>
    )
}

export default HomeScreen