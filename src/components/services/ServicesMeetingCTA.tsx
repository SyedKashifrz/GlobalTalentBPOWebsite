
import React from 'react';

const ServicesMeetingCTA = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-[rgb(140,29,64)] to-[rgb(170,49,94)]">
      <div className="container-custom grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[rgb(255,255,255)]">Book a Meeting<br />with us!</h2>
          <p className="text-lg mb-4 text-white">We are here to help you</p>
          <p className="text-lg mb-8 text-white">Don't hesitate, book your meeting now!</p>
          <div className="hidden lg:block">
            <img 
              src="/lovable-uploads/Map M.png" 
              alt="Book a meeting" 
              className="max-w-sm rounded-lg shadow-lg"
            />
          </div>
        </div>

        <div className="bg-white p-8 rounded-lg shadow-md text-black">
          <h3 className="text-xl font-semibold mb-6 text-center">Schedule a Call</h3>
          <form className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <input type="text" placeholder="First name*" className="w-full p-3 border border-gray-300 rounded" />
              </div>
              <div>
                <input type="text" placeholder="Last name*" className="w-full p-3 border border-gray-300 rounded" />
              </div>
            </div>
            
            <div>
              <select className="w-full p-3 border border-gray-300 rounded bg-white">
                <option>Country</option>
                <option>United States</option>
                <option>United Kingdom</option>
                <option>Canada</option>
                <option>Australia</option>
              </select>
            </div>
            
            <div className="flex gap-2 items-center">
              <input type="email" placeholder="Work Email*" className="flex-1 p-3 border border-gray-300 rounded" />
              <input type="text" placeholder="Company size" className="flex-1 p-3 border border-gray-300 rounded" />
            </div>
            
            <div>
              <input type="tel" placeholder="Your Phone Number" className="w-full p-3 border border-gray-300 rounded" />
            </div>
            
            <div>
              <select className="w-full p-3 border border-gray-300 rounded bg-white">
                <option>No. of employees in the company</option>
                <option>1-10</option>
                <option>11-50</option>
                <option>51-200</option>
                <option>201-500</option>
                <option>501+</option>
              </select>
            </div>
            
            <div className="text-center">
              <button type="submit" className="bg-[rgb(140,29,64)] text-white px-6 py-3 rounded-lg hover:bg-opacity-90 transition-all">
                Schedule a Call
              </button>
            </div>
            
            <p className="text-xs text-gray-500 text-center">
              * By sending this form you agree to the contact terms
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ServicesMeetingCTA;
