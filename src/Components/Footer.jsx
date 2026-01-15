import React from 'react';
import { Mail, Phone, MapPin, ShieldCheck, Facebook, Linkedin } from 'lucide-react';
// Import your logo from the assets folder
import logo from '../assets/logo.png'; 

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-white text-gray-800 pt-16 pb-8 border-t border-gray-100">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* BRAND SECTION */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 flex items-center justify-center bg-gray-50 rounded-lg p-1 border border-gray-100">
                <img src={logo} alt="Nyekile Logo" className="w-full h-full object-contain" />
              </div>
              <div>
                <span className="text-xl font-bold bg-gradient-to-r from-[#006600] to-[#b8b800] bg-clip-text text-transparent">
                  Nyekile
                </span>
                <p className="text-[10px] text-gray-500 uppercase tracking-tighter font-semibold">One Penny Half Penny</p>
              </div>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed italic">
              "A clean Environment is a Healthy Environment"
            </p>
            <div className="flex items-center gap-2 text-[#006600]">
              <ShieldCheck className="w-5 h-5" />
              <span className="text-xs font-bold uppercase tracking-wider">ISO 9001:2015 Certified</span>
            </div>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-[#006600] border-b-2 border-[#FFFF00] pb-2 inline-block">Quick Links</h4>
            <ul className="space-y-3">
              {['Home', 'Services', 'About', 'Reviews', 'Contact'].map((item) => (
                <li key={item}>
                  <button
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className="text-gray-600 hover:text-[#006600] transition-colors text-sm font-medium"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* CONTACT INFO */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-[#006600] border-b-2 border-[#FFFF00] pb-2 inline-block">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex gap-3 items-start">
                <MapPin className="w-5 h-5 text-[#006600] shrink-0 mt-1" />
                <span className="text-sm text-gray-600">
                  30 Joshua MN Nkomo Street & First Ave,<br />
                  Bulawayo, Zimbabwe
                </span>
              </li>
              <li className="flex gap-3 items-center">
                <Phone className="w-5 h-5 text-[#006600] shrink-0" />
                <span className="text-sm text-gray-600">+263 775 559 742 / +263 772 942 953</span>
              </li>
              <li className="flex gap-3 items-center">
                <Mail className="w-5 h-5 text-[#006600] shrink-0" />
                <span className="text-sm text-gray-600">info@nyekile.co.zw</span>
              </li>
            </ul>
          </div>

          {/* SOCIAL & ESTABLISHED */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-[#006600] border-b-2 border-[#FFFF00] pb-2 inline-block">Follow Us</h4>
            <div className="flex gap-4 mb-6">
              <a href="#" className="p-2 bg-[#006600]/5 rounded-lg hover:bg-[#006600] hover:text-white transition-all text-[#006600]">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-[#006600]/5 rounded-lg hover:bg-[#006600] hover:text-white transition-all text-[#006600]">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
            <div className="text-xs text-gray-400 font-bold uppercase tracking-widest">
              <p>Registered in Zimbabwe</p>
              <p className="text-[#006600]">Established 1997</p>
            </div>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-xs">
            © {currentYear} Nyekile One Penny Half Penny (Pvt) Ltd. All rights reserved.
          </p>
          <div className="flex gap-4">
            <span className="text-[10px] font-bold text-gray-300 uppercase">SHEQ Compliant</span>
            <span className="text-[10px] font-bold text-gray-300 uppercase">Quality Guaranteed</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;