
import React from 'react';
import PayrollHeroSection from '../components/global-payroll/PayrollHeroSection';
import IntegrationsSection from '../components/global-payroll/IntegrationsSection';
import SupportedIntegrations from '../components/global-payroll/SupportedIntegrations';
import FeaturesGrid from '../components/global-payroll/FeaturesGrid';
import PayrollSummary from '../components/global-payroll/PayrollSummary';
import ApiIntegration from '../components/global-payroll/ApiIntegration';
import MainFeatures from '../components/global-payroll/MainFeatures';
import CTA from '../components/global-payroll/CTA';
import SimplifyBanner from '../components/global-payroll/SimplifyBanner';

const GlobalPayrollSoftware = () => {
  React.useEffect(() => {
    document.title = "Global Payroll Software | The Global Talent BPO";
  }, []);
  
  return (
    <main className="pt-28">
      <PayrollHeroSection />
      
      <section className="py-16 bg-white">
        <div className="container-custom">
          <IntegrationsSection />
          <SupportedIntegrations />
          <FeaturesGrid />
          <PayrollSummary />
          <ApiIntegration />
          <MainFeatures />
          <CTA />
        </div>
      </section>
      
      <SimplifyBanner />
    </main>
  );
};

export default GlobalPayrollSoftware;
