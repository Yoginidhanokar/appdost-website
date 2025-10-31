import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Stats from './components/Stats';
import About from './components/About';
import Services from './components/Services';
import Process from './components/Process';
import Projects from './components/Projects';
import OpenSource from './components/OpenSource';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Stats />
      <About />
      <Services />
      <Process />
      <Projects />
      <OpenSource />
      <Footer />
    </div>
  );
}

export default App;