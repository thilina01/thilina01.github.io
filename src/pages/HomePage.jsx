import React from "react";
import { useEffect } from "react";
import PageLayout from "../layouts/PageLayout";
import HeroSection from "../sections/HeroSection";
import Services from "../sections/Services";
import Projects from "../sections/Projects";
import Publications from "../sections/Publications";
import TechStack from "../sections/TechStack";
import ClientCarousel from "../components/ClientCarousel";
import Footer from "../components/Footer";
import { useLocation } from "react-router-dom";

export default function HomePage() {
  const location = useLocation();
  const sectionIds = ["services", "projects", "techstack", "publications", "contact"];

  useEffect(() => {
    const sectionId = location.state?.scrollTo;
    if (sectionId) {
      const scrollToElement = () => {
        const el = document.getElementById(sectionId);
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
          return true;
        }
        return false;
      };

      if (!scrollToElement()) {
        // Retry until element renders (e.g., from dynamic loading)
        const retry = setInterval(() => {
          if (scrollToElement()) clearInterval(retry);
        }, 100);

        setTimeout(() => clearInterval(retry), 3000); // stop retry after 3s
      }
    }
  }, [location.state]);

  return (
    <PageLayout sectionIds={sectionIds}>
      <HeroSection />
      <Services />
      <Projects />
      <TechStack />
      <ClientCarousel />
      <Publications />
      <Footer />
    </PageLayout>
  );
}
