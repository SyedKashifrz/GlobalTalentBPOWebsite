
import React from 'react';
import { Link } from 'react-router-dom';

const SimplifyBanner = () => {
  return (
    <section className="py-12 text-white bg-sky-400">
      <div className="container-custom text-center bg-sky-400">
        <h2 className="text-2xl font-bold mb-6">Ready to simplify your global payroll?</h2>
        <Link to="/contact" className="inline-flex items-center bg-white text-[rgb(29,33,77)] px-6 py-3 rounded-md font-medium hover:bg-gray-100 transition-colors">
          Contact Us Today
        </Link>
      </div>
    </section>
  );
};

export default SimplifyBanner;
