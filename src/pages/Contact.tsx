import React from 'react';
import ContactSection from '../components/ContactSection';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {
  const offices = [
    {
      city: "Abu Dhabi",
      address: "Musaffah-M26 Warehouse # 2 , Abu Dhabi, UAE",
      phone: "+971 2 551 1392",
      email: "abu-dhabi@globaltalenthire.com",
      image: "/lovable-uploads/abudhabi.jpg"
    },
    {
      city: "London",
      address:"45 Lorian Close, London, England, N12 7DW",
      phone: "+44 7500177333",
      email: "london@globaltalenthire.com",
      image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad"
    },
    {
      city: "Singapore",
      address: "78 Talent Tower, Marina Bay, Singapore 018956",
      phone: "+65 6123 4567",
      email: "singapore@globaltalenthire.com",
      image: "https://images.unsplash.com/photo-1565967511849-76a60a516170"
    }
  ];

  return (
    <main>
      {/* Hero */}
      <section className="relative h-[500px] overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 overflow-hidden">
          <video 
            autoPlay 
            muted 
            loop 
            playsInline
            className="absolute h-full w-full object-cover opacity-100"
          >
            <source src="/lovable-uploads/Contact us.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="absolute inset-0 bg-blue-900 opacity-60"></div>
        </div>

        <div className="container-custom relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
            Contact Us
          </h1>
          <p className="mt-6 text-lg md:text-xl text-blue-100 max-w-2xl mx-auto">
            Let's discuss how we can help you build your dream team
          </p>
        </div>
      </section>

      {/* Contact Form and Info */}
      <ContactSection />

      {/* Global Offices */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-950 mb-4">
              Our Global Offices
            </h2>
            <p className="text-lg text-blue-700">
              Connecting talent worldwide through our strategic locations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {offices.map((office, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl shadow-sm border border-blue-100 overflow-hidden"
              >
                <div className="h-48 overflow-hidden">
                  <img 
                    src={office.image}
                    alt={`${office.city} Office`}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-blue-950 mb-4">{office.city}</h3>
                  
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <MapPin size={18} className="text-blue-600 mt-1 mr-3 flex-shrink-0" />
                      <p className="text-blue-700">{office.address}</p>
                    </div>
                    
                    <div className="flex items-center">
                      <Phone size={18} className="text-blue-600 mr-3 flex-shrink-0" />
                      <a href={`tel:${office.phone.replace(/[^0-9+]/g, '')}`} className="text-blue-700 hover:text-blue-600">
                        {office.phone}
                      </a>
                    </div>
                    
                    <div className="flex items-center">
                      <Mail size={18} className="text-blue-600 mr-3 flex-shrink-0" />
                      <a href={`mailto:${office.email}`} className="text-blue-700 hover:text-blue-600">
                        {office.email}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-blue-50">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-950 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-blue-700">
              Find answers to common questions about working with us
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            {[
              {
                question: "What industries do you specialize in?",
                answer: "We specialize in recruitment across a wide range of industries including technology, finance, healthcare, manufacturing, retail, and education. Our recruiters are organized by industry specialization to ensure deep expertise in each sector."
              },
              {
                question: "How long does the recruitment process typically take?",
                answer: "The timeline varies depending on the position's complexity and seniority. On average, mid-level positions are filled within 3-5 weeks, while executive searches may take 6-8 weeks. We work with you to establish clear timelines and milestones at the beginning of each engagement."
              },
              {
                question: "Do you work with companies of all sizes?",
                answer: "Yes, we partner with organizations of all sizes, from startups to Fortune 500 companies. We tailor our approach based on your company's stage, culture, and specific recruitment needs."
              },
              {
                question: "What geographical regions do you cover?",
                answer: "We operate globally with a presence in North America, Europe, Asia, and Australia. Our international network allows us to source candidates from over 40 countries, providing truly global talent solutions."
              },
              {
                question: "How do you ensure candidates are a good cultural fit?",
                answer: "We take time to deeply understand your company culture through detailed discussions with leadership and team members. Our assessment process evaluates not just skills and experience, but also values alignment, communication style, and cultural compatibility."
              },
              {
                question: "What makes The Global Talent Hire different from other recruitment firms?",
                answer: "Our combination of global reach, industry specialization, and personalized service sets us apart. We're not just filling positions—we're building long-term partnerships and providing strategic talent insights to help your organization thrive."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-blue-100">
                <h3 className="text-lg font-semibold text-blue-950 mb-2">
                  {faq.question}
                </h3>
                <p className="text-blue-700">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
