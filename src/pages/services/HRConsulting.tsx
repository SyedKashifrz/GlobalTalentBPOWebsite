
import React from 'react';
import { Briefcase } from 'lucide-react';
import ServicePage from './ServicePage';

const HRConsulting = () => {
  return (
    <ServicePage
      title="HR Consulting"
      description="Expert guidance on recruitment strategies, employer branding, and talent retention initiatives. Our HR consulting services help optimize your overall talent strategy and create an environment where top talent thrives."
      icon={<Briefcase className="h-8 w-8" />}
      features={[
        "Talent strategy development",
        "Compensation and benefits advisory",
        "Performance management systems",
        "Employee retention programs",
        "HR policy development",
        "Organizational structure optimization"
      ]}
      benefits={[
        "Improved employee retention and satisfaction",
        "Optimized HR processes and policies",
        "Enhanced employer brand and value proposition",
        "Strategic alignment of HR with business goals",
        "Reduced HR compliance risks",
        "Data-driven talent management"
      ]}
    />
  );
};

export default HRConsulting;
