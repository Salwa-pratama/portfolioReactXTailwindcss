import AboutSection from "./components/AboutSection";
import HeaderSection from "./components/HeaderSection";
import PortfolioSection from "./components/PortfolioSection";
import ClientSection from "./components/ClientSections";
import BlogsSection from "./components/BlogsSection";
import ContactSection from "./components/ContactSection";
import FooterSection from "./components/FooterSection";
import Hero from "./components/newComponent/Section/HeroSectionNew";
import AboutSectionNew from "./components/newComponent/Section/AboutSectionNew";

export default function App() {
  return (
    <>
      <div className="container">
        <HeaderSection />
        <Hero />
        <AboutSectionNew />
        <PortfolioSection />
        <ClientSection />
        <BlogsSection />
        <ContactSection />
        <FooterSection />
      </div>
    </>
  );
}
