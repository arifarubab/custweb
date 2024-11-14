// src/app/page.tsx
import Header from './components/Header';
import Hero from './components/Hero';
import Footer from './components/Footer';
import Image from 'next/image';

export default function Home() {
  return (
    <div>
      {/* Fixed Header at the top */}
      <Header />

      {/* Hero Section below Header */}
      <main>
        <Hero />
        {/* Other sections of your portfolio page can go here */}

        <Footer />
        {/* Other sections of your portfolio page can go here */}
      
      </main>
    </div>
  );
}
