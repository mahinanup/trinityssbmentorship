import { Phone, Mail, MapPin, Instagram } from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone Numbers',
      details: ['+91 9952577722', '+91 6380041087', '+91 9910422331'],
    },
    {
      icon: Mail,
      title: 'Email',
      details: ['trinityssbmentor@gmail.com'],
    },
    {
      icon: MapPin,
      title: 'Office Hours',
      details: ['Mon - Sat: 9:00 AM - 7:00 PM', 'Sun: 10:00 AM - 5:00 PM'],
    },
    {
        icon: Instagram,
        title: 'Instagram',
        details: ['trinityssbmentorship'],
        href: 'https://www.instagram.com/trinityssbmentorship?igsh=MTlocTA5am50am5uaA==',
      }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12 flex items-center justify-center">
      <div className="max-w-lg mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Contact Us</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Get in touch with our team for any questions about our SSB preparation programs
          </p>
        </div>

        {/* Contact Information */}
        <div className="bg-gradient-to-br from-green-900 via-blue-900 to-green-800 text-white p-8 rounded-2xl shadow-2xl">
          <h2 className="text-3xl font-bold mb-8 text-center">Get in Touch</h2>
          <div className="space-y-8">
            {contactInfo.map((info, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="bg-white bg-opacity-20 p-3 rounded-lg flex-shrink-0">
                  <info.icon className="h-6 w-6" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-lg mb-2">{info.title}</h3>
                  {info.href ? (
                    <a href={info.href} target="_blank" rel="noopener noreferrer" className="text-green-100 hover:text-white transition-colors duration-200">
                      {info.details[0]}
                    </a>
                  ) : (
                    info.details.map((detail, idx) => (
                      <p key={idx} className="text-green-100 text-sm mb-1">{detail}</p>
                    ))
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* WhatsApp Buttons */}
          <div className="mt-10">
            <h3 className="font-semibold text-lg mb-4 text-center">Quick Contact via WhatsApp</h3>
            <a
              href="https://wa.me/919952577722"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full bg-green-500 hover:bg-green-600 text-white py-4 px-4 rounded-lg font-bold text-center transition-all duration-300 transform hover:scale-105"
            >
              Message Us on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
