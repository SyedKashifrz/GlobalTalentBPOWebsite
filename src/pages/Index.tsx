import React from 'react';
import VideoHeroSection from '../components/VideoHeroSection';
import ServicesSection from '../components/ServicesSection';
import AboutSection from '../components/AboutSection';
import WorkSection from '../components/WorkSection';
import TestimonialsSection from '../components/TestimonialsSection';
import StatsSection from '../components/StatsSection';
import ScrollingClientsSection from '../components/ScrollingClientsSection';
import ContactSection from '../components/ContactSection';
import ClientsTickerSection from '../components/ClientsTickerSection';
import ServiceBoxes from '../components/ServiceBoxes';

const Index = () => {
  // Update document title to reflect branding
  React.useEffect(() => {
    document.title = "The Global Talent BPO | Global Talent Solutions";
  }, []);

  return (
    <main>
      <VideoHeroSection />
      <ClientsTickerSection />
      <ServiceBoxes />
      <ServicesSection />
      <AboutSection />
      <StatsSection />
      <WorkSection />
      <TestimonialsSection />
      <ScrollingClientsSection />
      <ContactSection />
    </main>
  );
};

export default Index;
