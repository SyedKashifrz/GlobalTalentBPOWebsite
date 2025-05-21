
import React from 'react';
import { Users } from 'lucide-react';
import ServicePage from './ServicePage';

const TalentAcquisition = () => {
  return (
    <ServicePage
      title="Talent Acquisition"
      description="Full-cycle recruitment services to identify, attract, and hire top talent across industries and roles. Our comprehensive approach ensures you find candidates with the right skills, experience, and cultural fit for your organization."
      icon={<Users className="h-8 w-8" />}
      features={[
        "Full-cycle recruitment management",
        "Customized hiring strategies",
        "Employer branding consultation",
        "Candidate experience optimization",
        "Skills and cultural fit assessment",
        "Talent pipeline development"
      ]}
      benefits={[
        "Reduced cost-per-hire and time-to-fill",
        "Improved quality of hire and retention rates",
        "Enhanced employer brand and candidate experience",
        "Access to diverse talent pools",
        "Scalable recruitment processes",
        "Data-driven hiring decisions"
      ]}
    />
  );
};

export default TalentAcquisition;
