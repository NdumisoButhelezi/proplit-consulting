import React from 'react';
import Navbar from './components/layout/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Impact from './components/Impact';
import Contact from './components/Contact';
import ChatBot from './components/chat/ChatBot';

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <section id="home">
          <Hero />
        </section>
        <section id="services">
          <Services />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="impact">
          <Impact />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </main>
      <ChatBot />
    </div>
  );
}

export default App;







