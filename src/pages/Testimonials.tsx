import React, { useState } from 'react';
import { Star, Quote, Filter, Medal } from 'lucide-react';

const Testimonials = () => {
  const [selectedBatch, setSelectedBatch] = useState('All');

  const testimonials = [
    {
      id: 1,
      name: 'Raj Kumar',
      batch: 'Batch 15 - 2024',
      service: 'Indian Army',
      rating: 5,
      quote: "Trinity SSB Mentorship transformed my approach to the SSB process. The personalized guidance from Colonel Murali was exceptional. The mock interviews and psychology sessions gave me the confidence I needed to succeed.",
      image: null,
      achievement: "Selected for OTA Chennai"
    },
    {
      id: 2,
      name: 'Priya Sharma',
      batch: 'Batch 12 - 2024',
      service: 'Indian Navy',
      rating: 5,
      quote: "The comprehensive training program covered every aspect of SSB. Colonel Ramakrishnan's psychology sessions were particularly helpful. I felt fully prepared for the actual SSB.",
      image: null,
      achievement: "Selected for INS Mandovi"
    },
    {
      id: 3,
      name: 'Arjun Singh',
      batch: 'Batch 18 - 2024',
      service: 'Indian Air Force',
      rating: 5,
      quote: "The group testing practice with Colonel Anup was invaluable. The mentors' experience and insights made all the difference. Highly recommend to all defence aspirants.",
      image: null,
      achievement: "Selected for Air Force Academy"
    },
  
    {
      id: 5,
      name: 'Sneha Patel',
      batch: 'Batch 14 - 2024',
      service: 'Indian Army',
      rating: 5,
      quote: "The 12-day program was intensive yet enjoyable. The personal attention from mentors and the structured approach to each test made a huge difference in my performance.",
      image: null,
      achievement: "Selected for OTA Chennai"
    },
  
    {
      id: 7,
      name: 'Kavya Menon',
      batch: 'Batch 19 - 2024',
      service: 'Indian Navy',
      rating: 5,
      quote: "The mentors' approach is very systematic and professional. They helped me overcome my weaknesses and build on my strengths. Forever grateful to Trinity SSB team.",
      image: null,
      achievement: "Selected for INS Mandovi"
    }
  ];

  const batches = ['All', 'Batch 12 - 2024', 'Batch 14 - 2024', 'Batch 15 - 2024', 'Batch 16 - 2024', 'Batch 17 - 2024', 'Batch 18 - 2024', 'Batch 19 - 2024', 'Batch 20 - 2024'];

  const filteredTestimonials = testimonials.filter(testimonial => 
    selectedBatch === 'All' || testimonial.batch === selectedBatch
  );

  const successStories = testimonials.filter(t => t.achievement.includes('Selected')).length;
  const totalStudents = testimonials.length;

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`h-4 w-4 ${
          index < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Success Stories</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Hear from our successful candidates who achieved their dream of serving the nation
          </p>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-gradient-to-r from-green-600 to-blue-700 text-white p-6 rounded-xl text-center">
            <div className="text-3xl font-bold mb-2">{successStories}</div>
            <div className="text-green-100">Successful Selections</div>
          </div>
          <div className="bg-gradient-to-r from-orange-500 to-red-600 text-white p-6 rounded-xl text-center">
            <div className="text-3xl font-bold mb-2">{totalStudents}+</div>
            <div className="text-orange-100">Students Trained</div>
          </div>
          <div className="bg-gradient-to-r from-blue-600 to-purple-700 text-white p-6 rounded-xl text-center">
            <div className="text-3xl font-bold mb-2">85%</div>
            <div className="text-blue-100">Success Rate</div>
          </div>
        </div>


        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredTestimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              {/* Header */}
              <div className="bg-gradient-to-r from-gray-50 to-gray-100 p-6 border-b">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="font-bold text-gray-900 text-lg">{testimonial.name}</h3>
                    <p className="text-sm text-green-600 font-semibold">{testimonial.service}</p>
                    <p className="text-sm text-gray-500">{testimonial.batch}</p>
                  </div>
                </div>
                
                {/* Achievement Badge */}
                <div className={`inline-flex items-center space-x-2 px-3 py-1 rounded-full text-xs font-semibold ${
                  testimonial.achievement.includes('Selected')
                    ? 'bg-green-100 text-green-800'
                    : testimonial.achievement.includes('Conference Out')
                    ? 'bg-yellow-100 text-yellow-800'
                    : 'bg-blue-100 text-blue-800'
                }`}>
                  <Medal className="h-3 w-3" />
                  <span>{testimonial.achievement}</span>
                </div>
              </div>

              {/* Quote */}
              <div className="p-6">
                <div className="relative">
                  <Quote className="h-8 w-8 text-gray-300 absolute -top-2 -left-2" />
                  <p className="text-gray-700 leading-relaxed pl-6 italic">
                    {testimonial.quote}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* No Results */}
        {filteredTestimonials.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-400 mb-4">
              <Quote className="h-16 w-16 mx-auto" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No testimonials found</h3>
            <p className="text-gray-600 mb-4">
              Try selecting a different batch filter
            </p>
            <button
              onClick={() => setSelectedBatch('All')}
              className="text-green-600 hover:text-green-700 font-semibold"
            >
              Show All Testimonials
            </button>
          </div>
        )}

        {/* CTA Section */}
        <div className="mt-16 bg-gradient-to-r from-green-900 via-blue-900 to-green-800 text-white p-8 rounded-xl text-center">
          <h3 className="text-2xl font-bold mb-4">Ready to Write Your Success Story?</h3>
          <p className="mb-6 text-gray-100">
            Join our proven program and take the first step towards your defence career
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/batches"
              className="bg-gradient-to-r from-orange-500 to-red-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-orange-600 hover:to-red-700 transition-all duration-200"
            >
              View Batches
            </a>
            <a
              href="/contact"
              className="bg-white text-green-800 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-200"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;