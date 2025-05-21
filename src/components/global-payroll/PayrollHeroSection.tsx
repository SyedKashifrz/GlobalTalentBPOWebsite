
import React from 'react';

const PayrollHeroSection = () => {
  return (
    <section className="relative text-white">
      <div className="absolute inset-0">
        <video autoPlay muted loop playsInline className="w-full h-full object-cover">
          <source src="/lovable-uploads/MPM-V.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-black/60" />
      </div>
      <div className="container-custom relative py-20">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-zinc-50">
            MULTI-COUNTRY, MULTI-COMPANY, MULTI-CURRENCY
          </h1>
          <h2 className="text-2xl md:text-3xl mb-4 text-zinc-50">
            Customizable to any country
          </h2>
          <p className="text-xl mb-8 text-zinc-50">
            Your payroll how you want it, how you need it. Without the Dev-time
          </p>
        </div>
      </div>
    </section>
  );
};

export default PayrollHeroSection;
