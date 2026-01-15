import React from 'react';
import { motion } from 'framer-motion';
import { Award, Users, Clock, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

// 1. IMPORT YOUR TEAM IMAGE
import teamImg from '../assets/team.jpg';

const About = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const values = [
    {
      icon: Award,
      title: 'Excellence',
      description: 'Pursuing greatness over profit. We believe that if you do good work, success follows.'
    },
    {
      icon: Users,
      title: 'Inclusivity & Teamwork',
      description: 'Every voice matters. We foster an environment where every team member feels included and valued.'
    },
    {
      icon: ShieldCheck,
      title: 'Integrity',
      description: 'We adhere to strong moral principles. Honesty and transparency are the foundation of our reputation.'
    },
    {
      icon: Clock,
      title: 'Punctuality',
      description: 'In a fast-moving world, we value your time. We execute every task promptly and responsibly.'
    }
  ];

  return (
    <section id="about" className="py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        
        {/* TOP SECTION: COMPANY HISTORY & IMAGE */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 bg-[#006600]/10 text-[#006600] px-4 py-2 rounded-full mb-6 border border-[#006600]/20">
              <Award className="w-4 h-4 text-[#006600]" />
              <span className="text-sm font-bold uppercase tracking-wider">Established April 1997</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 leading-tight">
              A Legacy of <br />
              <span className="bg-gradient-to-r from-[#006600] to-[#b8b800] bg-clip-text text-transparent">
                Cleanliness & Integrity
              </span>
            </h2>

            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Nyekile One Penny Half Penny (Pvt) Ltd is a premier service provider specializing in cleaning, landscaping, fumigation, and waste management across Bulawayo.
            </p>
            
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              We are deeply committed to empowering our community while delivering ISO 9001:2015 certified quality standards. Since our founding in 1997, we have evolved into a high-profile industry player trusted by healthcare, commercial, and industrial sectors.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="text-[#006600] w-5 h-5" />
                <span className="font-semibold text-gray-700">ISO 9001:2015 Certified</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="text-[#006600] w-5 h-5" />
                <span className="font-semibold text-gray-700">SHEQ Compliant</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="text-[#006600] w-5 h-5" />
                <span className="font-semibold text-gray-700">25+ Years Experience</span>
              </div>
            </div>

            <div className="mt-10">
              {/* UPDATED BUTTON: Reverted to gradient style */}
              <Button 
                onClick={scrollToContact}
                className="bg-gradient-to-r from-[#006600] to-[#FFFF00] hover:opacity-90 text-white px-8 py-6 text-lg shadow-lg rounded-xl"
              >
                Work With Us
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* 2. REPLACED IMAGE WITH TEAM.JPG */}
            <div className="relative rounded-[2rem] overflow-hidden shadow-2xl h-[550px] border-4 border-white bg-gray-100">
              <img 
                src={teamImg} 
                alt="Nyekile Professional Team" 
                className="w-full h-full object-cover"
                loading="lazy"
              />
              
              {/* Mission Statement Overlay */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#006600] via-[#006600]/80 to-transparent p-8 pt-20 text-white">
                <h3 className="text-xl font-bold mb-2 text-[#FFFF00]">Our Mission</h3>
                <p className="text-sm leading-relaxed font-medium">
                  To be the leading service provider of choice, enhancing aesthetic beauty and hygiene by blending art and nature to promote good health for all.
                </p>
              </div>
            </div>

            {/* Decorative element using brand yellow */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-[#FFFF00] rounded-2xl -z-10 opacity-30" />
          </motion.div>
        </div>

        {/* VALUES GRID */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4 text-[#006600]">Our Core Values</h3>
            <div className="h-1 w-20 bg-[#FFFF00] mx-auto mb-4"></div>
            <p className="text-gray-600">The principles that guide every interaction and every service we provide.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:border-[#FFFF00] transition-all duration-300 group">
                <div className="w-14 h-14 bg-[#006600]/5 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#006600] transition-colors">
                  <value.icon className="w-7 h-7 text-[#006600] group-hover:text-[#FFFF00]" />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default About;