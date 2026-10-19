import React from 'react';
import { Header } from './sections/Header';
import { Hero } from './sections/Hero';
import { ValueProps } from './sections/ValueProps';
import { Services } from './sections/Services';
import { ProductPresentation } from './sections/ProductPresentation';
import { Customizer } from './sections/Customizer';
import { Footer } from './sections/Footer';
import { MeshBackground } from './components/MeshBackground';

function App() {
  return (
    <div className="min-h-screen relative">
      <MeshBackground />
      <Header />
      <main>
        <Hero />
        <ValueProps />
        <Services />
        <ProductPresentation />
        <Customizer />
      </main>
      <Footer />
    </div>
  );
}

export default App;
