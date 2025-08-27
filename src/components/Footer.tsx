import React from 'react';
import { Instagram, Twitter, Facebook, Youtube, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 dots-pattern opacity-10"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 py-16">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand section */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <div className="w-12 h-12 bg-pop-orange border-3 border-white rounded-full flex items-center justify-center shadow-[4px_4px_0px_white]">
                <span className="text-white font-pop font-bold text-xl">P</span>
              </div>
              <h3 className="font-pop font-bold text-2xl">
                POP<span className="text-pop-pink">ART</span>
              </h3>
            </div>
            <p className="font-handwritten text-lg text-gray-300 leading-relaxed">
              Where art meets fashion! Creating bold, vibrant pieces that express your unique personality. 🎨
            </p>
            <div className="flex space-x-4">
              <a href="#" className="p-3 bg-pop-pink border-2 border-white rounded-lg hover:bg-pop-purple transition-colors shadow-[3px_3px_0px_white]">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="p-3 bg-pop-blue border-2 border-white rounded-lg hover:bg-pop-purple transition-colors shadow-[3px_3px_0px_white]">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="p-3 bg-pop-orange border-2 border-white rounded-lg hover:bg-pop-red transition-colors shadow-[3px_3px_0px_white]">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="p-3 bg-pop-red border-2 border-white rounded-lg hover:bg-pop-orange transition-colors shadow-[3px_3px_0px_white]">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          {/* Shop links */}
          <div className="space-y-4">
            <h4 className="font-pop font-bold text-xl text-pop-yellow border-b-2 border-pop-yellow pb-2">
              SHOP
            </h4>
            <ul className="space-y-3 font-handwritten text-lg">
              <li><a href="#" className="hover:text-pop-orange transition-colors">T-Shirts & Hoodies</a></li>
              <li><a href="#" className="hover:text-pop-pink transition-colors">Accessories</a></li>
              <li><a href="#" className="hover:text-pop-blue transition-colors">Art Prints</a></li>
              <li><a href="#" className="hover:text-pop-green transition-colors">Sneakers</a></li>
              <li><a href="#" className="hover:text-pop-purple transition-colors">Sale Items</a></li>
            </ul>
          </div>
          
          {/* Support links */}
          <div className="space-y-4">
            <h4 className="font-pop font-bold text-xl text-pop-pink border-b-2 border-pop-pink pb-2">
              SUPPORT
            </h4>
            <ul className="space-y-3 font-handwritten text-lg">
              <li><a href="#" className="hover:text-pop-orange transition-colors">Contact Us</a></li>
              <li><a href="#" className="hover:text-pop-pink transition-colors">Size Guide</a></li>
              <li><a href="#" className="hover:text-pop-blue transition-colors">Shipping Info</a></li>
              <li><a href="#" className="hover:text-pop-green transition-colors">Returns</a></li>
              <li><a href="#" className="hover:text-pop-purple transition-colors">FAQ</a></li>
            </ul>
          </div>
          
          {/* Company links */}
          <div className="space-y-4">
            <h4 className="font-pop font-bold text-xl text-pop-blue border-b-2 border-pop-blue pb-2">
              COMPANY
            </h4>
            <ul className="space-y-3 font-handwritten text-lg">
              <li><a href="#" className="hover:text-pop-orange transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-pop-pink transition-colors">Our Artists</a></li>
              <li><a href="#" className="hover:text-pop-blue transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-pop-green transition-colors">Press</a></li>
              <li><a href="#" className="hover:text-pop-purple transition-colors">Blog</a></li>
            </ul>
          </div>
        </div>
        
        {/* Bottom section */}
        <div className="border-t-2 border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="flex items-center space-x-2 font-handwritten text-lg">
              <span>Made with</span>
              <Heart className="h-5 w-5 text-pop-pink fill-current" />
              <span>© 2024 PopArt Shop. All rights reserved.</span>
            </div>
            
            {/* Legal links */}
            <div className="flex space-x-6 font-handwritten text-lg">
              <a href="#" className="hover:text-pop-orange transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-pop-pink transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-pop-blue transition-colors">Cookies</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;