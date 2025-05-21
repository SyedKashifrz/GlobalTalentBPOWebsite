
import React from 'react';
import { Link } from 'react-router-dom';
import { Search, Users, Globe, Clock, Briefcase, LineChart, ArrowRight, Calculator, Shield, Workflow } from 'lucide-react';

const services = [
  {
    icon: <Search className="h-8 w-8" />,
    title: 'Executive Search',
    description: 'Strategic recruitment of senior executives and leadership positions tailored to your organization\'s needs.',
    link: '/services/executive-search'
  },
  {
    icon: <Users className="h-8 w-8" />,
    title: 'Talent Acquisition',
    description: 'Full-cycle recruitment services to identify, attract, and hire top talent across industries and roles.',
    link: '/services/talent-acquisition'
  },
  {
    icon: <Globe className="h-8 w-8" />,
    title: 'Global Recruitment',
    description: 'Access to international talent pools and specialized expertise in cross-border hiring compliance.',
    link: '/services/global-recruitment'
  },
  {
    icon: <Clock className="h-8 w-8" />,
    title: 'Contract Staffing',
    description: 'Flexible workforce solutions with specialized temporary professionals for project-based needs.',
    link: '/services/contract-staffing'
  },
  {
    icon: <Briefcase className="h-8 w-8" />,
    title: 'HR Consulting',
    description: 'Expert guidance on recruitment strategies, employer branding, and talent retention initiatives.',
    link: '/services/hr-consulting'
  },
  {
    icon: <LineChart className="h-8 w-8" />,
    title: 'Talent Analytics',
    description: 'Data-driven insights to optimize your hiring process and workforce planning strategies.',
    link: '/services/talent-analytics'
  },
  {
    icon: <Calculator className="h-8 w-8" />,
    title: 'Payroll Management',
    description: 'Comprehensive payroll services including processing, tax compliance, and reporting for your global workforce.',
    link: '/services/payroll-management'
  }
];

const ServicesSection = () => {
  return (
    <section className="section-padding bg-gray-100">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            The Global Talent Hire's Outsourcing Services
          </h2>
          <p className="text-lg text-gray-800 max-w-3xl mx-auto">
            The Global Talent Hire is more than just an outsourcing service provider; we are a strategic partner committed to helping your business succeed.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
            <div className="mb-4">
              <h3 className="text-lg font-semibold text-gray-800 mb-1">Fast, fair and transparent global hiring</h3>
            </div>
            <p className="text-[rgb(31,31,31)] mb-4">
              We handle the entire process from sourcing to candidate placement, handling compliance and legal requirements for worldwide talent acquisition.
            </p>
            <div className="flex justify-end">
              <Link to="/services/global-recruitment" className="text-blue-600 hover:text-blue-800">
                <span className="sr-only">Learn more about global hiring</span>
                <ArrowRight size={20} />
              </Link>
            </div>
          </div>
          
          <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
            <div className="mb-4">
              <h3 className="text-lg font-semibold text-gray-800 mb-1">Hassle-free payroll throughout global markets</h3>
            </div>
            <p className="text-[rgb(31,31,31)] mb-4">
              Our fully managed payroll system ensures accurate and on-time payments across global markets with strict compliance measures and strategic solutions.
            </p>
            <div className="flex justify-end">
              <Link to="/services/payroll-management" className="text-blue-600 hover:text-blue-800">
                <span className="sr-only">Learn more about payroll management</span>
                <ArrowRight size={20} />
              </Link>
            </div>
          </div>
          
          <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
            <div className="mb-4">
              <h3 className="text-lg font-semibold text-gray-800 mb-1">Securing the right IT talent to evolve your digital ecosystem</h3>
            </div>
            <p className="text-[rgb(31,31,31)] mb-4">
              We identify, vet, and place specialized tech professionals across all major fields to help your business thrive in today's competitive digital landscape.
            </p>
            <div className="flex justify-end">
              <Link to="/services/talent-acquisition" className="text-blue-600 hover:text-blue-800">
                <span className="sr-only">Learn more about IT talent acquisition</span>
                <ArrowRight size={20} />
              </Link>
            </div>
          </div>
        </div>
        
        <div className="mt-20">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-10 text-center">
            Why Partner with The Global Talent Hire?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="bg-gray-100 rounded-full h-16 w-16 flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-gray-700" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Client-Centric Approach</h3>
              <p className="text-[rgb(31,31,31)]">
                We place our clients' needs first, offering tailored solutions that address specific business challenges.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-gray-100 rounded-full h-16 w-16 flex items-center justify-center mx-auto mb-4">
                <Globe className="h-8 w-8 text-gray-700" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Proven Track Record</h3>
              <p className="text-[rgb(31,31,31)]">
                Global Talent Hire has a strong track record of delivering exceptional outsourcing solutions across various industries.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-gray-100 rounded-full h-16 w-16 flex items-center justify-center mx-auto mb-4">
                <Workflow className="h-8 w-8 text-gray-700" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Technology-Driven Solutions</h3>
              <p className="text-[rgb(31,31,31)]">
                Our services are supported by state-of-the-art technology, ensuring efficiency, transparency, and security.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-gray-100 rounded-full h-16 w-16 flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-gray-700" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Professional Team</h3>
              <p className="text-[rgb(31,31,31)]">
                We have a global network of professionals, skilled in a range of competencies to meet your business needs.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-gray-100 rounded-full h-16 w-16 flex items-center justify-center mx-auto mb-4">
                <Briefcase className="h-8 w-8 text-gray-700" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Commitment to Excellence</h3>
              <p className="text-[rgb(31,31,31)]">
                We are dedicated to delivering the highest quality services that help our clients achieve their strategic goals.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-gray-100 rounded-full h-16 w-16 flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-gray-700" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Fully Compliant</h3>
              <p className="text-[rgb(31,31,31)]">
                One of the pillars of Global Talent Hire is that it ensures complete compliance with all regulatory requirements in every geography it operates in.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
