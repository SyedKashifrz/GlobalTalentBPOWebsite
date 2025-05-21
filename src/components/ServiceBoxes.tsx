import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const ServiceBoxes = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Global Payroll Box */}
          <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-all duration-300 border border-gray-100 transform hover:scale-105 hover:-translate-y-2">
            <div className="mb-6">
              <div className="mb-4">
                <img 
                  src="/lovable-uploads/Global Payroll.jpg" 
                  alt="Global Payroll" 
                  className="w-full h-48 object-cover rounded-lg"
                />
              </div>
              <h3 className="text-2xl font-bold mb-4">Global Payroll</h3>
              <p className="text-gray-600 mb-6">
                Simplify complex processes to ensure accurate and secure employee pay that meets international regulatory compliance.
              </p>
              <Link to="/services/managed-payroll-services" className="text-blue-600 font-semibold hover:text-blue-800 transition-colors duration-300 inline-flex items-center">
                Learn More <ArrowRight size={16} className="ml-2" />
              </Link>
            </div>
          </div>

          {/* Global Mobility Box */}
          <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-all duration-300 border border-gray-100 transform hover:scale-105 hover:-translate-y-2">
            <div className="mb-6">
              <div className="mb-4">
                <img 
                  src="/lovable-uploads/Global Mobility.jpg" 
                  alt="Global Mobility" 
                  className="w-full h-48 object-cover rounded-lg"
                />
              </div>
              <h3 className="text-2xl font-bold mb-4">Global Mobility</h3>
              <p className="text-gray-600 mb-6">
                Enable your employees to work across borders, keeping up with ever-changing laws, tax regulations and employment law.
              </p>
              <Link to="/services/employer-of-record" className="text-blue-600 font-semibold hover:text-blue-800 transition-colors duration-300 inline-flex items-center">
                Learn More <ArrowRight size={16} className="ml-2" />
              </Link>
            </div>
          </div>

          {/* Global HR Box */}
          <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-all duration-300 border border-gray-100 transform hover:scale-105 hover:-translate-y-2">
            <div className="mb-6">
              <div className="mb-4">
                <img 
                  src="/lovable-uploads/Global HR.jpg" 
                  alt="Global HR" 
                  className="w-full h-48 object-cover rounded-lg"
                />
              </div>
              <h3 className="text-2xl font-bold mb-4">Global HR</h3>
              <p className="text-gray-600 mb-6">
                Utilize our HR services to support your compliance, HR projects and gain advisory support.
              </p>
              <Link to="/services/remote-talent-solutions" className="text-blue-600 font-semibold hover:text-blue-800 transition-colors duration-300 inline-flex items-center">
                Learn More <ArrowRight size={16} className="ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceBoxes; 