import React, { useState } from 'react';
import { Phone, Mail, MapPin, MessageSquare, Send, CheckCircle } from 'lucide-react';

const Contact = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Contact form submitted:', formData);
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
      });
    }, 3000);
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone Numbers',
      details: ['+91 9876543210', '+91 8765432109'],
      action: 'Call Now',
    },
    {
      icon: MessageSquare,
      title: 'WhatsApp',
      details: ['+91 9876543210', '+91 8765432109'],
      action: 'Chat Now',
    },
    {
      icon: Mail,
      title: 'Email',
      details: ['info@trinityssb.com', 'admissions@trinityssb.com'],
      action: 'Send Email',
    },
    {
      icon: MapPin,
      title: 'Office Hours',
      details: ['Mon - Sat: 9:00 AM - 7:00 PM', 'Sun: 10:00 AM - 5:00 PM'],
      action: 'Visit Us',
    },
  ];

  const subjects = [
    'General Inquiry',
    'Batch Information',
    'Enrollment Process',
    'Fee Structure',
    'Mentor Consultation',
    'Technical Support',
    'Other',
  ];

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gray-50 py-12 flex items-center justify-center">
        <div className="max-w-md mx-auto bg-white rounded-xl shadow-lg p-8 text-center">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <CheckCircle className="h-8 w-8 text-green-600" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Message Sent!</h2>
          <p className="text-gray-600 mb-6">
            Thank you for contacting us. We'll get back to you within 24 hours.
          </p>
          <div className="text-sm text-gray-500">
            <p>Check your email for a confirmation message</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Contact Us</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Get in touch with our team for any questions about our SSB preparation programs
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-1">
            <div className="bg-gradient-to-br from-green-900 via-blue-900 to-green-800 text-white p-8 rounded-2xl">
              <h2 className="text-2xl font-bold mb-8">Get in Touch</h2>
              <div className="space-y-8">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="bg-white bg-opacity-20 p-3 rounded-lg flex-shrink-0">
                      <info.icon className="h-6 w-6" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold mb-2">{info.title}</h3>
                      {info.details.map((detail, idx) => (
                        <p key={idx} className="text-green-100 text-sm mb-1">{detail}</p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* WhatsApp Buttons */}
              <div className="mt-8 space-y-3">
                <h3 className="font-semibold mb-4">Quick Contact</h3>
                <a
                  href="https://wa.me/919876543210"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-green-500 hover:bg-green-600 text-white py-3 px-4 rounded-lg font-semibold text-center transition-colors duration-200"
                >
                  WhatsApp: Admissions
                </a>
                <a
                  href="https://wa.me/918765432109"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-blue-500 hover:bg-blue-600 text-white py-3 px-4 rounded-lg font-semibold text-center transition-colors duration-200"
                >
                  WhatsApp: Support
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      placeholder="Enter your full name"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      placeholder="Enter your email"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      placeholder="+91 9876543210"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Subject *
                    </label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    >
                      <option value="">Select a subject</option>
                      {subjects.map(subject => (
                        <option key={subject} value={subject}>{subject}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent resize-none"
                    placeholder="Please describe how we can help you..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-orange-500 to-red-600 text-white py-4 rounded-lg font-semibold hover:from-orange-600 hover:to-red-700 transform hover:scale-105 transition-all duration-200 shadow-lg flex items-center justify-center space-x-2"
                >
                  <Send className="h-5 w-5" />
                  <span>Send Message</span>
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-16 bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Frequently Asked Questions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">What is the duration of the program?</h3>
              <p className="text-gray-600 text-sm mb-4">
                Our comprehensive SSB preparation program is 12 days long with flexible timing options.
              </p>
              
              <h3 className="font-semibold text-gray-900 mb-2">Do you provide study materials?</h3>
              <p className="text-gray-600 text-sm mb-4">
                Yes, we provide comprehensive study materials, practice tests, and reference materials.
              </p>
              
              <h3 className="font-semibold text-gray-900 mb-2">Is there any age limit for enrollment?</h3>
              <p className="text-gray-600 text-sm">
                Anyone eligible for SSB can enroll. We cater to candidates of all age groups within SSB eligibility.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">What is your success rate?</h3>
              <p className="text-gray-600 text-sm mb-4">
                We maintain an 85% success rate with over 500 successful candidates trained so far.
              </p>
              
              <h3 className="font-semibold text-gray-900 mb-2">Do you offer refunds?</h3>
              <p className="text-gray-600 text-sm mb-4">
                We have a transparent refund policy. Contact us for specific terms and conditions.
              </p>
              
              <h3 className="font-semibold text-gray-900 mb-2">Can I switch batches after enrollment?</h3>
              <p className="text-gray-600 text-sm">
                Yes, batch switching is possible subject to availability and advance notice.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;