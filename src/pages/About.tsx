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
      name: 'Col G Murali',
      role: 'Interview Officer (IO)',
      experience: '29+ Years',
      background: 'Col G Murali (Retd) is a decorated retired Army officer from the Regiment of Artillery and an alumnus of the National Defence Academy and Indian Military Academy. Over his 29-year career, he commanded Artillery Regiments in J&K and Rajasthan and participated in key operations including Op Meghdoot (Siachen) and Op Vijay (Kargil), earning the Chief of Army Staff Commendation for distinguished service. A trained Interviewing Officer from DIPR, he served as Deputy President of 18 SSB, Allahabad, conducting over 2,000 interviews and selecting more than 320 potential officers. Since taking voluntary retirement in 2013, he has actively mentored and trained defence aspirants. He holds postgraduate degrees in Weapon Systems, Social Work, and an MBA in HR.',
      specialization: 'Personal Interview, Current Affairs, Technical Subjects',
      achievements: 'Trained 200+ successful candidates',
 image: '/images/murali.png',
      description: 'Col Murali brings two decades of experience as an Interview Officer. His deep understanding of the interview process and ability to build candidate confidence has made him one of the most sought-after mentors.',
    },
    {
      name: 'Col Ramakrishnan UK',
      role: 'Psychologist (PSYCH)',
      experience: '30+ Years',
      background: "Col Ramakrishnan is a retired Army officer from the Army Educational Corps and an alumnus of the Indian Military Academy, Dehradun. He served in various field formations and held key instructional roles at IMA Dehradun, INI Pune, AEC Training College & Centre Pachmarhi, and ASC Centre & College, Bengaluru. A trained psychologist from the Defence Institute of Psychological Research, he served as Technical Officer and Psychologist at 18 SSB Prayagraj, where he assessed over 1,500 candidates and contributed to the selection of 300+ future officers. Since retiring in 2019 after 30+ years of service, he has actively mentored and trained numerous defence aspirants. He holds a postgraduate degree in Applied Psychology and a bachelor's in Educational Technology.",
      specialization: 'TAT, WAT, SRT, Psychological Assessment',
      achievements: 'Expert in personality development',
 image: '/images/rama.png',
      description: 'Col Ramakrishnan specializes in psychological assessment and personality development. His structured approach to psychology tests has helped countless candidates understand and present their true potential.',
    },
    {
      name: 'Col Anup Alagarajan',
      role: 'Group Testing Officer (GTO)',
      experience: '34+ Years',
      background: 'A native of Palakkad, Kerala he is an alumnus of Sainik School Kazhakootam (1988) and the National Defence Academy (78 Hunter, joined 1987). Commissioned into the Corps of EME on 8 June 1991, he holds an M.Tech in Mechanical Engineering, an MBA in HRM, PGDM in Finance, and certifications in Strategic Management and Project Management from IISc Bangalore. A specialist in Armoured and Off-Highway Vehicles, he served extensively in EME units across diverse terrains, focusing on equipment sustenance and maintainability. He is also a qualified personality assessment expert from DIPR and served as a GTO at SSB, assessing over 4,000 candidates. Awarded the COAS Commendation in 2015 for excellence as Director EME Training. He superannuated on 31 July 2024 as Chief Maintainability Engineer, Maintainability Advisory Group No. 6, Avadi.',
      specialization: 'Group Testing Officer, Design & Development of Group Planning Exercise, Progressive Group Task, and Command Task',
      achievements: 'Highest success rate in coaching candidates for SSB preparation',
 image: '/images/anup.png',
      description: 'Col Anup Alagarajan is renowned for his expertise in group testing & personality development. His innovative training methods and practical approach to GTO tasks have resulted in exceptional success rates among his students.',
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
      description: 'Structured approach to personality development',
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
    'Introduction to SSB & Personality Assessment',
    'Familiarization of schedule at SSB',
    'Stage 1 (OIR & PP&DT) training and mock tests',
    'Psychological Test Preparation & Mock Tests',
    'Group Testing Preparation & Mock Tests',
    'Interview Technique & Mock Interviews',
    'Personality Development & Confidence Building Exercises',
    'Personalised Feedback',
    'Interaction with assessors 24x7 on one-on-one basis',
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">About Trinity SSB Mentorship</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Empowering defence aspirants with expert guidance from veteran assessors who have served 
            in the Services Selection Boards
          </p>
        </div>

        {/* Mission Statement */}
        <div className="bg-gradient-to-r from-green-900 via-blue-900 to-green-800 text-white rounded-2xl p-12 mb-16">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
            <p className="text-xl leading-relaxed max-w-4xl mx-auto">
              To provide comprehensive, professional and personalized SSB preparation that transforms 
              aspirants into confident candidates ready to clear the SSB and serve the nation. We bridge the gap between 
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
                  <div className="text-3xl font-bold text-green-600 mb-2">50+</div>
                  <div className="text-gray-600">Students Trained</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">20%</div>
                  <div className="text-gray-600">Success Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-600 mb-2">12</div>
                  <div className="text-gray-600">Day Program</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-red-600 mb-2">30+</div>
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