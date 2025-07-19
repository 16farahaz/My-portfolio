import './App.css'
import Hero from './sections/Hero/Hero';
import Projects from './sections/Projects/Projects';
import Skills from './sections/Skills/Skills';
import Contact from './sections/Contact/Contact';
import Footer from './sections/Footer/Footer';
import ParticlesBackground from './ParticlesBackground';




function App() {


  return (
    <>
     <ParticlesBackground id="particles" />
     <Hero/>
     <br />
     <Projects/>
     <br />
     <Skills/>
     <Contact/>
     <Footer/>
     
    </>
  )
}

export default App
