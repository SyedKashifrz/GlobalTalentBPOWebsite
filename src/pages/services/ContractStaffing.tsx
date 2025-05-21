
import React from 'react';
import { Clock } from 'lucide-react';
import ServicePage from './ServicePage';

const ContractStaffing = () => {
  return (
    <ServicePage
      title="Contract Staffing"
      description="Flexible workforce solutions with specialized temporary professionals for project-based needs. Our contract staffing services help you scale your team quickly and efficiently for short-term initiatives or specialized projects."
      icon={<Clock className="h-8 w-8" />}
      features={[
        "Short and long-term contract placements",
        "Project-based team assembly",
        "Interim management solutions",
        "Contract-to-hire options",
        "Specialized skill acquisition",
        "Flexible staffing models"
      ]}
      benefits={[
        "Rapid scaling for project needs",
        "Reduced fixed employment costs",
        "Access to specialized skills on demand",
        "Increased workforce flexibility",
        "Risk mitigation in workforce planning",
        "Streamlined contractor management"
      ]}
    />
  );
};

export default ContractStaffing;
