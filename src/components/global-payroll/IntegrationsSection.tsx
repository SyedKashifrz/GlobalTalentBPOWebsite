
import React from 'react';
import { RefreshCw, Database, FileText } from 'lucide-react';

const IntegrationsSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl font-bold text-[rgb(29,33,77)] mb-4">
            Integrations that make your global payroll seamless
          </h2>
          <p className="text-lg text-gray-700">
            Connect your payroll systems with HR platforms, accounting software, and more to streamline your global payroll operations
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="border p-6 rounded-lg text-center">
            <div className="flex justify-center mb-4">
              <RefreshCw className="h-12 w-12 text-[rgb(29,33,77)]" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-[rgb(29,33,77)]">HR SYSTEMS</h3>
            <p className="text-gray-700">
              Seamlessly connect your HR systems with our global payroll platform. Our integration capabilities ensure data flows smoothly between your HR and payroll systems.
            </p>
          </div>
          
          <div className="border p-6 rounded-lg text-center">
            <div className="flex justify-center mb-4">
              <Database className="h-12 w-12 text-[rgb(29,33,77)]" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-[rgb(29,33,77)]">ACCOUNTING SOFTWARE</h3>
            <p className="text-gray-700">
              Integrate with popular accounting platforms to ensure financial data consistency across your systems. Reduce manual data entry and potential errors.
            </p>
          </div>
          
          <div className="border p-6 rounded-lg text-center">
            <div className="flex justify-center mb-4">
              <FileText className="h-12 w-12 text-[rgb(29,33,77)]" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-[rgb(29,33,77)]">TIME & ATTENDANCE</h3>
            <p className="text-gray-700">
              Connect time tracking systems to automatically calculate payroll based on recorded hours, shifts, and attendance data across your global workforce.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntegrationsSection;
