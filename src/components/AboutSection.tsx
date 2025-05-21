
import React from 'react';

const AboutSection = () => {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            As a supplier of professional services,
            we strive for excellence across the globe
          </h2>
          
          <div className="mt-8">
            <h3 className="text-2xl font-semibold text-red-600 mb-2">Onboarding</h3>
            <p className="text-lg text-[rgb(31,31,31)]">for global teams</p>
          </div>
        </div>
        
        <div className="flex justify-center">
          <div className="relative max-w-3xl">
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white rounded-xl shadow-lg p-5 relative">
                <img 
                  src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" 
                  alt="Onboarding dashboard" 
                  className="w-full h-auto rounded-lg"
                />
                
                <div className="absolute -bottom-4 -left-4 bg-white rounded-lg p-3 shadow-md">
                  <div className="flex items-center gap-2">
                    <div className="bg-green-100 rounded-full p-2">
                      <span className="text-green-600 font-bold">$</span>
                    </div>
                    <div>
                      <span className="font-bold">$ 7,048.00</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-gray-800 to-gray-900 text-white rounded-xl shadow-lg p-5">
                <div className="mb-2">
                  <p className="font-medium">United States</p>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>January 2023</span>
                    <span>$127,542.00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>February 2023</span>
                    <span>$98,789.25</span>
                  </div>
                  <div className="flex justify-between">
                    <span>March 2023</span>
                    <span>$158,522.67</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Total 2023</span>
                    <span>$384,853.92</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
