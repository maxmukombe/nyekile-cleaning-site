import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote, ShieldCheck } from 'lucide-react';

const Reviews = () => {
  const testimonials = [
    {
      name: "Facility Manager",
      sector: "Telecommunications Sector",
      content: "Nyekile has been a reliable partner since our early transition from PTC. Their commitment to cleaning and maintenance across our Bulawayo branches has been consistent for over two decades.",
      rating: 5
    },
    {
      name: "Compliance Officer",
      sector: "Healthcare Facility",
      content: "In a medical environment, hygiene is non-negotiable. Nyekile’s ISO 9001:2015 certified processes and SHEQ compliance give us the peace of mind that our facility meets every health standard.",
      rating: 5
    },
    {
      name: "Operations Director",
      sector: "Commercial Real Estate",
      content: "Their integrated approach to landscaping and waste management has completely transformed our corporate grounds. They blend art and nature exactly as their mission promises.",
      rating: 5
    }
  ];

  return (
    <section id="reviews" className="py-24 bg-white relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#006600]/20 to-transparent" />
      
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Trusted Across Zimbabwe</h2>
            <div className="flex justify-center mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 text-[#FFFF00] fill-[#FFFF00]" />
              ))}
            </div>
            <p className="text-lg text-gray-600 italic">
              "A clean Environment is a Healthy Environment" — Our motto reflects the feedback we receive from the high-profile industries we serve.
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-gray-50 p-8 rounded-3xl border border-gray-100 relative group hover:shadow-2xl transition-all duration-300"
            >
              <Quote className="absolute top-6 right-6 w-10 h-10 text-[#006600]/10 group-hover:text-[#006600]/20" />
              
              <div className="flex gap-1 mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-[#006600] fill-[#006600]" />
                ))}
              </div>

              <p className="text-gray-700 mb-8 leading-relaxed relative z-10">
                "{review.content}"
              </p>

              <div className="flex items-center gap-4 border-t border-gray-200 pt-6">
                <div className="w-12 h-12 bg-[#006600] rounded-full flex items-center justify-center text-white font-bold text-xl">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">{review.name}</h4>
                  <p className="text-sm text-[#006600] font-medium">{review.sector}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* TRUST BADGE */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-20 flex flex-wrap justify-center items-center gap-8 opacity-50 grayscale hover:grayscale-0 transition-all duration-500"
        >
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-8 h-8" />
            <span className="text-xl font-bold">ISO 9001:2015</span>
          </div>
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-8 h-8" />
            <span className="text-xl font-bold">SHEQ CERTIFIED</span>
          </div>
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-8 h-8" />
            <span className="text-xl font-bold">EST. 1997</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Reviews;