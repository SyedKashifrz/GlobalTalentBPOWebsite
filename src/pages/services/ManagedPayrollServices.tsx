import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Calculator, CheckCircle2, Building, Globe, Shield, FileText, Users, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsList, TabsContent, TabsTrigger } from '@/components/ui/tabs';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const heroImages = [
  '/lovable-uploads/hero1.jpg', // Replace with actual path for: people around table
  '/lovable-uploads/hero2.jpg', // Replace with actual path for: man at desk
  '/lovable-uploads/hero3.jpg', // Replace with actual path for: meeting room
];

const ManagedPayrollServices = () => {
  React.useEffect(() => {
    document.title = "Managed Payroll Services | The Global Talent BPO";
  }, []);

  const scrollToContactForm = () => {
    const contactSection = document.getElementById('contact-form');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Hero slider state
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return <div className="flex flex-col min-h-screen">
      {/* Hero Section with Image Slider */}
      <section className="relative h-[600px] md:h-[700px] overflow-hidden bg-[rgb(20,34,83)]">
        {heroImages.map((img, idx) => (
          <img
            key={img}
            src={img}
            alt="Managed Payroll Hero"
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${idx === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
            style={{ transition: 'opacity 0.7s' }}
          />
        ))}
        <div className="absolute inset-0 bg-[rgb(20,34,83)] bg-opacity-60 z-20" />
        <div className="relative z-30 flex flex-col items-center justify-center h-full text-center text-white px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold mb-6 text-zinc-50">What is a Managed Payroll Service?</h1>
            <p className="text-lg mb-8">
              A managed payroll service is a turnkey solution for companies of all sizes to outsource their payroll operations. 
              Our services help businesses save time, reduce compliance risk, and improve efficiency through a centralized hub. 
              We handle everything from calculating and validating payroll to managing employee inquiries, allowing you to focus on your core business operations.
            </p>
            <Button 
              onClick={scrollToContactForm}
              className="bg-red-600 hover:bg-red-700 text-white font-medium px-8 py-2 rounded-md"
            >
              GET STARTED
            </Button>
          </div>
        </div>
        {/* Slider controls */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-2 z-40">
          {heroImages.map((_, idx) => (
            <button
              key={idx}
              className={`w-3 h-3 rounded-full border border-white ${idx === currentSlide ? 'bg-white' : 'bg-transparent'}`}
              onClick={() => setCurrentSlide(idx)}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </section>
      
      {/* Comprehensive Global Payroll Solution Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-pink-50 to-white">
        <div className="container mx-auto max-w-6xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">
            The Global Talent's Comprehensive Global Payroll Solution
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-10">
            We offer a global payroll management platform with a human touch to serve businesses - small, medium and large - with operations in over 100+ countries. Experience end-to-end payroll management without the traditional challenges.
          </p>
          <Button 
            onClick={scrollToContactForm}
            className="bg-red-600 hover:bg-red-700 text-white font-medium px-8 py-2 rounded-md"
          >
            BOOK A DEMO
          </Button>
        </div>
      </section>

      {/* Speed & Efficiency Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl font-bold mb-4 text-red-700">
                Our Managed Payroll Services are designed for speed, accuracy and efficiency
              </h2>
              <p className="text-gray-700 mb-6">
                Our dedicated team of payroll professionals ensures that your employees are paid accurately and on time, every time. We handle all aspects of payroll processing, from data collection to payment distribution, while maintaining strict compliance with local regulations.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle2 className="mr-2 h-5 w-5 text-green-600 mt-0.5" />
                  <span>Dedicated payroll specialists assigned to your account</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="mr-2 h-5 w-5 text-green-600 mt-0.5" />
                  <span>Custom workflows tailored to your business needs</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="mr-2 h-5 w-5 text-green-600 mt-0.5" />
                  <span>Regular compliance updates and reporting</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="mr-2 h-5 w-5 text-green-600 mt-0.5" />
                  <span>Scalable solutions that grow with your business</span>
                </li>
              </ul>
            </div>
            <div>
              <img alt="Dashboard with payroll management interface" className="w-full rounded-lg shadow-lg object-scale-down" src="/lovable-uploads/payroll staff.jpg" />
            </div>
          </div>
        </div>
      </section>

      {/* Accurate Payroll Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-2xl font-bold mb-6 text-red-700">
            Accurate Managed Payroll that is On Time, Every Time
          </h2>
          <p className="text-gray-700 mb-8 max-w-3xl">
            Our managed payroll services ensure that your employees are paid accurately and on time, every time. 
            We use sophisticated technology and experienced professionals to deliver a seamless payroll experience.
          </p>
          
          <div className="space-y-6">
            <h3 className="font-medium text-gray-800">What to Expect</h3>
            <ul className="space-y-2 ml-6 list-disc text-gray-700">
              <li>Fully managed service model</li>
              <li>Allocated expert payroll contact</li>
              <li>Simplified calculation processes</li>
              <li>High regulatory compliance levels</li>
            </ul>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-12">
            <div className="p-6 bg-blue-50 rounded-lg text-center">
              <div className="flex justify-center mb-4">
                <Clock className="h-10 w-10 text-blue-500" />
              </div>
              <h4 className="font-semibold mb-2">Timely Processing</h4>
              <p className="text-sm text-gray-600">
                Guaranteed on-time payroll processing with proactive scheduling
              </p>
            </div>
            
            <div className="p-6 bg-green-50 rounded-lg text-center">
              <div className="flex justify-center mb-4">
                <Calculator className="h-10 w-10 text-green-500" />
              </div>
              <h4 className="font-semibold mb-2">Precise Calculations</h4>
              <p className="text-sm text-gray-600">
                Multiple validation checks ensuring accuracy in every payroll run
              </p>
            </div>
            
            <div className="p-6 bg-purple-50 rounded-lg text-center">
              <div className="flex justify-center mb-4">
                <Shield className="h-10 w-10 text-purple-500" />
              </div>
              <h4 className="font-semibold mb-2">Compliance Assured</h4>
              <p className="text-sm text-gray-600">
                Stay compliant with changing regulations across all jurisdictions
              </p>
            </div>

            <div className="p-6 bg-yellow-50 rounded-lg text-center">
              <div className="flex justify-center mb-4">
                <Users className="h-10 w-10 text-yellow-600" />
              </div>
              <h4 className="font-semibold mb-2">Employee Management</h4>
              <p className="text-sm text-gray-600">
                Complete employee lifecycle management from onboarding to offboarding
              </p>
            </div>

            <div className="p-6 bg-red-50 rounded-lg text-center">
              <div className="flex justify-center mb-4">
                <FileText className="h-10 w-10 text-red-500" />
              </div>
              <h4 className="font-semibold mb-2">Documentation</h4>
              <p className="text-sm text-gray-600">
                Full documentation and reporting capabilities for audits
              </p>
            </div>

            <div className="p-6 bg-indigo-50 rounded-lg text-center">
              <div className="flex justify-center mb-4">
                <Globe className="h-10 w-10 text-indigo-500" />
              </div>
              <h4 className="font-semibold mb-2">Global Services</h4>
              <p className="text-sm text-gray-600">
                International payroll services handling multi-currency payments
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Compliance Section */}
      <section className="py-12 px-4 bg-gray-900 text-white">
        <div className="container mx-auto max-w-6xl text-center">
          <h2 className="text-2xl font-bold mb-10">We handle all compliance</h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 justify-center">
            <div className="text-center">
              <div className="flex justify-center mb-3">
                <FileText className="h-8 w-8 text-white" />
              </div>
              <p className="text-sm">Compliance Checks & Monitoring</p>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-3">
                <Globe className="h-8 w-8 text-white" />
              </div>
              <p className="text-sm">International Legislation</p>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-3">
                <Building className="h-8 w-8 text-white" />
              </div>
              <p className="text-sm">Statutory Form Filings</p>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-3">
                <Users className="h-8 w-8 text-white" />
              </div>
              <p className="text-sm">Payroll Changes & Updates</p>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-3">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <p className="text-sm">Monitoring Changes in Regulations</p>
            </div>
          </div>
        </div>
      </section>

      {/* Global Payroll Management */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h3 className="text-sm text-red-600 uppercase font-semibold mb-2">GLOBAL PAYROLL SOLUTIONS</h3>
            <h2 className="text-3xl font-bold text-gray-800">
              Experience streamlined payroll operations with centralized management in 100+ countries
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center mt-12">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-6 text-center">LOCAL PAYROLL PROVIDERS</h3>
              <div className="space-y-4">
                <div className="border border-gray-300 rounded-full py-2 px-6 text-center bg-white">
                  <p>Multiple Providers</p>
                </div>
                <div className="border border-gray-300 rounded-full py-2 px-6 text-center bg-white">
                  <p>Different processes</p>
                </div>
                <div className="border border-gray-300 rounded-full py-2 px-6 text-center bg-white">
                  <p>Variable service levels</p>
                </div>
                <div className="border border-gray-300 rounded-full py-2 px-6 text-center bg-white">
                  <p>Inconsistent governance</p>
                </div>
              </div>
              <div className="mt-6 flex flex-wrap justify-center gap-2">
                {/* Country flag icons would go here */}
                <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
                <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
                <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
                <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
                <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
                <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
              </div>
            </div>
            
            <div className="bg-red-600 p-6 rounded-lg text-white">
              <h3 className="text-xl font-semibold mb-6 text-center">GLOBAL TALENT</h3>
              <div className="space-y-4">
                <div className="border border-white rounded-full py-2 px-6 text-center bg-red-700">
                  <p>One platform, global & local experience</p>
                </div>
                <div className="border border-white rounded-full py-2 px-6 text-center bg-red-700">
                  <p>Standardized processes</p>
                </div>
                <div className="border border-white rounded-full py-2 px-6 text-center bg-red-700">
                  <p>Consistent service experience</p>
                </div>
                <div className="border border-white rounded-full py-2 px-6 text-center bg-red-700">
                  <p>Single point of governance</p>
                </div>
              </div>
              <div className="mt-6 flex flex-wrap justify-center gap-2">
                {/* Country flag icons would go here */}
                <div className="w-8 h-8 bg-white rounded-full"></div>
                <div className="w-8 h-8 bg-white rounded-full"></div>
                <div className="w-8 h-8 bg-white rounded-full"></div>
                <div className="w-8 h-8 bg-white rounded-full"></div>
                <div className="w-8 h-8 bg-white rounded-full"></div>
                <div className="w-8 h-8 bg-white rounded-full"></div>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-8">Trusted by many across the globe.</p>
            <div className="flex justify-center space-x-8">
              <img src="/lovable-uploads/logo.png" alt="Client logo" className="h-10 opacity-70" />
              <img src="/lovable-uploads/AlsviorGlobal_OfficialLogo_Horizontal_NoBG-300x75.png" alt="Client logo" className="h-10 opacity-70" />
              <img src="/lovable-uploads/LOGO_HireAbroad.png" alt="Client logo" className="h-10 opacity-70" />
              <img src="/lovable-uploads/icon.png" alt="Client logo" className="h-10 opacity-70" />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact-form" className="py-16 px-4 bg-blue-50">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-4">Book a Meeting with us!</h2>
              <p className="mb-6">
                Let us help you find out how The Global Talent's managed payroll solutions can optimize your business operations.
              </p>
              <img src="/lovable-uploads/Map MPM.png" alt="World map" className="w-full max-w-md" />
            </div>
            
            <div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-6 text-center">Let's Connect</h3>
                <form className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="first-name" className="block text-sm text-gray-600 mb-1">First name*</label>
                      <input type="text" id="first-name" className="w-full border border-gray-300 rounded py-2 px-3" required />
                    </div>
                    <div>
                      <label htmlFor="last-name" className="block text-sm text-gray-600 mb-1">Last name*</label>
                      <input type="text" id="last-name" className="w-full border border-gray-300 rounded py-2 px-3" required />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm text-gray-600 mb-1">Work Email*</label>
                    <input type="email" id="email" className="w-full border border-gray-300 rounded py-2 px-3" required />
                  </div>
                  
                  <div>
                    <label htmlFor="company" className="block text-sm text-gray-600 mb-1">Company*</label>
                    <input type="text" id="company" className="w-full border border-gray-300 rounded py-2 px-3" required />
                  </div>
                  
                  <div>
                    <label htmlFor="country" className="block text-sm text-gray-600 mb-1">Country/Region*</label>
                    <Select>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select country" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="us">United States</SelectItem>
                        <SelectItem value="uk">United Kingdom</SelectItem>
                        <SelectItem value="ca">Canada</SelectItem>
                        <SelectItem value="au">Australia</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div>
                    <label className="flex items-center">
                      <input type="checkbox" className="form-checkbox h-4 w-4 text-red-600" />
                      <span className="ml-2 text-sm text-gray-600">
                        I agree to receive other communications from The Global Talent.
                      </span>
                    </label>
                  </div>
                  
                  <a 
                    href="mailto:info@globaltalenthire.com"
                    className="block w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded text-center"
                  >
                    GET STARTED TODAY
                  </a>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>;
};

export default ManagedPayrollServices;