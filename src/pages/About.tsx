import React from 'react';
import { CheckCircle } from 'lucide-react';
const About = () => {
  return <main>
      {/* Hero */}
      <section className="relative bg-gradient-to-r from-blue-950 to-blue-900 pt-28 pb-20 lg:pt-36 lg:pb-28 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-blue-600 w-[500px] h-[500px] rounded-full blur-3xl opacity-20"></div>
        </div>

        <div className="container-custom relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight lg:text-3xl">
            About Us
          </h1>
          <p className="mt-6 text-lg md:text-xl text-blue-100 max-w-2xl mx-auto">
            We're on a mission to transform how companies connect with exceptional talent across the globe
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl text-blue-950 mb-6 md:text-3xl font-semibold text-center">
                Our Story
              </h2>
              
              <p className="text-lg mb-6 text-sky-950">
                Founded in 2010, The Global Talent Hire began with a simple mission: to help companies find exceptional talent regardless of geographical boundaries. Our founder, having experienced the challenges of traditional recruitment firsthand, envisioned a more effective, personalized approach.
              </p>
              
              <p className="text-lg mb-6 text-sky-950">
                What started as a small team working with local businesses has evolved into a global operation serving clients across industries and continents. Today, we leverage technology, industry expertise, and our vast global network to connect forward-thinking companies with the talent they need to thrive.
              </p>
              
              <p className="text-lg text-sky-950">
                Despite our growth, we've maintained our core values: personalized service, integrity, and an unwavering commitment to both our clients and candidates.
              </p>
            </div>
            
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0" alt="Team meeting in modern office" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="section-padding bg-blue-50">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-950 mb-4">
              Our Core Values
            </h2>
            <p className="text-lg text-sky-950">
              These principles guide everything we do at The Global Talent Hire
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[{
            title: "Excellence",
            description: "We strive for excellence in every interaction, placement, and relationship we build."
          }, {
            title: "Integrity",
            description: "We operate with complete transparency and honesty, building trust with clients and candidates alike."
          }, {
            title: "Global Perspective",
            description: "We embrace diversity and believe talent knows no geographical boundaries."
          }, {
            title: "Innovation",
            description: "We continuously evolve our methods to stay ahead in the ever-changing recruitment landscape."
          }, {
            title: "Partnership",
            description: "We view ourselves as partners in our clients' growth, not just service providers."
          }, {
            title: "People First",
            description: "We recognize that recruitment is fundamentally about people, not just filling positions."
          }].map((value, index) => <div key={index} className="bg-white rounded-xl p-8 shadow-sm border border-blue-100">
                <div className="text-blue-600 mb-4">
                  <CheckCircle size={24} />
                </div>
                <h3 className="text-xl font-semibold text-blue-950 mb-3">{value.title}</h3>
                <p className="text-sky-950">{value.description}</p>
              </div>)}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-950 mb-4">
              Our Leadership Team
            </h2>
            <p className="text-lg text-sky-950">
              Meet the experienced professionals guiding our global recruitment operations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[{
            name: "Alexandra Richardson",
            position: "CEO & Founder",
            image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330"
          }, {
            name: "Michael Chen",
            position: "Chief Operations Officer",
            image: "https://images.unsplash.com/photo-1560250097-0b93528c311a"
          }, {
            name: "Sarah Johnson",
            position: "Global Recruitment Director",
            image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2"
          }, {
            name: "David Rodriguez",
            position: "Chief Technology Officer",
            image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d"
          }].map((member, index) => <div key={index} className="text-center">
                <div className="rounded-full overflow-hidden w-48 h-48 mx-auto mb-6">
                  <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                </div>
                <h3 className="text-xl font-semibold text-blue-950 mb-1">{member.name}</h3>
                <p className="text-blue-600">{member.position}</p>
              </div>)}
          </div>
        </div>
      </section>
    </main>;
};
export default About;