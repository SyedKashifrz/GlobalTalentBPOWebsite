import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const VideoHeroSection = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(error => {
        console.error("Video autoplay error:", error);
      });
    }
  }, []);
  
  return (
    <section className="relative h-[80vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <video ref={videoRef} autoPlay muted loop playsInline className="w-full h-full object-cover">
          <source src="/lovable-uploads/3251737-uhd_3840_2160_25fps.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-black/60" />
      </div>

      <div className="relative h-full flex items-center justify-center">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-zinc-50 mb-6 font-heading lg:text-5xl">
            One Platform to Streamline Your Workforce Management
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-8">
            effortlessly run payroll, oversee global teams, and ensure compliance. All from a single solution
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/services/" className="inline-block bg-[rgb(26,13,171)] text-white px-8 py-4 rounded-lg font-medium hover:bg-opacity-90 transition-all transform hover:scale-105">
              Discover Our Services
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoHeroSection;
