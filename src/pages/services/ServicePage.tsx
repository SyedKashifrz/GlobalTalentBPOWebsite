
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

interface ServicePageProps {
  title: string;
  description: string;
  features: string[];
  benefits: string[];
  icon: React.ReactNode;
  additionalContent?: React.ReactNode;
}

const ServicePage: React.FC<ServicePageProps> = ({ 
  title, 
  description, 
  features, 
  benefits, 
  icon,
  additionalContent
}) => {
  return (
    <main className="pt-28">
      <div className="container-custom py-16">
        <Link to="/services" className="inline-flex items-center text-[rgb(31,31,31)] hover:text-gray-800 mb-8">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Services
        </Link>
        
        <div className="max-w-4xl">
          <div className="flex items-center gap-4 mb-6">
            <div className="text-gray-800 bg-gray-100 p-3 rounded-lg">
              {icon}
            </div>
            <h1 className="text-4xl font-bold text-gray-800">{title}</h1>
          </div>
          
          <p className="text-lg text-[rgb(31,31,31)] mb-12">
            {description}
          </p>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-semibold text-gray-800 mb-6">Key Features</h2>
              <ul className="space-y-4">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <div className="mr-3 mt-1">
                      <div className="h-2 w-2 bg-gray-800 rounded-full" />
                    </div>
                    <span className="text-[rgb(31,31,31)]">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-gray-800 mb-6">Benefits</h2>
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <div className="mr-3 mt-1">
                      <div className="h-2 w-2 bg-gray-800 rounded-full" />
                    </div>
                    <span className="text-[rgb(31,31,31)]">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {additionalContent}

          <div className="mt-12 bg-gray-50 rounded-xl p-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Ready to Get Started?</h2>
            <p className="text-[rgb(31,31,31)] mb-6">
              Contact us to learn more about how our {title} service can benefit your organization.
            </p>
            <Link 
              to="/contact" 
              className="inline-flex items-center bg-gray-800 text-white px-6 py-3 rounded-lg hover:bg-gray-700 transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ServicePage;
