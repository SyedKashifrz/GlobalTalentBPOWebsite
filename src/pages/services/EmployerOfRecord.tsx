import React from 'react';
import { Link } from 'react-router-dom';
import { Briefcase, ArrowRight, Globe, Shield, Clock, CheckCircle, Award } from 'lucide-react';
const EmployerOfRecord = () => {
  React.useEffect(() => {
    document.title = "Employer of Record EOR | The Global Talent Hire";
  }, []);
  return <main className="pt-28">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-900 to-indigo-900 text-white h-[600px] md:h-[550px] flex items-center">
        <div className="absolute inset-0 overflow-hidden">
          <img 
            src="/lovable-uploads/global-busin.jpg"
            alt="Employer of Record background"
            className="absolute h-full w-full object-cover opacity-70"
          />
          <div className="absolute inset-0 bg-blue-900 opacity-30"></div>
        </div>
        <div className="container-custom relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-zinc-50">We Hire for You—Globally and Legally</h1>
            <p className="text-xl mb-8">
              Scale your workforce in new markets without setting up entities. We handle compliance, contracts, and HR while you focus on growth
            </p>
            <Link to="/contact" className="inline-flex items-center bg-white text-indigo-900 px-6 py-3 rounded-md hover:bg-opacity-90 transition-colors">
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
                Global Employment Without Boundaries
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                Our Employer of Record (EOR) service enables your business to hire talent internationally without establishing local entities, navigating complex employment laws, or managing payroll in multiple countries.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                We become the legal employer of record for your international workforce, handling all aspects of employment compliance, payroll, benefits, and HR administration while you maintain full day-to-day control of your team members.
              </p>
              <div className="flex flex-wrap gap-3 mt-6">
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">150+ Countries</span>
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">Full Compliance</span>
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">Risk Mitigation</span>
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">Fast Deployment</span>
              </div>
            </div>
            <div className="flex justify-center">
              <img src="/lovable-uploads/photo-15.jpg" alt="Global employment solutions" className="rounded-lg shadow-md max-w-full" />
            </div>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Key Benefits of Our EOR Services
            </h2>
            <p className="text-lg text-gray-700">
              Expand your global footprint quickly and compliantly
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="text-blue-800 mb-4">
                <Globe size={40} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">Global Expansion Without Entities</h3>
              <p className="text-gray-700">
                Test new markets and hire internationally without the cost and complexity of establishing legal entities in each country.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="text-blue-800 mb-4">
                <Shield size={40} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">Complete Compliance</h3>
              <p className="text-gray-700">
                Ensure full compliance with local employment laws, tax regulations, and mandatory benefits in every country where you hire.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="text-blue-800 mb-4">
                <Clock size={40} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">Speed to Market</h3>
              <p className="text-gray-700">
                Hire international talent in days rather than months, dramatically reducing time-to-market in new countries.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              How Our EOR Service Works
            </h2>
            <p className="text-lg text-gray-700">
              A simple, streamlined process for global hiring
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-6">
            {[{
            step: "1",
            title: "Identify Talent",
            description: "Find the right candidate in your target country or relocate existing team members internationally."
          }, {
            step: "2",
            title: "EOR Setup",
            description: "We establish the employment relationship, creating compliant contracts and onboarding documentation."
          }, {
            step: "3",
            title: "Employee Onboarding",
            description: "We handle all paperwork, tax registrations, and benefit enrollments for your new team member."
          }, {
            step: "4",
            title: "Ongoing Management",
            description: "We manage payroll, benefits, compliance updates, and HR support throughout the employment lifecycle."
          }].map(item => <div key={item.step} className="border p-6 rounded-lg relative bg-white">
                <div className="absolute -top-4 -left-4 bg-blue-800 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-800 mt-4">{item.title}</h3>
                <p className="text-gray-700">{item.description}</p>
              </div>)}
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Comprehensive EOR Services
            </h2>
            <p className="text-lg text-gray-700">
              Everything you need for compliant global employment
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-4 text-gray-800">Employment Compliance</h3>
              <ul className="space-y-3">
                {["Legally compliant employment contracts", "Worker classification management", "Compliance with local labor laws", "Ongoing regulatory monitoring", "Employment documentation management"].map((item, index) => <li key={index} className="flex items-start">
                    <CheckCircle size={18} className="text-green-600 mr-2 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </li>)}
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-4 text-gray-800">Payroll Services</h3>
              <ul className="space-y-3">
                {["Accurate and timely salary payments", "Tax withholding and reporting", "Social security contributions", "Multi-currency payment options", "Year-end tax statements"].map((item, index) => <li key={index} className="flex items-start">
                    <CheckCircle size={18} className="text-green-600 mr-2 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </li>)}
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-4 text-gray-800">Benefits Administration</h3>
              <ul className="space-y-3">
                {["Mandatory benefits management", "Competitive supplementary benefits", "Insurance and healthcare coverage", "Retirement plans where applicable", "Paid time off administration"].map((item, index) => <li key={index} className="flex items-start">
                    <CheckCircle size={18} className="text-green-600 mr-2 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </li>)}
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-4 text-gray-800">HR Support</h3>
              <ul className="space-y-3">
                {["Employee onboarding and offboarding", "Leave management", "Performance management guidance", "Employment changes and amendments", "HR advisory services"].map((item, index) => <li key={index} className="flex items-start">
                    <CheckCircle size={18} className="text-green-600 mr-2 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </li>)}
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
                  "The Global Talent BPO's Employer of Record service has been game-changing for our business. We were able to hire top talent in five countries in less than three weeks without setting up entities. Their expertise in global employment compliance has removed all the headaches of international hiring."
                </blockquote>
                <p className="font-bold">- João Frederico Neto at CEO Alsvior Global</p>
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
              Our EOR services are available in 150+ countries worldwide
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {["United States", "Canada", "United Kingdom", "Germany", "France", "Australia", "Singapore", "Japan", "Brazil", "India", "South Africa", "Mexico"].map(country => <div key={country} className="bg-white p-4 rounded-lg text-center">
                <span className="text-gray-800">{country}</span>
              </div>)}
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
          <h2 className="text-3xl font-bold mb-6 text-zinc-50">Ready to expand your global team?</h2>
          <p className="max-w-2xl mx-auto mb-8 text-xl">
            Contact us today to learn how our EOR services can help your business hire internationally without the complexity
          </p>
          <Link to="/contact" className="inline-flex items-center bg-white text-blue-900 px-6 py-3 rounded-md hover:bg-gray-100 transition-colors">
            Schedule a Consultation
            <ArrowRight size={18} className="ml-2" />
          </Link>
        </div>
      </section>
    </main>;
};
export default EmployerOfRecord;
