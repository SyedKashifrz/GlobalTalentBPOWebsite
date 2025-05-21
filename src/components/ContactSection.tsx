
import React from 'react';
import { Mail, Phone, MapPin, ArrowRight } from 'lucide-react';

const ContactSection = () => {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-600 mb-6">
              Ready to Build Your Dream Team?
            </h2>
            <p className="text-lg text-gray-500 mb-8">
              Contact us today to discuss your talent needs and discover how we can help you find the perfect candidates for your organization.
            </p>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-start">
                <MapPin size={22} className="text-gray-600 mt-1 mr-4" />
                <div>
                  <h3 className="font-semibold text-gray-600 mb-1">Our Headquarters</h3>
                  <p className="text-gray-500">
                  Calle Sant Jaume 35, Rubi, Barcelona<br />
                  08191, Spain
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Phone size={22} className="text-gray-600 mt-1 mr-4" />
                <div>
                  <h3 className="font-semibold text-gray-600 mb-1">Call Us</h3>
                  <p className="text-gray-500">+35 6658 66669</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Mail size={22} className="text-gray-600 mt-1 mr-4" />
                <div>
                  <h3 className="font-semibold text-gray-600 mb-1">Email Us</h3>
                  <p className="text-gray-500">info@globaltalenthire.com</p>
                </div>
              </div>
            </div>
            
            <a href="/contact" className="inline-flex items-center text-gray-600 font-medium hover:text-gray-700">
              View all locations <ArrowRight size={16} className="ml-2" />
            </a>
          </div>
          
          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
            <h3 className="text-2xl font-bold text-gray-600 mb-6">
              Get in Touch
            </h3>
            <form>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-600 mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-gray-500 focus:ring-1 focus:ring-gray-500 outline-none transition"
                    placeholder="Your name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-600 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-gray-500 focus:ring-1 focus:ring-gray-500 outline-none transition"
                    placeholder="Your email"
                  />
                </div>
              </div>
              
              <div className="mb-4">
                <label htmlFor="company" className="block text-sm font-medium text-gray-600 mb-1">
                  Company
                </label>
                <input
                  type="text"
                  id="company"
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-gray-500 focus:ring-1 focus:ring-gray-500 outline-none transition"
                  placeholder="Your company"
                />
              </div>
              
              <div className="mb-4">
                <label htmlFor="subject" className="block text-sm font-medium text-gray-600 mb-1">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-gray-500 focus:ring-1 focus:ring-gray-500 outline-none transition"
                  placeholder="Subject"
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-gray-600 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-gray-500 focus:ring-1 focus:ring-gray-500 outline-none transition"
                  placeholder="Your message"
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="btn-primary w-full"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
