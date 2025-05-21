import React from 'react';

const clientLogos = [
  {
    src: '/lovable-uploads/AlsviorGlobal_OfficialLogo_Horizontal_NoBG-300x75.png',
    alt: 'Alsvior Global Logo',
  },
  {
    src: '/lovable-uploads/Musanada U.jpeg',
    alt: 'Emirates Palace Abu Dhabi Logo',
  },
  {
    src: '/lovable-uploads/LG.png',
    alt: 'LG Logo',
  },
  {
    src: '/lovable-uploads/Johnson Controls.png',
    alt: 'Johnson Controls Logo',
  },
  {
    src: '/lovable-uploads/Siemens.png',
    alt: 'Siemens Logo',
  },
];

const ServicesClients = () => {
  return (
    <section className="py-16 text-center">
      <div className="container-custom">
        <h2 className="text-2xl font-bold mb-12">Trusted by <span className="text-[rgb(140,29,64)]">many</span>, across the globe.</h2>
        <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-16">
          {clientLogos.map((logo, idx) => (
            <div key={idx} className="grayscale hover:grayscale-0 transition-all">
              <div className="h-16 w-40 bg-white rounded flex items-center justify-center shadow-md">
                <img src={logo.src} alt={logo.alt} className="max-h-12 max-w-[150px] object-contain" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesClients;
