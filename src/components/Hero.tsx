import React from 'react';
import { ArrowRight } from 'lucide-react';
import Button from './ui/Button';

export default function Hero() {
  return (
    <div className="relative min-h-screen pt-20">
      {/* Video Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-black/70 z-10" /> {/* Darkened overlay */}
        <iframe 
          width="100%" 
          height="100%" 
          src="https://www.youtube.com/embed/-_7uaFmzYE0?si=5BqXXzPdynPMZ6J8&autoplay=1&mute=1&loop=1&playlist=-_7uaFmzYE0" 
          title="YouTube video player" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
          className="w-full h-full object-cover"
          style={{ border: 'none', pointerEvents: 'none' }}
        ></iframe>
      </div>

      {/* Content */}
      <div className="relative z-20 flex flex-col items-center justify-center min-h-screen text-white px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-6xl font-bold text-center leading-tight mb-6">
          <span className="block mb-2">Catalysts for Change</span>
          <span className="block mb-2">Champions of Growth</span>
          <span className="block text-yellow-400">Advocates for Empowerment</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-center max-w-3xl mx-auto mb-8 text-gray-200">
          PropLit Consulting: Your partner in skills development, project management, and business startup support.
        </p>

        <Button>
          Get Started
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </Button>
      </div>
    </div>
  );
}