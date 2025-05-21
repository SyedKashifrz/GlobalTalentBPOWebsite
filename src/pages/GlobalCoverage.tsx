import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Globe, Check } from 'lucide-react';

const GlobalCoverage = () => {
  React.useEffect(() => {
    document.title = "Global Coverage | The Global Talent BPO";
  }, []);

  // Define regions with their countries
  const regions = [{
    name: "Europe",
    countries: ["Austria", "Belgium", "Bulgaria", "Croatia", "Cyprus", "Czech Republic", "Denmark", "Estonia", "Finland", "France", "Germany", "Greece", "Hungary", "Ireland", "Italy", "Latvia", "Lithuania", "Luxembourg", "Malta", "Netherlands", "Norway", "Poland", "Portugal", "Romania", "Slovakia", "Slovenia", "Spain", "Sweden", "Switzerland", "United Kingdom"]
  }, {
    name: "North America",
    countries: ["Canada", "Mexico", "United States"]
  }, {
    name: "South America",
    countries: ["Argentina", "Bolivia", "Brazil", "Chile", "Colombia", "Ecuador", "Guyana", "Paraguay", "Peru", "Suriname", "Uruguay", "Venezuela"]
  }, {
    name: "Asia Pacific",
    countries: ["Australia", "Bangladesh", "China", "Hong Kong", "India", "Indonesia", "Japan", "Malaysia", "New Zealand", "Pakistan", "Philippines", "Singapore", "South Korea", "Taiwan", "Thailand", "Vietnam"]
  }, {
    name: "Middle East & Africa",
    countries: ["Bahrain", "Egypt", "Israel", "Jordan", "Kenya", "Kuwait", "Morocco", "Nigeria", "Oman", "Qatar", "Saudi Arabia", "South Africa", "Turkey", "UAE", "Zimbabwe"]
  }];
  
  return (
    <main className="pt-28">
      {/* Hero Section */}
      <section className="relative bg-[rgb(29,33,77)] text-white py-20">
        <div className="absolute inset-0 overflow-hidden">
          <img 
            src="/lovable-uploads/blue map contact us.jpg"
            alt="Global Coverage background"
            className="absolute h-full w-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-[rgb(29,33,77)] opacity-70"></div>
        </div>
        <div className="container-custom relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-zinc-50">
              GLOBAL PAYROLL COVERAGE
            </h1>
            <p className="text-xl mb-8 text-zinc-50">
              Pay your employees accurately, compliantly and on-time anywhere in the world
            </p>
          </div>
        </div>
      </section>

      {/* Global Map Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-[rgb(29,33,77)] mb-4">
              Our Global Reach
            </h2>
            <p className="text-lg text-gray-700">
              With coverage in over 150 countries, our global payroll solutions ensure compliant operations wherever your business takes you
            </p>
          </div>
          
          <div className="w-full mb-12">
            <img alt="Global Coverage Map" className="w-full rounded-lg shadow-md" src="/lovable-uploads/blue map contact us.jpg" />
          </div>
        </div>
      </section>

      {/* Regions Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-[rgb(29,33,77)] mb-4">
              Countries We Cover
            </h2>
            <p className="text-lg text-gray-700">
              Browse our extensive global network by region
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regions.map(region => <div key={region.name} className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold mb-4 text-[rgb(29,33,77)] border-b pb-2">
                  {region.name}
                </h3>
                <ul className="grid grid-cols-2 gap-x-4 gap-y-2">
                  {region.countries.map(country => <li key={country} className="flex items-center">
                      <Check size={16} className="text-green-600 mr-2" />
                      <span>{country}</span>
                    </li>)}
                </ul>
              </div>)}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-[rgb(29,33,77)] mb-4">
              Our Global Payroll Services
            </h2>
            <p className="text-lg text-gray-700">
              No matter where your employees are located, we ensure compliant payroll processing
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="border p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-3 text-[rgb(29,33,77)]">Local Compliance</h3>
              <p className="text-gray-700 mb-4">
                Our team of experts ensures your payroll complies with local tax regulations, labor laws, and reporting requirements in every country.
              </p>
              <Link to="/services/managed-payroll-services" className="text-blue-600 hover:underline flex items-center">
                Learn More <ArrowRight size={16} className="ml-1" />
              </Link>
            </div>
            
            <div className="border p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-3 text-[rgb(29,33,77)]">Multi-Currency Payments</h3>
              <p className="text-gray-700 mb-4">
                Process payroll and pay employees in their local currencies with competitive exchange rates and minimal transaction fees.
              </p>
              <Link to="/services/managed-payroll-services" className="text-blue-600 hover:underline flex items-center">
                Learn More <ArrowRight size={16} className="ml-1" />
              </Link>
            </div>
            
            <div className="border p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-3 text-[rgb(29,33,77)]">Consolidated Reporting</h3>
              <p className="text-gray-700 mb-4">
                Access comprehensive reports that aggregate payroll data across all countries for better visibility and control.
              </p>
              <Link to="/products/payroll-software" className="text-blue-600 hover:underline flex items-center">
                Learn More <ArrowRight size={16} className="ml-1" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 text-white bg-sky-600">
        <div className="container-custom text-center bg-sky-600">
          <h2 className="text-2xl font-bold mb-6 text-zinc-50">Ready to expand your global operations?</h2>
          <p className="max-w-2xl mx-auto mb-8">
            Our global payroll experts are ready to help you navigate international payroll compliance and setup
          </p>
          <Link to="/contact" className="inline-flex items-center bg-white text-[rgb(29,33,77)] px-6 py-3 rounded-md font-medium hover:bg-gray-100 transition-colors">
            Contact Us Today
          </Link>
        </div>
      </section>
    </main>
  );
};

export default GlobalCoverage;
