import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import HeaderSection from "./components/HeaderSection";
import PortfolioSection from "./components/PortfolioSection";
import ClientSection from "./components/ClientSections";
import BlogsSection from "./components/BlogsSection";
import ContactSection from "./components/ContactSection";
import FooterSection from "./components/FooterSection";

export default function App() {
  return (
    <>
      <HeaderSection />
      <HeroSection />
      <AboutSection />
      <PortfolioSection />
      <ClientSection />
      <BlogsSection />
      <ContactSection />
      <FooterSection />
    </>
  );
}
