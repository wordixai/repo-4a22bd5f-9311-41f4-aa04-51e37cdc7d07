import React from 'react';
import PopButton from './PopButton';
import { Sparkles, Zap, Heart } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-pop-orange via-pop-pink to-pop-purple overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        {/* Large dots pattern */}
        <div className="absolute inset-0 dots-pattern opacity-20"></div>
        
        {/* Floating elements */}
        <div className="absolute top-20 left-10 w-16 h-16 bg-pop-yellow border-4 border-black rounded-full shadow-[6px_6px_0px_black] float-pop"></div>
        <div className="absolute top-40 right-20 w-12 h-12 bg-pop-blue border-4 border-black rounded-lg shadow-[4px_4px_0px_black] bounce-pop"></div>
        <div className="absolute bottom-40 left-20 w-20 h-20 bg-pop-green border-4 border-black rounded-full shadow-[8px_8px_0px_black] float-pop"></div>
        <div className="absolute bottom-20 right-10 w-14 h-14 bg-pop-purple border-4 border-black rounded-lg shadow-[5px_5px_0px_black] bounce-pop"></div>
        
        {/* Comic book style elements */}
        <div className="absolute top-32 right-40 transform rotate-12">
          <div className="bg-white border-4 border-black rounded-lg p-2 shadow-[6px_6px_0px_black]">
            <Sparkles className="h-8 w-8 text-pop-orange" />
          </div>
        </div>
        
        <div className="absolute bottom-32 left-40 transform -rotate-12">
          <div className="bg-white border-4 border-black rounded-lg p-2 shadow-[6px_6px_0px_black]">
            <Zap className="h-8 w-8 text-pop-pink" />
          </div>
        </div>
      </div>
      
      {/* Main content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 py-20 flex items-center min-h-screen">
        <div className="w-full grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Text content */}
          <div className="space-y-8">
            {/* Main heading */}
            <div className="space-y-4">
              <h1 className="font-pop font-bold text-6xl lg:text-8xl text-white leading-tight">
                POP!
                <br />
                <span className="text-pop-yellow">ART</span>
                <br />
                <span className="text-black">SHOP</span>
              </h1>
              <div className="bg-white border-4 border-black p-4 rounded-lg shadow-[8px_8px_0px_black] inline-block transform rotate-2">
                <p className="font-handwritten text-2xl text-black">
                  Where Art Meets Street Style! 🎨
                </p>
              </div>
            </div>
            
            {/* Description */}
            <p className="font-handwritten text-2xl text-white max-w-lg leading-relaxed">
              Discover bold, vibrant fashion & art pieces that scream personality! 
              From comic-inspired tees to pop art prints - we've got your vibe covered!
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <PopButton variant="yellow" size="lg" className="font-bold">
                🛍️ SHOP NOW
              </PopButton>
              <PopButton variant="pink" size="lg" className="font-bold">
                🎨 VIEW COLLECTIONS
              </PopButton>
            </div>
            
            {/* Social proof */}
            <div className="bg-white border-4 border-black p-4 rounded-lg shadow-[6px_6px_0px_black] inline-block">
              <div className="flex items-center space-x-2">
                <div className="flex -space-x-2">
                  <div className="w-8 h-8 bg-pop-orange border-2 border-black rounded-full"></div>
                  <div className="w-8 h-8 bg-pop-pink border-2 border-black rounded-full"></div>
                  <div className="w-8 h-8 bg-pop-blue border-2 border-black rounded-full"></div>
                </div>
                <span className="font-handwritten text-lg font-semibold">
                  5,000+ Happy Pop Art Lovers! ❤️
                </span>
              </div>
            </div>
          </div>
          
          {/* Right side - Hero illustration */}
          <div className="relative">
            <div className="bg-white border-8 border-black rounded-3xl p-8 shadow-[16px_16px_0px_black] transform -rotate-3 hover:rotate-0 transition-transform duration-500">
              <div className="aspect-square bg-gradient-to-br from-pop-yellow via-pop-orange to-pop-pink rounded-2xl border-4 border-black relative overflow-hidden">
                {/* Halftone pattern overlay */}
                <div className="absolute inset-0 halftone-pattern opacity-30"></div>
                
                {/* Central graphic */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center space-y-4">
                    <div className="w-32 h-32 bg-white border-6 border-black rounded-full flex items-center justify-center shadow-[8px_8px_0px_black] mx-auto">
                      <Heart className="h-16 w-16 text-pop-pink fill-current" />
                    </div>
                    <div className="bg-white border-4 border-black rounded-lg p-3 shadow-[4px_4px_0px_black]">
                      <span className="font-pop font-bold text-2xl text-black">BOOM!</span>
                    </div>
                  </div>
                </div>
                
                {/* Comic book style elements */}
                <div className="absolute top-4 left-4 bg-pop-blue border-3 border-black rounded-lg p-2 shadow-[3px_3px_0px_black] transform rotate-12">
                  <span className="font-pop font-bold text-white text-sm">WOW!</span>
                </div>
                
                <div className="absolute bottom-4 right-4 bg-pop-green border-3 border-black rounded-lg p-2 shadow-[3px_3px_0px_black] transform -rotate-12">
                  <span className="font-pop font-bold text-white text-sm">COOL!</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;