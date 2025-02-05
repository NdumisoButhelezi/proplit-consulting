import React from 'react';
import { ArrowRight } from 'lucide-react';
import Button from './ui/Button';

export default function Hero() {
  return (
    <div className="relative min-h-screen pt-20">
      {/* Video Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-black/70 z-10" /> {/* Darkened overlay */}
    
      </div>

      {/* Content */}
      <div className="relative z-20 flex flex-col items-center justify-center min-h-screen text-white px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-6xl font-bold text-center leading-tight mb-6">
          <span className="block mb-2">Catalysts for Change</span>
          <span className="block mb-2">Champions of Growth</span>
          <span className="block text-yellow-400">Advocates for Empowerment</span>
        </h1>
      
        <p className="text-xl md:text-2xl text-center max-w-3xl mx-auto mb-8 text-gray-200">
          PropLit Consulting: Knowledge | Purpose | Access.
        </p>    
      </div>
    </div>
  );
}