'use client';

import Link from 'next/link';
import { Rocket } from 'lucide-react';
import { trackCTA, trackButtonClick, trackSectionView } from '@/lib/mixpanel';
import { useEffect } from 'react';

const ClientHeroSection = () => {
  useEffect(() => {
    trackSectionView('Hero Section');
  }, []);

  return (
    <section id="home" className="hero-gradient text-white py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Demo Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm text-white text-sm font-medium mb-8">
            <Rocket className="w-4 h-4 mr-2" />
            Demo Platform - Aesthetic Device Management System
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Aesthetic Device
            <br />
            <span className="text-yellow-300">Management Simplified</span>
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-4xl mx-auto leading-relaxed">
            Save $50K+ annually on equipment management, reduce compliance risks by 90%, 
            and boost staff productivity with our comprehensive platform
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="#pricing"
              className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-200 transform hover:scale-105 shadow-lg"
              onClick={() => {
                trackCTA('View Pricing', 'primary_button', { location: 'hero' });
                trackButtonClick('View Pricing - Hero', 'cta');
              }}
            >
              View Pricing
            </Link>
            <Link
              href="#demo"
              className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-200 transform hover:scale-105"
              onClick={() => {
                trackCTA('Live Demo', 'secondary_button', { location: 'hero' });
                trackButtonClick('Live Demo - Hero', 'cta');
              }}
            >
              Live Demo
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientHeroSection;
