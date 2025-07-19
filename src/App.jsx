import './App.css';
import Hero from './sections/Hero/Hero';
import Projects from './sections/Projects/Projects';
import Skills from './sections/Skills/Skills';
import Contact from './sections/Contact/Contact';
import Footer from './sections/Footer/Footer';
import ParticlesBackground from './components/ParticlesBackground';

function App() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-white">
      <ParticlesBackground />

      <div className="relative z-10">
        <Hero />
        <br />
        <Projects />
        <br />
        <Skills />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;
