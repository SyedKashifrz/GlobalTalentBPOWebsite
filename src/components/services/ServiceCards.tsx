
import React from 'react';
import { Link } from 'react-router-dom';
import { Users, Globe, Briefcase, Calculator, FileText, ArrowRight } from 'lucide-react';

const ServiceCards = () => {
  const serviceCards = [
    {
      icon: <Calculator className="h-10 w-10 text-[rgb(26,13,171)]" />,
      title: "Manage Payroll Services",
      description: "We offer a powerful suite of fully integrated payroll outsourcing services.",
      link: "/services/managed-payroll-services"
    },
    {
      icon: <Users className="h-10 w-10 text-[rgb(26,13,171)]" />,
      title: "Remote Talent Solutions",
      description: "Connect with top global talent for your business needs worldwide.",
      link: "/services/remote-talent-solutions"
    },
    {
      icon: <Briefcase className="h-10 w-10 text-[rgb(26,13,171)]" />,
      title: "Employer of Record EOR",
      description: "A trusted EOR platform for the dynamic world of work, today.",
      link: "/services/employer-of-record"
    },
    {
      icon: <Globe className="h-10 w-10 text-[rgb(26,13,171)]" />,
      title: "Outsourcing Accounting",
      description: "Comprehensive accounting services tailored to your business needs.",
      link: "/services/outsourcing-accounting"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {serviceCards.map((card, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-sm flex flex-col items-center text-center">
              <div className="mb-4">
                {card.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">{card.title}</h3>
              <p className="text-gray-600 mb-6">{card.description}</p>
              <Link 
                to={card.link} 
                className="mt-auto flex items-center text-[rgb(26,13,171)] font-medium group"
              >
                LEARN MORE 
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform">
                  <path d="m9 18 6-6-6-6"/>
                </svg>
              </Link>
            </div>
          ))}
        </div>
        
        {/* Resources Link */}
        <div className="mt-10 text-center">
          <Link 
            to="/resources"
            className="inline-flex items-center text-[rgb(26,13,171)] font-medium hover:underline"
          >
            <FileText className="mr-2 h-5 w-5" />
            Access our resources and attachments
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServiceCards;
