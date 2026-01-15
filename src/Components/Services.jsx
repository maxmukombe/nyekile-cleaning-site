import React from 'react';
import { motion } from 'framer-motion';
import { 
  Sparkles, 
  Trash2, 
  Bug, 
  Scissors, 
  Trees, 
  CheckCircle2 
} from 'lucide-react';
import { Button } from '@/components/ui/button';

// 1. IMPORT ONLY THE GARDEN IMAGE
import gardenImg from '../assets/garden.jpg';

const Services = () => {
  const services = [
    {
      icon: Sparkles,
      title: 'Professional Cleaning',
      description: 'High-quality solutions for corporate, industrial, and residential spaces.',
      details: ['Daily Office & Ablution Cleaning', 'Vacuuming & Floor Care', 'Carpet & Upholstery', 'High-rise Window Cleaning'],
      image: gardenImg // ONLY CHANGE: UPDATED TO gardenImg
    },
    {
      icon: Trash2,
      title: 'Waste Management',
      description: 'Environmentally responsible waste segregation and removal services.',
      details: ['Rubble Removal', 'Waste Segregation & Collection', 'Sanitary Bin Provision', 'Responsible Disposal'],
      image: gardenImg // ONLY CHANGE: UPDATED TO gardenImg
    },
    {
      icon: Bug,
      title: 'Fumigation & Pest Control',
      description: 'Eliminate pests and prevent infestations with safe, eco-friendly solutions.',
      details: ['General Pest Control', 'Industrial & Warehouse Fumigation', 'Agricultural Fumigation', 'Safe Disinfection Solutions'],
      image: gardenImg // ONLY CHANGE: UPDATED TO gardenImg
    },
    {
      icon: Scissors,
      title: 'Grounds Maintenance',
      description: 'Keeping outdoor spaces safe, clean, and functional for homes and businesses.',
      details: ['Lawn Cutting & Fertilization', 'Paved Area Scrubbing', 'Drain Cleaning', 'Debris & Litter Control'],
      image: gardenImg // ONLY CHANGE: UPDATED TO gardenImg
    },
    {
      icon: Trees,
      title: 'Landscaping Services',
      description: 'Enhancing outdoor environments through professional design and upkeep.',
      details: ['Garden & Yard Upkeep', 'Irrigation & Water Features', 'Architectural Planning', 'Paving & Yard Clearance'],
      image: gardenImg // ONLY CHANGE: UPDATED TO gardenImg
    }
  ];

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }} 
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-[#006600] to-[#FFFF00] bg-clip-text text-transparent">
              Our Core Services
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive environmental and facility solutions tailored for Bulawayo.
          </p>
        </motion.div>

        {/* Updated Grid: Centers the bottom row when there are 5 items */}
        <div className="flex flex-wrap justify-center gap-8">
          {services.map((service, index) => (
            <motion.div 
              key={index} 
              initial={{ opacity: 0, y: 30 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true }} 
              transition={{ delay: index * 0.1 }} 
              className="w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.5rem)] max-w-sm flex"
            >
              <div className="bg-white rounded-3xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 flex flex-col w-full">
                <div className="relative mb-6 rounded-2xl overflow-hidden h-48 bg-gray-100">
                  <img 
                    alt={service.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                    src={service.image}
                  />
                  <div className="absolute top-4 left-4 bg-gradient-to-r from-[#006600] to-[#FFFF00] p-3 rounded-xl shadow-lg">
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-gray-800 mb-3 leading-tight">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6 text-sm">
                  {service.description}
                </p>

                <ul className="space-y-2 mb-8 flex-grow">
                  {service.details.map((detail, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-gray-700">
                      <CheckCircle2 className="w-4 h-4 text-[#006600] mt-1 flex-shrink-0" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>

                <Button 
                  onClick={scrollToContact} 
                  className="w-full bg-gradient-to-r from-[#006600] to-[#FFFF00] hover:opacity-90 text-white font-bold py-6 rounded-xl transition-all shadow-md"
                >
                  Request a Quote
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;