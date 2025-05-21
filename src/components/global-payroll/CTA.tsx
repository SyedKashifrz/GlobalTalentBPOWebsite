
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const CTA = () => {
  return (
    <div className="text-center my-16">
      <Link to="/contact" className="inline-flex items-center bg-[rgb(29,33,77)] text-white px-6 py-4 rounded-md hover:bg-[rgb(40,45,100)] transition-colors">
        Our Global Employment Solutions 
        <ArrowRight className="ml-2 h-5 w-5" />
      </Link>
    </div>
  );
};

export default CTA;
