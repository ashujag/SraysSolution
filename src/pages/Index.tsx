import Hero from "@/components/Hero";
import About from "@/components/Why";
// Update the import path if the file is named 'Services.tsx' or located elsewhere
import Service from "@/components/BuisnessService";
import Portfolio from "@/components/Portfolio";
import SkillSection from "@/components/SkillSection";
import Blog from "@/components/Blog";
import KnowledgeSpot from "@/components/KnowledgeSpot";
import Clients from "@/components/Clients";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <div id="home"><Hero /></div>
      <div id="about"><About /></div>
      <div id="service"><Service /></div>
      <div id="portfolio"><Portfolio /></div>
      <div id="skill-section"><SkillSection /></div>
      <div id="blog"><Blog /></div>
      <div id="clients"><Clients /></div>
      <div id="knowledge-spot"><KnowledgeSpot /></div>
      <div id="contact"><Contact /></div>
      <Footer />
    </div>
  );
};

export default Index;
