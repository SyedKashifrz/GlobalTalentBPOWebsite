
import React from 'react';

const ClientsTickerSection = () => {
  const clientLogos = [
    {
      src: "public/lovable-uploads/LG.png",
      alt: "LG Logo"
    },
    {
      src: "/lovable-uploads/Siemens.png",
      alt: "Siemens Logo"
    },
    {
      src: "/lovable-uploads/AlsviorGlobal_OfficialLogo_Horizontal_NoBG-300x75.png",
      alt: "Alsvior Global Logo"
    },
    {
      src: "public/lovable-uploads/ADIB U.png",
      alt: "ADIB Logo"
    },
    {
      src: "public/lovable-uploads/Johnson Controls.png",
      alt: "Johnson Controls Logo"
    },
    {
      src: "public/lovable-uploads/Trane.png",
      alt: "Trane Logo"
    },
    {
      src: "public/lovable-uploads/Wade Adams.png",
      alt: "Wade Adams Logo"
    },
    {
      src: "public/lovable-uploads/icon.png",
      alt: "Brayton Global Logo"
    },
    {
      src: "public/lovable-uploads/Al-Dobowi-logo-small-16Oct18.png",
      alt: "Al Dobowi Logo"
    },
    {
      src: "public/lovable-uploads/Etisalat.jpeg",
      alt: "Etisalat Logo"
    },
    {
      src: "public/lovable-uploads/Zayed Sports City.png",
      alt: "Zayed Sports City Logo"
    },
    {
      src: "public/lovable-uploads/logo.png",
      alt: "CBT Logo"
    },
  ];

  return (
    <div className="overflow-hidden bg-white py-10 md:py-16">
      <div className="container mx-auto">
        <h3 className="text-center text-xl font-semibold text-gray-700 mb-8">Trusted by global businesses</h3>
      </div>
      <div className="inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
        <div className="flex items-center justify-center md:justify-start [&_img]:max-w-none animate-infinite-scroll">
          {clientLogos.map((logo, index) => (
            <img 
              key={index}
              src={logo.src} 
              alt={logo.alt} 
              className="mx-8 h-[75px] w-[300px] object-contain"
            />
          ))}
        </div>
        <div className="flex items-center justify-center md:justify-start [&_img]:max-w-none animate-infinite-scroll">
          {clientLogos.map((logo, index) => (
            <img 
              key={index}
              src={logo.src} 
              alt={logo.alt} 
              className="mx-8 h-[75px] w-[300px] object-contain"
            />
          ))}
        </div>
      </div>
      <style>
        {`
          .animate-infinite-scroll {
            animation: infinite-scroll 25s linear infinite;
          }
          @keyframes infinite-scroll {
            from { transform: translateX(0); }
            to { transform: translateX(-100%); }
          }
        `}
      </style>
    </div>
  );
};

export default ClientsTickerSection;
