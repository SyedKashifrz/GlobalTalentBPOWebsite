
import React from 'react';
import { Search } from 'lucide-react';
import ServicePage from './ServicePage';

const ExecutiveSearch = () => {
  return (
    <ServicePage
      title="Executive Search"
      description="Strategic recruitment of senior executives and leadership positions tailored to your organization's needs and culture. We identify and attract top-tier talent for critical roles that will drive your business forward."
      icon={<Search className="h-8 w-8" />}
      features={[
        "C-suite and senior management recruitment",
        "Board member selection",
        "Succession planning",
        "Leadership team development",
        "Industry-specialized executive search",
        "Confidential search process"
      ]}
      benefits={[
        "Access to exclusive networks of high-level talent",
        "Reduced time-to-hire for critical leadership positions",
        "Improved executive retention rates",
        "Strategic alignment of leadership with business goals",
        "Comprehensive leadership assessment",
        "Seamless integration of new executives"
      ]}
    />
  );
};

export default ExecutiveSearch;
