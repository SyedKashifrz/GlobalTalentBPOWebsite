
import React from 'react';
import { Link } from 'react-router-dom';

const ServicesHero = () => {
  return (
    <section className="relative bg-[rgb(20,34,83)] pt-28 pb-20 lg:pt-36 lg:pb-28 overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" 
             style={{ backgroundImage: "url('https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80')", 
                      opacity: 0.2 }}>
        </div>
      </div>

      <div className="container-custom relative z-10 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
          10+ Years Experience in System<br />Design and Development
        </h1>
        <p className="mt-6 text-lg md:text-xl text-white max-w-3xl mx-auto">
          Trusted by 250+ of the world's top corporates and social enterprises
        </p>
        <Link 
          to="/contact"
          className="mt-8 inline-block bg-[rgb(26,13,171)] text-white px-8 py-4 rounded-lg font-medium hover:bg-opacity-90 transition-all"
        >
          See our solutions
        </Link>
      </div>
    </section>
  );
};

export default ServicesHero;
