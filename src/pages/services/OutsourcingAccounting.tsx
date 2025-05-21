import React from 'react';
import { Link } from 'react-router-dom';
import { Calculator, ArrowRight, BarChart, Shield, Clock, CheckCircle, Award, FileText } from 'lucide-react';

const OutsourcingAccounting = () => {
  React.useEffect(() => {
    document.title = "Outsourcing Accounting | The Global Talent BPO";
  }, []);

  return (
    <main className="pt-28">
      {/* Hero Section with Image */}
      <section
        className="relative h-[600px] flex items-center justify-center"
        style={{
          backgroundImage: "url('/lovable-uploads/outsourcing-accounting-hero.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 !text-white">Smart Accounting. Global Reach</h1>
          <p className="text-xl">Outsource your accounting operations for accurate reporting, better efficiency, and peace of mind—no matter where you operate.</p>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Expert Accounting Services for Your Business
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                Our Outsourcing Accounting service provides comprehensive financial management solutions that allow you to focus on your core business while we handle your accounting needs with precision and expertise.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                From day-to-day bookkeeping to complex financial reporting and tax compliance, our team of certified accountants delivers customized solutions designed to support your business goals and ensure financial accuracy.
              </p>
              <div className="flex flex-wrap gap-3 mt-6">
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">Cost-Effective</span>
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">Time-Saving</span>
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">Expert Support</span>
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">Scalable Solutions</span>
              </div>
            </div>
            <div className="flex justify-center">
              <img 
                src="/lovable-uploads/accounting side.jpg" 
                alt="Accounting professional working" 
                className="rounded-lg shadow-md max-w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Key Benefits of Outsourced Accounting
            </h2>
            <p className="text-lg text-gray-700">
              Transform your financial operations with our comprehensive accounting solutions
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="text-blue-800 mb-4">
                <Calculator size={40} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">Cost Savings</h3>
              <p className="text-gray-700">
                Reduce expenses associated with hiring in-house accounting staff, including salaries, benefits, training, and technology investments.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="text-blue-800 mb-4">
                <Shield size={40} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">Enhanced Accuracy</h3>
              <p className="text-gray-700">
                Benefit from specialized expertise and advanced accounting systems that minimize errors and ensure compliance with accounting standards.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="text-blue-800 mb-4">
                <BarChart size={40} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">Strategic Insights</h3>
              <p className="text-gray-700">
                Gain valuable financial insights through detailed reporting and analysis that help inform strategic business decisions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Services */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Our Comprehensive Accounting Services
            </h2>
            <p className="text-lg text-gray-700">
              Tailored solutions to meet all your financial management needs
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4 text-gray-800">Bookkeeping Services</h3>
              <ul className="space-y-3">
                {[
                  "Accounts payable and receivable management",
                  "Bank reconciliations",
                  "General ledger maintenance",
                  "Financial data entry and organization",
                  "Monthly close process"
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle size={18} className="text-green-600 mr-2 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4 text-gray-800">Financial Reporting</h3>
              <ul className="space-y-3">
                {[
                  "Income statements and balance sheets",
                  "Cash flow statements",
                  "Customized financial reports",
                  "Budget preparation and analysis",
                  "Financial performance metrics"
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle size={18} className="text-green-600 mr-2 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4 text-gray-800">Tax Services</h3>
              <ul className="space-y-3">
                {[
                  "Tax planning and preparation",
                  "Sales and use tax compliance",
                  "Payroll tax management",
                  "International tax considerations",
                  "Tax audit support"
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle size={18} className="text-green-600 mr-2 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4 text-gray-800">CFO Advisory Services</h3>
              <ul className="space-y-3">
                {[
                  "Financial strategy development",
                  "Cash flow management",
                  "Fundraising and investor relations",
                  "Financial risk assessment",
                  "Business growth planning"
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle size={18} className="text-green-600 mr-2 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          <div className="mt-12 bg-gray-50 p-8 rounded-lg">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="md:w-1/4 text-center">
                <FileText size={64} className="text-blue-800 inline-block" />
              </div>
              <div className="md:w-3/4">
                <h3 className="text-xl font-bold mb-3 text-gray-800">Specialized Industry Expertise</h3>
                <p className="text-gray-700 mb-4">
                  Our accounting professionals have deep experience across multiple industries, including technology, healthcare, retail, manufacturing, professional services, and non-profit organizations.
                </p>
                <p className="text-gray-700">
                  We understand the unique financial challenges and regulatory requirements of your industry, allowing us to provide targeted solutions that address your specific accounting needs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Our Approach to Outsourced Accounting
            </h2>
            <p className="text-lg text-gray-700">
              A systematic process designed to maximize financial efficiency
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                step: "1",
                title: "Assessment",
                description: "We analyze your current financial processes and identify your specific accounting needs."
              },
              {
                step: "2",
                title: "Customization",
                description: "We design a tailored accounting solution that addresses your unique business requirements."
              },
              {
                step: "3",
                title: "Implementation",
                description: "We seamlessly integrate our accounting services with your existing operations."
              },
              {
                step: "4",
                title: "Ongoing Support",
                description: "We provide continuous financial management and regular reporting to keep you informed."
              }
            ].map((item) => (
              <div key={item.step} className="border p-6 rounded-lg relative bg-white">
                <div className="absolute -top-4 -left-4 bg-blue-800 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-800 mt-4">{item.title}</h3>
                <p className="text-gray-700">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-16 bg-white">
        <div className="container-custom max-w-4xl">
          <div className="bg-blue-900 text-white p-8 rounded-lg">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/4 mb-6 md:mb-0 flex justify-center">
                <div className="w-24 h-24 rounded-full bg-white/20 flex items-center justify-center">
                  <Award size={40} className="text-white" />
                </div>
              </div>
              <div className="md:w-3/4">
                <blockquote className="text-lg italic mb-4">
                  "Outsourcing our accounting functions to The Global Talent BPO has been transformative for our business. Their team provided the expertise we needed to streamline our financial processes, reduce costs, and gain valuable insights into our financial performance. Their service has allowed us to focus on growing our business while having complete confidence in our financial management."
                </blockquote>
                <p className="font-bold">- Michael Johnson, CEO of GrowthLink Enterprises</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Industries We Serve
            </h2>
            <p className="text-lg text-gray-700">
              Specialized accounting solutions for diverse business sectors
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              "Technology", "Healthcare", "Retail", "Manufacturing", "Professional Services", 
              "Non-Profit", "E-commerce", "Construction", "Hospitality", "Real Estate", "Financial Services", "Education"
            ].map((industry) => (
              <div key={industry} className="bg-white p-4 rounded-lg text-center">
                <span className="text-gray-800">{industry}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to optimize your financial operations?</h2>
          <p className="max-w-2xl mx-auto mb-8 text-xl">
            Contact us today to learn how our Outsourced Accounting services can help your business achieve financial excellence
          </p>
          <Link to="/contact" className="inline-flex items-center bg-white text-blue-900 px-6 py-3 rounded-md hover:bg-gray-100 transition-colors">
            Schedule a Consultation
            <ArrowRight size={18} className="ml-2" />
          </Link>
        </div>
      </section>
    </main>
  );
};

export default OutsourcingAccounting;
