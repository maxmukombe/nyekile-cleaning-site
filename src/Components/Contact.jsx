import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Send, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { toast } from '@/components/ui/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      return;
    }

    toast({
      title: "Message Sent! 🎉",
      description: "We'll get back to you within 24 hours. Thank you for choosing Nyekile!",
    });

    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const handleWhatsApp = () => {
    const message = encodeURIComponent("Hi! I'd like to book a cleaning service with Nyekile One Penny Half Penny.");
    window.open(`https://wa.me/263772942952?text=${message}`, '_blank');
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-emerald-50 via-white to-blue-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            {/* Heading Gradient Updated */}
            <span className="bg-gradient-to-r from-[#006600] to-[#FFFF00] bg-clip-text text-transparent">
              Get In Touch
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
             Experience the Nyekile difference. Contact us for a free quote now
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="bg-white rounded-2xl p-8 shadow-xl">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Send Us a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name">Full Name *</Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Your name"
                    className="mt-2"
                  />
                </div>

                <div>
                  <Label htmlFor="email">Email Address *</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="your.email@example.com"
                    className="mt-2"
                  />
                </div>

                <div>
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+263 77 123 4567"
                    className="mt-2"
                  />
                </div>

                <div>
                  <Label htmlFor="message">Message *</Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us about your cleaning needs..."
                    rows={5}
                    className="mt-2"
                  />
                </div>

                {/* Button Gradient Updated */}
                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-[#006600] to-[#FFFF00] hover:opacity-90 text-lg py-6"
                >
                  <Send className="w-5 h-5 mr-2" />
                  Send Message
                </Button>
              </form>

              <div className="mt-6">
                <Button
                  onClick={handleWhatsApp}
                  variant="outline"
                  className="w-full border-2 border-[#006600] text-[#006600] hover:bg-green-50 text-lg py-6"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Chat on WhatsApp
                </Button>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="bg-white rounded-2xl p-8 shadow-xl">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                   {/* Icon Background Gradient Updated */}
                  <div className="bg-gradient-to-br from-[#006600] to-[#FFFF00] p-3 rounded-xl">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Address</h4>
                    <p className="text-gray-600">30 Joshua MN Nkomo Street & First Ave, Bulawayo,Zimbabwe,</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  {/* Icon Background Gradient Updated */}
                  <div className="bg-gradient-to-br from-[#006600] to-[#FFFF00] p-3 rounded-xl">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Phone</h4>
                    <p className="text-gray-600">+263 775 559 742</p>
                    <p className="text-gray-600">+263 772 942 952</p>
                    <p className="text-gray-600">+263 773 600 556</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  {/* Icon Background Gradient Updated */}
                  <div className="bg-gradient-to-br from-[#006600] to-[#FFFF00] p-3 rounded-xl">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Email</h4>
                    <p className="text-gray-600">nyekile@nyekile.co.zw</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl overflow-hidden shadow-xl h-[400px]">
              <iframe
                src="https://maps.google.com/maps?q=-20.145797,28.584521&hl=en&z=17&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Nyekile One Penny Half Penny Location"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;