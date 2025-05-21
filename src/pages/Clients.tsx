
import React from 'react';
import TestimonialsSection from '../components/TestimonialsSection';
import { ArrowRight } from 'lucide-react';

const Clients = () => {
  const industries = [
    {
      name: "Technology",
      description: "From startups to tech giants, we've helped companies across the technology sector build innovative teams.",
      companies: ["Microsoft", "Google", "Oracle", "Adobe"]
    },
    {
      name: "Finance",
      description: "We understand the complex talent needs of financial institutions and have extensive experience in this sector.",
      companies: ["Goldman Sachs", "JP Morgan", "Citibank", "HSBC"]
    },
    {
      name: "Healthcare",
      description: "Our specialized recruiters help healthcare organizations find exceptional talent across clinical and administrative roles.",
      companies: ["Mayo Clinic", "Cleveland Clinic", "Kaiser Permanente", "Pfizer"]
    },
    {
      name: "Manufacturing",
      description: "We support manufacturing companies with specialized talent acquisition across their entire operations.",
      companies: ["3M", "General Electric", "Boeing", "Siemens"]
    },
    {
      name: "Retail",
      description: "Our retail industry expertise helps companies find talent that drives exceptional customer experiences.",
      companies: ["Amazon", "Walmart", "Target", "Costco"]
    },
    {
      name: "Education",
      description: "We help educational institutions attract and retain top faculty and administrative talent.",
      companies: ["Harvard University", "Stanford", "MIT", "Yale"]
    }
  ];

  const caseStudies = [
    {
      title: "Global Tech Leader",
      industry: "Technology",
      challenge: "Needed to scale engineering team across multiple international locations within tight timeframes.",
      solution: "Implemented targeted recruitment campaign across 5 countries with specialized tech recruiters.",
      result: "Successfully hired 50+ engineers within 3 months, maintaining high quality standards.",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c"
    },
    {
      title: "Healthcare Innovation",
      industry: "Healthcare",
      challenge: "Required specialized talent for new medical technology division with rare skill combinations.",
      solution: "Executed comprehensive talent mapping and targeted headhunting of passive candidates.",
      result: "Built complete team of 15 specialized professionals, accelerating product development timeline.",
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef"
    },
    {
      title: "Financial Services Transformation",
      industry: "Finance",
      challenge: "Needed to attract top digital transformation leaders during competitive talent shortage.",
      solution: "Developed compelling employer value proposition and executive search strategy.",
      result: "Successfully placed C-suite technology leaders who drove successful digital initiatives.",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40"
    }
  ];

  return (
    <main>
      {/* Hero */}
      <section className="relative bg-gradient-to-r from-blue-950 to-blue-900 pt-28 pb-20 lg:pt-36 lg:pb-28 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-blue-600 w-[500px] h-[500px] rounded-full blur-3xl opacity-20"></div>
        </div>

        <div className="container-custom relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
            Our Clients
          </h1>
          <p className="mt-6 text-lg md:text-xl text-blue-100 max-w-2xl mx-auto">
            Trusted by innovative companies worldwide to build exceptional teams
          </p>
        </div>
      </section>

      {/* Trusted Companies */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-950 mb-4">
              Trusted by Leading Companies
            </h2>
            <p className="text-lg text-blue-700">
              We partner with forward-thinking organizations across industries and sizes
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center items-center gap-10 md:gap-16">
            {["Microsoft", "Google", "Amazon", "IBM", "Oracle", "Adobe", "Cisco", "Dell"].map((client, index) => (
              <div key={index} className="flex items-center justify-center">
                <span className="text-2xl font-semibold text-gray-400">{client}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="section-padding bg-blue-50">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-950 mb-4">
              Industries We Serve
            </h2>
            <p className="text-lg text-blue-700">
              Our specialized recruitment expertise spans across diverse sectors
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl p-8 shadow-sm border border-blue-100 flex flex-col h-full"
              >
                <h3 className="text-xl font-semibold text-blue-950 mb-3">{industry.name}</h3>
                <p className="text-blue-700 mb-6 flex-grow">{industry.description}</p>
                <div className="mt-auto">
                  <h4 className="text-sm font-semibold text-blue-800 mb-2">Notable Clients:</h4>
                  <div className="flex flex-wrap gap-2">
                    {industry.companies.map((company, idx) => (
                      <span key={idx} className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm">
                        {company}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-950 mb-4">
              Client Success Stories
            </h2>
            <p className="text-lg text-blue-700">
              Real results we've delivered for our partners
            </p>
          </div>

          <div className="space-y-16">
            {caseStudies.map((caseStudy, index) => (
              <div key={index} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}>
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="bg-blue-50 inline-block px-3 py-1 rounded-full text-blue-600 text-sm font-medium mb-4">
                    {caseStudy.industry}
                  </div>
                  <h3 className="text-2xl font-bold text-blue-950 mb-4">
                    {caseStudy.title}
                  </h3>
                  
                  <div className="space-y-4 mb-6">
                    <div>
                      <h4 className="font-semibold text-blue-800 mb-1">The Challenge</h4>
                      <p className="text-blue-700">{caseStudy.challenge}</p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-blue-800 mb-1">Our Solution</h4>
                      <p className="text-blue-700">{caseStudy.solution}</p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-blue-800 mb-1">The Result</h4>
                      <p className="text-blue-700">{caseStudy.result}</p>
                    </div>
                  </div>
                  
                  <a href="/contact" className="inline-flex items-center text-blue-600 font-medium hover:text-blue-700">
                    Read full case study <ArrowRight size={16} className="ml-2" />
                  </a>
                </div>
                
                <div className={`rounded-lg overflow-hidden shadow-xl ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <img
                    src={caseStudy.image}
                    alt={caseStudy.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <TestimonialsSection />

      {/* CTA Section */}
      <section className="section-padding bg-blue-900 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Join Our Growing Client Network
          </h2>
          <p className="text-xl text-blue-200 max-w-2xl mx-auto mb-10">
            Discover how we can help your organization find exceptional talent and build winning teams.
          </p>
          <a href="/contact" className="btn-accent inline-flex items-center">
            Get in Touch <ArrowRight size={18} className="ml-2" />
          </a>
        </div>
      </section>
    </main>
  );
};

export default Clients;
