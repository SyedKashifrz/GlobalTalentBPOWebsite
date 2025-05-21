
import React from 'react';
import { Globe } from 'lucide-react';
import ServicePage from './ServicePage';

const GlobalRecruitment = () => {
  return (
    <ServicePage
      title="Global Recruitment"
      description="Access international talent pools and navigate cross-cultural hiring challenges with our specialized global recruitment services. Our worldwide presence and expertise enable seamless hiring across borders and jurisdictions."
      icon={<Globe className="h-8 w-8" />}
      features={[
        "International talent sourcing",
        "Cross-border hiring compliance",
        "Global mobility support",
        "Multilingual recruitment teams",
        "Cultural fit assessment",
        "Global compensation benchmarking"
      ]}
      benefits={[
        "Access to worldwide talent pools",
        "Compliance with international employment laws",
        "Reduced complexity in cross-border hiring",
        "Culturally diverse workforce development",
        "Streamlined global onboarding",
        "Consistent global hiring standards"
      ]}
    />
  );
};

export default GlobalRecruitment;
