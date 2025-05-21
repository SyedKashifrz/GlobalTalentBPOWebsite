
import React from 'react';
import { Globe, Users, BarChart } from 'lucide-react';

const FeaturesGrid = () => {
  return (
    <div className="grid md:grid-cols-3 gap-8 mb-16">
      <div className="text-center">
        <div className="flex justify-center mb-4">
          <Globe className="h-12 w-12 text-[rgb(29,33,77)]" />
        </div>
        <h3 className="text-xl font-bold mb-3 uppercase text-[rgb(29,33,77)]">BUILD TO GROSS</h3>
        <p className="text-gray-700">
          Calculate and aggregate your global gross payrolls while building your payrolls from scratch.
        </p>
      </div>
      
      <div className="text-center">
        <div className="flex justify-center mb-4">
          <Users className="h-12 w-12 text-[rgb(29,33,77)]" />
        </div>
        <h3 className="text-xl font-bold mb-3 uppercase text-[rgb(29,33,77)]">GROSS TO NET</h3>
        <p className="text-gray-700">
          Calculate net values from gross earnings for employees automatically based on their location.
        </p>
      </div>
      
      <div className="text-center">
        <div className="flex justify-center mb-4">
          <BarChart className="h-12 w-12 text-[rgb(29,33,77)]" />
        </div>
        <h3 className="text-xl font-bold mb-3 uppercase text-[rgb(29,33,77)]">AGGREGATION</h3>
        <p className="text-gray-700">
          Aggregate payroll data across multiple countries, currencies, and legal entities in real-time.
        </p>
      </div>
    </div>
  );
};

export default FeaturesGrid;
