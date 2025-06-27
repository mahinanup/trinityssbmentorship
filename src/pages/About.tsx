import React from 'react';
import { Shield, Target, Users, Award, CheckCircle, Star, Medal, Clock } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: Users,
      title: 'Personal Mentoring',
      description: 'One-on-one sessions with experienced veteran assessors for personalized guidance and feedback.',
    },
    {
      icon: Target,
      title: 'Group Testing Excellence',
      description: 'Comprehensive GTO practice with real-time assessment and improvement strategies.',
    },
    {
      icon: Medal,
      title: 'Interview Mastery',
      description: 'Structured interview preparation covering personal, technical, and current affairs topics.',
    },
    {
      icon: Clock,
      title: 'Stage 1 & 2 Focus',
      description: 'Complete coverage of both screening and main interview stages of SSB selection.',
    },
  ];

  const mentors = [
    {
      name: 'Colonel Murali',
      role: 'Interview Officer (IO)',
      experience: '20+ Years',
      background: 'Former Interview Officer at Selection Centers',
      specialization: 'Personal Interview, Current Affairs, Technical Subjects',
      achievements: 'Trained 200+ successful candidates',
 image: '/images/murali.png',
      description: 'Colonel Murali brings two decades of experience as an Interview Officer. His deep understanding of the interview process and ability to build candidate confidence has made him one of the most sought-after mentors.',
    },
    {
      name: 'Colonel Ramakrishnan',
      role: 'Psychologist (PSYCH)',
      experience: '18+ Years',
      background: 'Former Psychologist at SSB Centers',
      specialization: 'TAT, WAT, SRT, Psychological Assessment',
      achievements: 'Expert in personality development',
 image: '/images/rama.png',
      description: 'Colonel Ramakrishnan specializes in psychological assessment and personality development. His structured approach to psychology tests has helped countless candidates understand and present their true potential.',
    },
    {
      name: 'Colonel Anup',
      role: 'Group Testing Officer (GTO)',
      experience: '22+ Years',
      background: 'Former GTO at Multiple Selection Centers',
      specialization: 'Group Planning, Progressive Group Task, Command Task',
      achievements: 'Highest success rate in GTO preparation',
 image: '/images/anup.png',
      description: 'Colonel Anup is renowned for his expertise in group testing. His innovative training methods and practical approach to GTO tasks have resulted in exceptional success rates among his students.',
    },
  ];

  const values = [
    {
      icon: Shield,
      title: 'Integrity',
      description: 'Honest feedback and transparent training methods',
    },
    {
      icon: Target,
      title: 'Discipline',
      description: 'Structured approach to skill development',
    },
    {
      icon: Star,
      title: 'Confidence',
      description: 'Building self-assurance for success',
    },
    {
      icon: Award,
      title: 'Patriotism',
      description: 'Fostering love for nation and service',
    },
  ];

  const program = [
    'Comprehensive personality assessment and development',
    'Stage 1 preparation: Officer Intelligence Rating Tests',
    'Stage 2 preparation: Psychology, GTO, and Interview',
    'Mock SSB sessions with real-time feedback',
    'Personal grooming and communication skills',
    'Current affairs and general knowledge enhancement',
    'Stress management and confidence building',
    'Post-SSB career guidance and support',
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">About Trinity SSB Mentorship</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Empowering defence aspirants with expert guidance from veteran assessors who have served 
            in the Services Selection Board process
          </p>
        </div>

        {/* Mission Statement */}
        <div className="bg-gradient-to-r from-green-900 via-blue-900 to-green-800 text-white rounded-2xl p-12 mb-16">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
            <p className="text-xl leading-relaxed max-w-4xl mx-auto">
              To provide comprehensive, professional, and personalized SSB preparation that transforms 
              aspirants into confident candidates ready to serve the nation. We bridge the gap between 
              aspiration and achievement through expert mentorship and proven training methodologies.
            </p>
          </div>
        </div>

        {/* Key Features */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Key Features</h2>
            <p className="text-lg text-gray-600">
              Comprehensive training modules designed for complete SSB preparation
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="bg-gradient-to-r from-green-600 to-blue-700 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Mentor Profiles */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Meet Your Mentors</h2>
            <p className="text-lg text-gray-600">
              Learn from experienced veterans who have served as assessors in the SSB process
            </p>
          </div>
          <div className="space-y-8">
            {mentors.map((mentor, index) => (
              <div
                key={index}
                className={`bg-white rounded-2xl shadow-lg overflow-hidden ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                } flex flex-col lg:flex`}
              >
                <div className="lg:w-1/3 bg-gradient-to-br from-green-600 to-blue-700 p-8 text-white flex flex-col justify-center">
                  <div className="text-center lg:text-left">
 <img src={mentor.image} alt={mentor.name} className="w-24 h-24 rounded-full object-cover mx-auto lg:mx-0 mb-4 border-4 border-white shadow-lg" />
 <h3 className="text-2xl font-bold mb-2">
 {mentor.name}
 </h3>
                    <p className="text-lg font-semibold text-green-100 mb-2">{mentor.role}</p>
                    <p className="text-green-100">{mentor.experience}</p>
                  </div>
                </div>
                <div className="lg:w-2/3 p-8">
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">Background</h4>
                    <p className="text-gray-600">{mentor.background}</p>
                  </div>
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">Specialization</h4>
                    <p className="text-gray-600">{mentor.specialization}</p>
                  </div>
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">Achievements</h4>
                    <p className="text-green-600 font-semibold">{mentor.achievements}</p>
                  </div>
                  <p className="text-gray-700 leading-relaxed">{mentor.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Program Details */}
        <section className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Comprehensive Program</h2>
              <p className="text-lg text-gray-600 mb-8">
                Our 12-day intensive program covers all aspects of SSB preparation with personalized 
                attention and expert guidance at every step.
              </p>
              <div className="space-y-4">
                {program.map((item, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Program Statistics</h3>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600 mb-2">500+</div>
                  <div className="text-gray-600">Students Trained</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">85%</div>
                  <div className="text-gray-600">Success Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-600 mb-2">12</div>
                  <div className="text-gray-600">Day Program</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-red-600 mb-2">60+</div>
                  <div className="text-gray-600">Years Experience</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-lg text-gray-600">
              The principles that guide our training methodology and approach
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="bg-gradient-to-r from-green-600 to-blue-700 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-green-900 via-blue-900 to-green-800 text-white p-12 rounded-2xl text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Start Your Journey Today</h2>
            <p className="text-xl mb-8 text-gray-100">
              Join our proven program and take the first step towards achieving your dream of 
              serving in the Indian Defence Forces
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/batches"
                className="bg-gradient-to-r from-orange-500 to-red-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-orange-600 hover:to-red-700 transform hover:scale-105 transition-all duration-200 shadow-xl"
              >
                View Upcoming Batches
              </a>
              <a
                href="/contact"
                className="bg-white text-green-800 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transform hover:scale-105 transition-all duration-200 shadow-xl"
              >
                Contact Our Team
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;