
import React from 'react';
import { Calculator, Receipt, FileText } from 'lucide-react';
import ServicePage from './ServicePage';

const PayrollManagement = () => {
  return (
    <ServicePage
      title="Payroll Management"
      description="Streamline your global payroll operations with our comprehensive payroll management services. We handle everything from processing to compliance, ensuring accurate and timely payments for your workforce worldwide."
      icon={<Calculator className="h-8 w-8" />}
      features={[
        "Automated payroll processing and calculations",
        "Tax compliance and reporting across multiple jurisdictions",
        "Multi-country payroll support with local expertise",
        "Employee self-service portals for payment information",
        "Integration with HR and accounting systems",
        "Real-time payroll analytics and reporting dashboards",
        "Digital payment solutions for international teams",
        "Contractor payment management"
      ]}
      benefits={[
        "Reduce payroll processing time by up to 60%",
        "Ensure compliance with local tax regulations globally",
        "Minimize payroll errors and compliance risks",
        "Improve employee satisfaction with timely, accurate payments",
        "Access detailed payroll insights and analytics",
        "Scale payroll operations globally with ease",
        "Reduce administrative burden on your internal team",
        "Single dashboard view of all global payroll operations"
      ]}
      additionalContent={
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gray-50 p-6 rounded-lg">
            <div className="flex items-center gap-3 mb-4">
              <Receipt className="h-6 w-6 text-gray-800" />
              <h3 className="text-lg font-semibold text-gray-800">Global Payroll Coverage</h3>
            </div>
            <p className="text-[rgb(31,31,31)] mb-4">
              Our payroll services cover 120+ countries with local expertise in each region, ensuring full compliance with local regulations and tax requirements.
            </p>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span className="text-[rgb(31,31,31)]">North America - United States, Canada, Mexico</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span className="text-[rgb(31,31,31)]">Europe - UK, Germany, France, Spain, Italy, and 30+ countries</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span className="text-[rgb(31,31,31)]">Asia Pacific - Australia, Japan, Singapore, India, and 20+ countries</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span className="text-[rgb(31,31,31)]">Latin America - Brazil, Colombia, Argentina, Chile, and 15+ countries</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-gray-50 p-6 rounded-lg">
            <div className="flex items-center gap-3 mb-4">
              <FileText className="h-6 w-6 text-gray-800" />
              <h3 className="text-lg font-semibold text-gray-800">Compliance Guarantee</h3>
            </div>
            <p className="text-[rgb(31,31,31)] mb-4">
              Our team of global compliance experts ensures your payroll remains fully compliant with all local laws and regulations, including:
            </p>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span className="text-[rgb(31,31,31)]">Tax withholding and reporting requirements</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span className="text-[rgb(31,31,31)]">Social security and pension contributions</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span className="text-[rgb(31,31,31)]">Healthcare and insurance regulations</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span className="text-[rgb(31,31,31)]">Labor laws and employment requirements</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span className="text-[rgb(31,31,31)]">Data privacy and protection standards</span>
              </li>
            </ul>
          </div>
        </div>
      }
    />
  );
};

export default PayrollManagement;
