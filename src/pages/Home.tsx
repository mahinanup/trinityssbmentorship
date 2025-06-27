import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Users, Wallet, Clock, Award, Star, CheckCircle, icons } from 'lucide-react';

const Home = () => {
  const features = [
    {
      icon: Clock,
      title: '12-Day Flexible Session',
      description: 'Comprehensive online and offline (optional) training program with flexible timings as per the convenience of candidates',
    },
    {
      icon: Users,
      title: 'One-on-One Mentoring',
      description: 'Personalised guidance, assessment, debrief, and feedback by GTO, IO, and PSYCH',
    },
    {
      icon: Award,
      title: 'Complete SSB Preparation',
      description: 'Preparation and conduct of mock tests for Stage 1 (OIR & PP&DT), Psychological Tests (4 tests), Interview (One-on-One), and Group Testing (9 tests)',
    },
    
    {
      icon: Wallet,
      title: 'One Time Payment',
      description: 'Can attend multiple batches with payment for one batch',
    },
  ];

  const mentors = [
    { name: 'Col G Murali', role: 'Interview Officer (IO)', image: '/images/murali.png' },
    { name: 'Col Ramakrishnan UK', role: 'Psychologist (PSYCH)',  image: '/images/rama.png' },
    { name: 'Col Anup Alagarajan', role: 'Group Testing Officer (GTO)', image: '/images/anup.png' },
  ];

  const highlights = [
    'Introduction to SSB & Personality Assessment',
    'Familiarization of schedule at SSB',
    'Stage 1 (OIR & PP&DT) training and mock tests',
    'Psychological Test Preparation & Mock Tests',
    'Group Testing Preparation & Mock Tests',
    'Interview Technique & Mock Interviews',
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative text-white bg-cover bg-center" style={{ backgroundImage: 'url(/images/backdrop2.png)' }}>
        <div className="absolute inset-0 bg-black opacity-55"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Your Gateway to <span className="text-orange-400">Defence Forces</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-100 max-w-3xl mx-auto">
              Training for Services Selection Board by Qualified Veteran Assessors
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                to="/batches"
                className="bg-gradient-to-r from-orange-500 to-red-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-orange-600 hover:to-red-700 transform hover:scale-105 transition-all duration-200 shadow-xl flex items-center space-x-2"
              >
                <span>View Batches</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link
                to="/enroll"
                className="bg-white text-green-800 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transform hover:scale-105 transition-all duration-200 shadow-xl"
              >
                Enroll Now
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Trinity SSB Mentorship?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive preparation program for SSB preparation and personality development curated and executed by qualified veteran assessors
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="text-center p-6 rounded-xl bg-gradient-to-br from-gray-50 to-gray-100 hover:from-green-50 hover:to-blue-50 transition-all duration-300 hover:shadow-lg"
              >
                <div className="bg-gradient-to-r from-green-600 to-blue-700 w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Program Highlights */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Comprehensive SSB Training Program
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Our structured approach ensures complete preparation for all stages and all threetypes of assessment (GTO, PSYCH & IO) of the 
                Services Selection Board process, from screening to final conference procedure.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {highlights.map((highlight, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                    <span className="text-gray-700">{highlight}</span>
                  </div>
                ))}
              </div>
              <Link
                to="/about"
                className="inline-flex items-center space-x-2 mt-8 text-green-600 hover:text-green-700 font-semibold"
              >
                <span>Learn More About Our Program</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="bg-gradient-to-br from-green-600 to-blue-700 p-8 rounded-2xl text-white">
              <h3 className="text-2xl font-bold mb-6">Program Statistics</h3>
              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <span>Batches Completed</span>
                  <span className="text-2xl font-bold">5 Batches</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Success Rate</span>
                  <span className="text-2xl font-bold">20%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Veteran Instructors</span>
                  <span className="text-2xl font-bold">3</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Years of Experience</span>
                  <span className="text-2xl font-bold">30+</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mentors Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Meet Your Mentors
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Learn from experienced Veteran Personality Assessors who have served in the Services Selection Boards
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {mentors.map((mentor, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-50 to-gray-100 p-8 rounded-xl text-center hover:shadow-lg transition-all duration-300"
              >
                <img 
                  src={mentor.image} 
                  alt={`Picture of ${mentor.name}`} 
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-bold text-gray-900 mb-2">{mentor.name}</h3>
                <p className="text-green-600 font-semibold mb-2">{mentor.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-900 via-blue-900 to-green-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Begin Your Journey?
          </h2>
          <p className="text-xl mb-8 text-gray-100">
            Join hundreds of successful candidates who have achieved their dream of serving the nation
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/batches"
              className="bg-gradient-to-r from-orange-500 to-red-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-orange-600 hover:to-red-700 transform hover:scale-105 transition-all duration-200 shadow-xl"
            >
              View Upcoming Batches
            </Link>
            <Link
              to="/testimonials"
              className="bg-white text-green-800 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transform hover:scale-105 transition-all duration-200 shadow-xl"
            >
              Read Success Stories
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;