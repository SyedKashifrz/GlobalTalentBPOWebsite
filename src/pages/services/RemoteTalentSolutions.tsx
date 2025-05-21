import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Globe, Users, Briefcase, CheckCircle, Award } from 'lucide-react';

const RemoteTalentSolutions = () => {
  React.useEffect(() => {
    document.title = "Remote Talent Solutions | The Global Talent BPO";
  }, []);

  return (
    <main className="pt-28">
      {/* Hero Section */}
      <section className="relative h-[520px] overflow-hidden flex items-center justify-center">
        <video
          className="absolute inset-0 w-full h-full object-cover z-0"
          src="/lovable-uploads/Remotes.mp4"
          autoPlay
          loop
          muted
          playsInline
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-indigo-900 opacity-30 z-10" />
        <div className="container-custom relative z-20 flex items-center justify-center h-full">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              REMOTE TALENT SOLUTIONS
            </h1>
            <p className="text-xl mb-8">
              Hire remote teams in countries where you don't have entities.
            </p>
            <Link 
              to="/contact" 
              className="inline-flex items-center bg-white text-indigo-900 px-6 py-3 rounded-md hover:bg-opacity-90 transition-colors"
            >
              Get Started
              <ArrowRight size={18} className="ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Remote Talent Solutions
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                Our Remote Talent Solutions service helps businesses hire talented professionals in countries where they don't have established legal entities. We manage all aspects of employment from hiring and onboarding to payroll and compliance, allowing you to build high-performing remote teams without the complexities of international expansion.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                We act as the employer of record for your remote workers, handling all legal, tax, and HR responsibilities while you maintain day-to-day management of your team members.
              </p>
              <div className="flex flex-wrap gap-3 mt-6">
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">Global Compliance</span>
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">Remote Hiring</span>
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">Local Benefits</span>
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">Cross-border Payroll</span>
              </div>
            </div>
            <div className="flex justify-center">
              <img 
                src="/lovable-uploads/remote.png" 
                alt="Global remote team" 
                className="rounded-lg shadow-md max-w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              How Our Remote Talent Solutions Work
            </h2>
            <p className="text-lg text-gray-700">
              From talent identification to ongoing management, we handle every aspect of remote employment
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                step: "1",
                title: "Talent Selection",
                description: "We help you identify and select qualified candidates based on your requirements."
              },
              {
                step: "2",
                title: "Legal Employment",
                description: "We become the legal employer of record, handling all local compliance requirements."
              },
              {
                step: "3",
                title: "Onboarding",
                description: "We handle all paperwork and ensure a smooth onboarding experience for new team members."
              },
              {
                step: "4",
                title: "Ongoing Support",
                description: "We manage payroll, benefits, compliance updates, and HR support throughout employment."
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

      {/* Key Benefits */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Key Benefits
            </h2>
            <p className="text-lg text-gray-700">
              Our Remote Talent Solutions offer numerous advantages for businesses looking to expand globally
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="text-blue-800 mb-4">
                <Globe size={40} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">Access Global Talent</h3>
              <p className="text-gray-700">
                Hire the best talent regardless of location without geographic constraints, expanding your potential talent pool exponentially.
              </p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="text-blue-800 mb-4">
                <Briefcase size={40} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">Reduce Compliance Risk</h3>
              <p className="text-gray-700">
                Eliminate legal and compliance concerns with our expertise in local regulations, employment laws, and tax requirements.
              </p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="text-blue-800 mb-4">
                <Users size={40} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">Scale Efficiently</h3>
              <p className="text-gray-700">
                Quickly expand into new markets without establishing entities, reducing time-to-market and operational costs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Comprehensive Employment Services
            </h2>
            <p className="text-lg text-gray-700">
              Our solutions cover all aspects of remote employment
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-4 text-gray-800">Legal Compliance</h3>
              <ul className="space-y-3">
                {[
                  "Employment contracts compliant with local laws",
                  "Tax registration and withholding",
                  "Work permits and visa support",
                  "Statutory benefits administration",
                  "Regulatory compliance monitoring"
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle size={18} className="text-green-600 mr-2 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-4 text-gray-800">HR Services</h3>
              <ul className="space-y-3">
                {[
                  "Competitive salary benchmarking",
                  "Benefits management",
                  "Time off and leave administration",
                  "Performance management tools",
                  "Employee relations support"
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle size={18} className="text-green-600 mr-2 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-4 text-gray-800">Payroll Management</h3>
              <ul className="space-y-3">
                {[
                  "Multi-currency payroll processing",
                  "Tax calculations and filings",
                  "Social security contributions",
                  "Year-end reporting",
                  "Expense reimbursement management"
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle size={18} className="text-green-600 mr-2 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-4 text-gray-800">Ongoing Support</h3>
              <ul className="space-y-3">
                {[
                  "Dedicated account management",
                  "Employee onboarding and offboarding",
                  "Regulatory updates and compliance changes",
                  "HR advisory services",
                  "Employment documentation management"
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle size={18} className="text-green-600 mr-2 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
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
                  "The Global Talent BPO has transformed how we build our global team. Their Remote Talent Solutions service allowed us to hire top developers in multiple countries without dealing with the legal complexities. Their expertise in international employment has been invaluable."
                </blockquote>
                <p className="font-bold">- David Chen, CTO of TechInnovate</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Global Coverage */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Global Coverage
            </h2>
            <p className="text-lg text-gray-700">
              Our Remote Talent Solutions are available in 150+ countries worldwide
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              "United States", "Canada", "United Kingdom", "Germany", "France", 
              "Australia", "Singapore", "Japan", "Brazil", "India", "South Africa", "Mexico"
            ].map((country) => (
              <div key={country} className="bg-white p-4 rounded-lg text-center">
                <span className="text-gray-800">{country}</span>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <Link to="/global-coverage" className="inline-flex items-center text-blue-800 font-medium hover:text-blue-900">
              View all supported countries
              <ArrowRight size={16} className="ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to build your global team?</h2>
          <p className="max-w-2xl mx-auto mb-8 text-xl">
            Contact us today to learn how our Remote Talent Solutions can help your business expand globally
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

export default RemoteTalentSolutions;
