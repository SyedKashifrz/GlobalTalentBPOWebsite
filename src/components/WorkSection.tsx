import React from 'react';
import { Link } from 'react-router-dom';

const WorkSection = () => {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            The Global Talent Hire is your solution to managing Global Teams
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div className="bg-red-50 rounded-xl p-8 border border-red-100 relative">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Hire and Pay anyone, anywhere in minutes
            </h3>
            <p className="text-[rgb(31,31,31)] mb-6">
              Let The Global Talent Hire manage all tasks for you. Hire, manage your global team with ease.
              We handle compliance, payroll, benefits, and local regulations so 
              you can enjoy success.
            </p>
            
            <div className="mt-6 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full overflow-hidden">
                  <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="Team Member" className="w-full h-full object-cover" />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-[rgb(31,31,31)]">Sarah Lyndon</p>
                </div>
                <div className="flex items-center gap-2">
                  <img src="https://flagcdn.com/w20/us.png" alt="US flag" className="w-5 h-3" />
                  <span className="text-sm text-[rgb(31,31,31)]">$80,000/year</span>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full overflow-hidden">
                  <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="Team Member" className="w-full h-full object-cover" />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-[rgb(31,31,31)]">Alex Raynott</p>
                </div>
                <div className="flex items-center gap-2">
                  <img src="https://flagcdn.com/w20/gb.png" alt="UK flag" className="w-5 h-3" />
                  <span className="text-sm text-[rgb(31,31,31)]">£60,000/year</span>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full overflow-hidden">
                  <img src="https://randomuser.me/api/portraits/men/67.jpg" alt="Team Member" className="w-full h-full object-cover" />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-[rgb(31,31,31)]">Marco Lee</p>
                </div>
                <div className="flex items-center gap-2">
                  <img src="https://flagcdn.com/w20/ca.png" alt="Canada flag" className="w-5 h-3" />
                  <span className="text-sm text-[rgb(31,31,31)]">CAD 75,000/yr</span>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full overflow-hidden">
                  <img src="https://randomuser.me/api/portraits/women/28.jpg" alt="Team Member" className="w-full h-full object-cover" />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-[rgb(31,31,31)]">Ana Miller</p>
                </div>
                <div className="flex items-center gap-2">
                  <img src="https://flagcdn.com/w20/ke.png" alt="Kenya flag" className="w-5 h-3" />
                  <span className="text-sm text-[rgb(31,31,31)]">€ 45,000/yr</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-blue-50 rounded-xl p-8 border border-blue-100 relative">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Expand your team and hire globally
            </h3>
            <p className="text-[rgb(31,31,31)] mb-6">
              Choose our services and we can help you globally hire, onboard, manage, and pay your team. 
              We take care of all the compliance issues and risks, so you 
              can focus on scaling your business.
            </p>
            
            <Link to="/services/remote-talent-solutions" className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm inline-block">
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkSection;
