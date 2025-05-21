
import React from 'react';

const ApiIntegration = () => {
  return (
    <div className="bg-gray-50 p-8 rounded-lg mb-16">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-[rgb(29,33,77)] mb-4">Custom API Integration</h2>
        <p className="text-lg">Connect with virtually any system through our robust API capabilities</p>
      </div>
      
      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-lg">
          <h3 className="text-lg font-bold mb-3">Data Exchange</h3>
          <ul className="space-y-2">
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <span>Secure, encrypted data transfer</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <span>Real-time synchronization</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <span>Bidirectional data flow</span>
            </li>
          </ul>
        </div>
        
        <div className="bg-white p-6 rounded-lg">
          <h3 className="text-lg font-bold mb-3">Developer Support</h3>
          <ul className="space-y-2">
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <span>Comprehensive documentation</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <span>Developer sandbox environment</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <span>Dedicated integration support</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ApiIntegration;
