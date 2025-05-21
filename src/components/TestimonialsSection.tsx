import React from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    content: "The Global Talent BPO team found us exceptional candidates that perfectly matched our company culture. Their understanding of our industry needs was impressive.",
    author: "Calina Aissaoui",
    position: "Talent Acquisition Specialist,Cross Border Talent.",
    image: "/lovable-uploads/crossborder.jpg",
    rating: 5
  },
  {
    id: 2,
    content: "Working with Global Talent BPO transformed our hiring process. They helped us recruit top executives across three international markets in record time.",
    author: "João Frederico Neto",
    position: "CEO, Alsvior Global",
    image: "/lovable-uploads/Alsvior.jpg",
    rating: 5
  },
  {
    id: 3,
    content: "Their global reach helped us find specialized talent we couldn't source locally. The candidates they provided exceeded our expectations in every way.",
    author: "Tereza Daneva",
    position: "International Talent Acquisition, Hired Abroad",
    image: "/lovable-uploads/hired abroad.jpg",
    rating: 5
  }
];

const TestimonialsSection = () => {
  return (
    <section className="section-padding bg-gradient-to-b from-white to-gray-50">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-600 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-lg text-[rgb(31,31,31)]">
            We've helped hundreds of organizations find their perfect talent match
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id}
              className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 flex flex-col h-full"
            >
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={18} fill="#FFD700" color="#FFD700" />
                ))}
              </div>
              <p className="text-[rgb(31,31,31)] italic mb-6 flex-grow">
                "{testimonial.content}"
              </p>
              <div className="flex items-center">
                <img 
                  src={testimonial.image}
                  alt={testimonial.author}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-semibold text-gray-600">{testimonial.author}</h4>
                  <p className="text-sm text-[rgb(31,31,31)]">{testimonial.position}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
