
import React from 'react';
import { LineChart } from 'lucide-react';
import ServicePage from './ServicePage';

const TalentAnalytics = () => {
  return (
    <ServicePage
      title="Talent Analytics"
      description="Data-driven insights to optimize your hiring process and workforce planning strategies. Our talent analytics services provide actionable intelligence to refine your recruitment approach and improve hiring outcomes."
      icon={<LineChart className="h-8 w-8" />}
      features={[
        "Recruitment performance analytics",
        "Market intelligence reports",
        "Hiring process optimization",
        "Predictive workforce planning",
        "Talent market forecasting",
        "Competitive benchmarking"
      ]}
      benefits={[
        "Evidence-based hiring decisions",
        "Optimized recruitment spending",
        "Improved quality and speed of hire",
        "Strategic workforce planning insights",
        "Talent gap identification and resolution",
        "Continuous recruitment process improvement"
      ]}
    />
  );
};

export default TalentAnalytics;
