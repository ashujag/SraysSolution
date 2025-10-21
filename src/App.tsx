import './App.css'
import Blog from './components/Blog'
import BuisnessService from './components/BuisnessService'
import Clients from './components/Clients'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Hero from './components/Hero'
import KnowledgeSpot from './components/KnowledgeSpot'
import Portfolio from './components/Portfolio'
import VisionMission from './components/VisionMission'
import WhyUs from './components/Why'
import AboutUs from './components/About'
import StatsSection from './components/StatsSection'
import SkillsSection from './components/SkillSection'

function App() {
  return (
    <>
      <Hero />
      <VisionMission />
      <AboutUs />
      <WhyUs />
      <BuisnessService />
      <StatsSection />
      <Portfolio />
      <SkillsSection />
      <KnowledgeSpot />
      <Clients />
      <Blog />
      <Contact />
      <Footer />
    </>
  );
}

export default App
