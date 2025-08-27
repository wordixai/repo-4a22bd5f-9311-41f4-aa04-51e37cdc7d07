import React from 'react';
import { ShoppingBag, Search, Heart, User } from 'lucide-react';
import PopButton from './PopButton';

const Header: React.FC = () => {
  return (
    <header className="bg-white border-b-4 border-black relative overflow-hidden">
      {/* Background dots pattern */}
      <div className="absolute inset-0 dots-pattern opacity-10"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-12 h-12 bg-pop-orange border-3 border-black rounded-full flex items-center justify-center shadow-[4px_4px_0px_black]">
              <span className="text-white font-pop font-bold text-xl">P</span>
            </div>
            <h1 className="font-pop font-bold text-3xl text-black">
              POP<span className="text-pop-pink">ART</span>
            </h1>
          </div>
          
          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="font-handwritten text-xl font-semibold text-black hover:text-pop-orange transition-colors">
              Shop
            </a>
            <a href="#" className="font-handwritten text-xl font-semibold text-black hover:text-pop-pink transition-colors">
              Collections
            </a>
            <a href="#" className="font-handwritten text-xl font-semibold text-black hover:text-pop-yellow transition-colors">
              Artists
            </a>
            <a href="#" className="font-handwritten text-xl font-semibold text-black hover:text-pop-blue transition-colors">
              About
            </a>
          </nav>
          
          {/* Actions */}
          <div className="flex items-center space-x-4">
            {/* Search */}
            <div className="relative hidden md:block">
              <input 
                type="text" 
                placeholder="Search for cool stuff..."
                className="w-64 px-4 py-2 border-3 border-black rounded-lg font-handwritten text-lg pl-10 focus:outline-none focus:shadow-[4px_4px_0px_black] transition-all"
              />
              <Search className="absolute left-3 top-3 h-5 w-5 text-gray-500" />
            </div>
            
            {/* Icon buttons */}
            <button className="p-2 border-3 border-black rounded-lg bg-pop-yellow hover:bg-pop-orange transition-colors shadow-[3px_3px_0px_black] hover:shadow-[4px_4px_0px_black] hover:-translate-y-1">
              <Heart className="h-5 w-5" />
            </button>
            
            <button className="p-2 border-3 border-black rounded-lg bg-pop-pink hover:bg-pop-purple transition-colors shadow-[3px_3px_0px_black] hover:shadow-[4px_4px_0px_black] hover:-translate-y-1">
              <User className="h-5 w-5 text-white" />
            </button>
            
            <button className="p-2 border-3 border-black rounded-lg bg-pop-orange hover:bg-pop-red transition-colors shadow-[3px_3px_0px_black] hover:shadow-[4px_4px_0px_black] hover:-translate-y-1 relative">
              <ShoppingBag className="h-5 w-5 text-white" />
              <span className="absolute -top-2 -right-2 bg-pop-yellow text-black text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center border-2 border-black">
                3
              </span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;