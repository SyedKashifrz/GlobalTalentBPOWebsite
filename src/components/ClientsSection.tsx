
import React from 'react';

const clients = [
  "Microsoft",
  "Google",
  "Amazon",
  "IBM",
  "Oracle",
  "Adobe",
  "Cisco",
  "Dell",
];

const ClientsSection = () => {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl font-bold text-blue-950 mb-4">
            Trusted by Leading Companies
          </h2>
          <p className="text-lg text-blue-700">
            We work with forward-thinking businesses across various industries
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
          {clients.map((client, index) => (
            <div key={index} className="flex items-center justify-center">
              <span className="text-2xl font-semibold text-gray-400">{client}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;
