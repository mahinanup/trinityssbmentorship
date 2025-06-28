import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { User, Mail, Phone, GraduationCap, CreditCard, CheckCircle } from 'lucide-react';

const Enroll = () => {
  const [searchParams] = useSearchParams();
  const [selectedBatch, setSelectedBatch] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    education: '',
    batch: '',
    experience: '',
    motivation: '',
  });

  const batches = [
 { id: '6', title: 'Batch 6 - Full SSB Prep', price: '₹8,000', dates: 'July 2025' },
  ];

  useEffect(() => {
    const batchId = searchParams.get('batch');
    if (batchId) {
      setSelectedBatch(batchId);
      setFormData(prev => ({ ...prev, batch: batchId }));
    }
  }, [searchParams]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
  };

  const selectedBatchInfo = batches.find(batch => batch.id === formData.batch);

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gray-50 py-12 flex items-center justify-center">
        <div className="max-w-md mx-auto bg-white rounded-xl shadow-lg p-8 text-center">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <CheckCircle className="h-8 w-8 text-green-600" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Enrollment Successful!</h2>
          <p className="text-gray-600 mb-6">
            Thank you for enrolling. We'll contact you within 24 hours with payment instructions and program details.
          </p>
          <div className="bg-gray-50 rounded-lg p-4 mb-6">
            <h3 className="font-semibold text-gray-900 mb-2">Selected Batch:</h3>
            <p className="text-gray-700">{selectedBatchInfo?.title}</p>
            <p className="text-sm text-gray-600">{selectedBatchInfo?.dates}</p>
          </div>
          <button
            onClick={() => setIsSubmitted(false)}
            className="w-full bg-gradient-to-r from-green-600 to-blue-700 text-white py-3 rounded-lg font-semibold hover:from-green-700 hover:to-blue-800 transition-all duration-200"
          >
            Enroll Another Student
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Enroll Now</h1>
          <p className="text-xl text-gray-600">
            Take the first step towards your defence career
          </p>
        </div>

        <div className="max-w-xl mx-auto">
 <div className="bg-white rounded-xl shadow-lg p-8">
 <h2 className="text-2xl font-bold text-gray-900 mb-6">Student Information</h2>

 <form onSubmit={handleSubmit} className="space-y-6">
 {/* Personal Information */}
 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
 <div>
 <label className="block text-sm font-medium text-gray-700 mb-2">
 <User className="h-4 w-4 inline mr-2" />
 Full Name *
 </label>
 <input
 type="text"
 name="fullName"
 value={formData.fullName}
 onChange={handleInputChange}
 required
 className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
 placeholder="Enter your full name"
 />
 </div>

 <div>
 <label className="block text-sm font-medium text-gray-700 mb-2">
 <Mail className="h-4 w-4 inline mr-2" />
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
 <Phone className="h-4 w-4 inline mr-2" />
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
 <GraduationCap className="h-4 w-4 inline mr-2" />
                      Educational Background *
 </label>
 <select
 name="education"
 value={formData.education}
 onChange={handleInputChange}
 required
 className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
 >
 <option value="">Select your education</option>
 <option value="12th">12th Pass</option>
 <option value="graduation">Graduation</option>
 <option value="post-graduation">Post Graduation</option>
 <option value="other">Other</option>
 </select>
 </div>
 </div>

                {/* Batch Selection */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Select Batch *
                  </label>
                  <select
                    name="batch"
                    value={formData.batch}
                    onChange={handleInputChange}
                    required
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  >
                    <option value="">Choose a batch</option>
                    {batches.map(batch => (
 <option key={batch.id} value={batch.id}>
                        {batch.title} - {batch.dates} ({batch.price})
                      </option>
                    ))}
                  </select>
                </div>

                {/* Previous Experience */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Previous SSB Experience
                  </label>
                  <select
                    name="experience"
                    value={formData.experience}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  >
                    <option value="">Select your experience</option>
                    <option value="none">No Previous Experience</option>
                    <option value="screened-out">Screened Out</option>
                    <option value="conference-out">Conference Out</option>
                    <option value="recommended">Previously Recommended</option>
                  </select>
                </div>

                {/* Motivation */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Why do you want to join the Defence Forces?
                  </label>
                  <textarea
                    name="motivation"
                    value={formData.motivation}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent resize-none"
                    placeholder="Share your motivation and goals..."
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-orange-500 to-red-600 text-white py-4 rounded-lg font-semibold hover:from-orange-600 hover:to-red-700 transform hover:scale-105 transition-all duration-200 shadow-lg"
                >
                  Submit Enrollment
                </button>
              </form>
            </div>
 </div>
      </div>
    </div>
  );
};

export default Enroll;