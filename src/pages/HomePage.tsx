import React, { useState, useEffect } from "react";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { HeroSection } from "../components/HeroSection";
import { FeaturesGrid } from "../components/FeaturesGrid";
import { HowItWorks } from "../components/HowItWorks";
import { ImpactSection } from "../components/ImpactSection";
import { HowToUse } from "../components/HowToUse";
import { Testimonials } from "../components/Testimonials";
import FAQComponent from "../components/FAQComponent"; // Importación correcta

const HomePage: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleStart = () => {
    window.location.href = "https://t.me/GuiaDiagonosticaIABot";
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Header isScrolled={isScrolled} handleStart={handleStart} />
      <HeroSection handleStart={handleStart} />
      <FeaturesGrid />
      <HowItWorks />
      <ImpactSection />
      <HowToUse />
      <Testimonials />
      <FAQComponent /> {/* Uso del componente FAQ */}
      <Footer />
    </div>
  );
};

export default HomePage;