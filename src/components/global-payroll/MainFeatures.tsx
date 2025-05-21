
import React from 'react';
import { RefreshCw, FileText } from 'lucide-react';

const MainFeatures = () => {
  return (
    <div className="grid md:grid-cols-3 gap-12 mb-16">
      <div className="border p-6 rounded-lg">
        <div className="flex justify-center mb-4">
          <RefreshCw className="h-10 w-10 text-blue-600" />
        </div>
        <h3 className="text-lg font-bold mb-3 uppercase text-center text-[rgb(29,33,77)]">INTEGRATION</h3>
        <ul className="space-y-3">
          <li className="flex items-start">
            <span className="text-sm mr-2">•</span>
            <span>Connect with your HRIS systems</span>
          </li>
          <li className="flex items-start">
            <span className="text-sm mr-2">•</span>
            <span>Import data from various sources</span>
          </li>
          <li className="flex items-start">
            <span className="text-sm mr-2">•</span>
            <span>Export data to accounting systems</span>
          </li>
          <li className="flex items-start">
            <span className="text-sm mr-2">•</span>
            <span>Seamless API connections</span>
          </li>
        </ul>
      </div>
      
      <div className="border p-6 rounded-lg">
        <div className="flex justify-center mb-4">
          <RefreshCw className="h-10 w-10 text-green-600" />
        </div>
        <h3 className="text-lg font-bold mb-3 uppercase text-center text-[rgb(29,33,77)]">AUTOMATION</h3>
        <ul className="space-y-3">
          <li className="flex items-start">
            <span className="text-sm mr-2">•</span>
            <span>Automatic tax calculations</span>
          </li>
          <li className="flex items-start">
            <span className="text-sm mr-2">•</span>
            <span>Scheduled payments and reports</span>
          </li>
          <li className="flex items-start">
            <span className="text-sm mr-2">•</span>
            <span>Rules-based processing</span>
          </li>
          <li className="flex items-start">
            <span className="text-sm mr-2">•</span>
            <span>Custom workflow automations</span>
          </li>
        </ul>
      </div>
      
      <div className="border p-6 rounded-lg">
        <div className="flex justify-center mb-4">
          <FileText className="h-10 w-10 text-purple-600" />
        </div>
        <h3 className="text-lg font-bold mb-3 uppercase text-center text-[rgb(29,33,77)]">REPORTING</h3>
        <ul className="space-y-3">
          <li className="flex items-start">
            <span className="text-sm mr-2">•</span>
            <span>Comprehensive global reports</span>
          </li>
          <li className="flex items-start">
            <span className="text-sm mr-2">•</span>
            <span>Custom report builder</span>
          </li>
          <li className="flex items-start">
            <span className="text-sm mr-2">•</span>
            <span>Compliance documentation</span>
          </li>
          <li className="flex items-start">
            <span className="text-sm mr-2">•</span>
            <span>Data visualization tools</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MainFeatures;
