import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import About from '@/components/About';
import Reviews from '@/components/Reviews';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import { Toaster } from '@/components/ui/toaster';

function App() {
  return (
    <>
      <Helmet>
        <title>Nyekile One Penny Half Penny - Professional Cleaning Services Bulawayo</title>
        <meta name="description" content="Professional cleaning services in Bulawayo. Residential, office, deep cleaning & carpet cleaning. Bringing sparkle to every space. Book your cleaning today!" />
        <meta name="keywords" content="cleaning services Bulawayo, professional cleaners Bulawayo, residential cleaning, office cleaning, deep cleaning, carpet cleaning Bulawayo" />
        <meta property="og:title" content="Nyekile One Penny Half Penny - Cleaning Services Bulawayo" />
        <meta property="og:description" content="Bringing Sparkle to Every Space - Professional cleaning services across Bulawayo" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-blue-50">
        <Header />
        <Hero />
        <Services />
        <About />
        <Reviews />
        <Contact />
        <Footer />
        <Toaster />
      </div>
    </>
  );
}

export default App;