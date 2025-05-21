
import React from 'react';
import { Link } from 'react-router-dom';
import { Play } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0">
        <video 
          autoPlay 
          muted 
          loop 
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/lovable-uploads/3251737-uhd_3840_2160_25fps.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Content */}
      <div className="relative h-full flex items-center justify-center">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 font-heading">
            One Platform to Streamline Your Workforce Management
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-8">
            effortlessly run payroll, oversee global teams, and ensure compliance. All from a single solution
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link 
              to="/contact" 
              className="inline-block bg-[rgb(26,13,171)] text-white px-8 py-4 rounded-lg font-medium hover:bg-opacity-90 transition-all transform hover:scale-105"
            >
              Get Started
            </Link>
            <button className="flex items-center gap-2 text-white hover:text-gray-200 transition-colors">
              <span className="bg-white/20 p-3 rounded-full">
                <Play size={18} className="text-white ml-0.5" />
              </span>
              <span className="font-medium">Watch Video</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
