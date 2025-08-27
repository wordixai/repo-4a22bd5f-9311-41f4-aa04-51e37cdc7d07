import React from 'react';
import PopButton from './PopButton';
import { Mail, Gift, Star } from 'lucide-react';

const Newsletter: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-pop-pink via-pop-purple to-pop-blue relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-20 h-20 bg-pop-yellow border-4 border-black rounded-full shadow-[8px_8px_0px_black] float-pop"></div>
        <div className="absolute top-20 right-20 w-16 h-16 bg-pop-orange border-4 border-black rounded-lg shadow-[6px_6px_0px_black] bounce-pop"></div>
        <div className="absolute bottom-20 left-20 w-24 h-24 bg-pop-green border-4 border-black rounded-full shadow-[10px_10px_0px_black] float-pop"></div>
        <div className="absolute bottom-10 right-10 w-18 h-18 bg-white border-4 border-black rounded-lg shadow-[7px_7px_0px_black] bounce-pop flex items-center justify-center">
          <Star className="h-8 w-8 text-pop-orange fill-current" />
        </div>
      </div>
      
      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        {/* Header */}
        <div className="mb-12">
          <div className="inline-block bg-white border-4 border-black rounded-2xl p-6 shadow-[12px_12px_0px_black] mb-6 transform -rotate-2">
            <Mail className="h-12 w-12 text-pop-orange mx-auto mb-4" />
            <h2 className="font-pop font-bold text-4xl lg:text-5xl text-black">
              JOIN THE
              <span className="text-pop-pink"> POP </span>
              SQUAD!
            </h2>
          </div>
          
          <p className="font-handwritten text-2xl text-white max-w-2xl mx-auto leading-relaxed">
            Get exclusive access to new drops, special discounts, and pop art inspiration straight to your inbox! 
          </p>
        </div>
        
        {/* Benefits */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white border-4 border-black rounded-xl p-6 shadow-[6px_6px_0px_black] transform rotate-1 hover:rotate-0 transition-transform">
            <Gift className="h-8 w-8 text-pop-orange mx-auto mb-4" />
            <h3 className="font-pop font-bold text-lg text-black mb-2">10% OFF</h3>
            <p className="font-handwritten text-gray-600">First purchase discount</p>
          </div>
          
          <div className="bg-white border-4 border-black rounded-xl p-6 shadow-[6px_6px_0px_black] transform -rotate-1 hover:rotate-0 transition-transform">
            <Star className="h-8 w-8 text-pop-pink mx-auto mb-4 fill-current" />
            <h3 className="font-pop font-bold text-lg text-black mb-2">EARLY ACCESS</h3>
            <p className="font-handwritten text-gray-600">New collections first</p>
          </div>
          
          <div className="bg-white border-4 border-black rounded-xl p-6 shadow-[6px_6px_0px_black] transform rotate-1 hover:rotate-0 transition-transform">
            <Mail className="h-8 w-8 text-pop-blue mx-auto mb-4" />
            <h3 className="font-pop font-bold text-lg text-black mb-2">INSIDER TIPS</h3>
            <p className="font-handwritten text-gray-600">Style & art inspiration</p>
          </div>
        </div>
        
        {/* Newsletter form */}
        <div className="bg-white border-4 border-black rounded-2xl p-8 shadow-[12px_12px_0px_black] max-w-2xl mx-auto">
          <form className="flex flex-col md:flex-row gap-4">
            <input 
              type="email" 
              placeholder="Enter your email address..."
              className="flex-1 px-6 py-4 border-3 border-black rounded-lg font-handwritten text-lg focus:outline-none focus:shadow-[4px_4px_0px_black] transition-all"
              required
            />
            <PopButton variant="orange" size="lg" type="submit">
              SUBSCRIBE! 🎉
            </PopButton>
          </form>
          
          <p className="font-handwritten text-sm text-gray-500 mt-4">
            No spam, just pure pop art goodness! Unsubscribe anytime. ✌️
          </p>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;