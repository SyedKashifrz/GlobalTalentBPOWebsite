
import React from 'react';

const SupportedIntegrations = () => {
  const integrations = [
    "Workday",
    "SAP",
    "Oracle",
    "BambooHR",
    "Xero",
    "QuickBooks",
    "Sage",
    "Zoho",
    "ADP",
    "Gusto",
    "Deputy",
    "When I Work"
  ];

  return (
    <div className="mb-16">
      <h3 className="text-2xl font-bold text-center mb-8 text-[rgb(29,33,77)]">
        Supported Integrations
      </h3>
      
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {integrations.map((system, index) => (
          <div key={index} className="border p-4 rounded-md text-center">
            <span className="font-medium">{system}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SupportedIntegrations;
