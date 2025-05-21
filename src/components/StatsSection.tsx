
import React from 'react';

const stats = [
  { number: "9,500+", label: "Successful Placements" },
  { number: "40+", label: "Countries Served" },
  { number: "95%", label: "Client Retention" },
  { number: "13+", label: "Years of Experience" }
];

const StatsSection = () => {
  return (
    <section className="bg-gray-600 text-white py-16">
      <div className="container-custom">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <div key={index} className="p-6">
              <div className="text-4xl md:text-5xl font-bold mb-2">{stat.number}</div>
              <p className="text-gray-100">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
