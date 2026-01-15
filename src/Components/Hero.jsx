import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ChevronRight, ShieldCheck, Sparkles } from 'lucide-react';

// 1. IMPORT YOUR TEAM IMAGE
import teamImg from '../assets/team.jpg';

const Hero = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-white">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-br from-[#006600]/5 to-transparent rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gradient-to-tr from-[#FFFF00]/10 to-transparent rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      <div className="container mx-auto px-4 z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* TEXT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 bg-[#006600]/10 text-[#006600] px-4 py-2 rounded-full mb-6">
              <ShieldCheck className="w-4 h-4" />
              <span className="text-sm font-semibold tracking-wide uppercase">ISO 9001:2015 Certified Excellence</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-gray-900 leading-[1.1]">
              Expert Cleaning & <br />
              <span className="bg-gradient-to-r from-[#006600] to-[#FFFF00] bg-clip-text text-transparent">
                Environmental Care
              </span>
            </h1>

            <p className="text-xl text-gray-600 mb-8 max-w-lg leading-relaxed">
              Enhancing aesthetic beauty and hygiene since 1997. We blend art and nature to promote good health for all stakeholders across Bulawayo.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={() => scrollToSection('services')}
                className="bg-gradient-to-r from-[#006600] to-[#FFFF00] hover:opacity-90 text-white px-8 py-7 text-lg rounded-2xl shadow-xl flex items-center gap-2 group"
              >
                Our Services
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <Button 
                variant="outline"
                onClick={() => scrollToSection('contact')}
                className="border-2 border-[#006600] text-[#006600] hover:bg-[#006600]/5 px-8 py-7 text-lg rounded-2xl"
              >
                Get a Quote
              </Button>
            </div>

            <div className="mt-10 flex items-center gap-6 text-sm text-gray-500 font-medium">
              <div className="flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-[#FFFF00]" />
                <span>25+ Years Experience</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-[#006600]" />
                <span>SHEQ Compliant</span>
              </div>
            </div>
          </motion.div>

          {/* IMAGE SECTION */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative z-10 rounded-[2.5rem] overflow-hidden shadow-2xl border-8 border-white">
              {/* 2. USE THE TEAM IMAGE HERE */}
              <img 
                src={teamImg} 
                alt="Nyekile Professional Team" 
                className="w-full h-[600px] object-cover"
              />
              
              {/* Experience Badge */}
              <div className="absolute bottom-8 left-8 bg-white/90 backdrop-blur-md p-6 rounded-3xl shadow-2xl border border-white/50">
                <p className="text-[#006600] text-4xl font-bold mb-1">1997</p>
                <p className="text-gray-600 text-sm font-semibold uppercase tracking-wider">Established</p>
              </div>
            </div>

            {/* Background decorative square */}
            <div className="absolute -bottom-6 -right-6 w-full h-full bg-gradient-to-br from-[#006600] to-[#FFFF00] rounded-[2.5rem] -z-10 opacity-20" />
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;