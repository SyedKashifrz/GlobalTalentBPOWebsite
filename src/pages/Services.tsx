
import React from 'react';
import ServicesHero from '../components/services/ServicesHero';
import ServicesIntro from '../components/services/ServicesIntro';
import ServiceCards from '../components/services/ServiceCards';
import ServicesMeetingCTA from '../components/services/ServicesMeetingCTA';
import ServicesClients from '../components/services/ServicesClients';
import ServicesGlobalPresence from '../components/services/ServicesGlobalPresence';

const Services = () => {
  React.useEffect(() => {
    document.title = "Services | The Global Talent Hire";
  }, []);

  return (
    <main>
      <ServicesHero />
      <ServicesIntro />
      <ServiceCards />
      <ServicesMeetingCTA />
      <ServicesClients />
      <ServicesGlobalPresence />
    </main>
  );
};

export default Services;
