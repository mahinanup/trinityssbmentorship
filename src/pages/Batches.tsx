import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Clock, Users, ArrowRight, Filter } from 'lucide-react';

const Batches = () => {
  const [selectedMonth, setSelectedMonth] = useState('All');
  const [selectedMentor, setSelectedMentor] = useState('All');

  const batches = [
    {
      id: 6,
      title: 'Batch 6 - Full SSB Prep',
      startDate: 'July 10, 2025',
      endDate: 'July 23, 2025',
      duration: '12 Days',
      timing: 'Flexible',
      mentors: ['Col Murali', 'Col Anup', 'Col Ramakrishnan'],
      seats: 10,
      enrolled: 2,
      price: '₹8,000',
      month: 'July',
      status: 'Open',
    },
    {
      id: 5,
      title: 'Batch 5 - Full SSB Prep',
      startDate: 'June 10, 2025',
      endDate: 'June 23, 2025',
      duration: '12 Days',
      timing: 'Flexible',
      mentors: ['Col Murali', 'Col Anup', 'Col Ramakrishnan'],
      seats: 10,
      enrolled: 10,
      price: '₹8,000',
      month: 'June',
      status: 'Completed',
    },
    {
      id: 4,
      title: 'Batch 4 - Full SSB Prep',
      startDate: 'May 10, 2025',
      endDate: 'May 23, 2025',
      duration: '12 Days',
      timing: 'Flexible',
      mentors: ['Col Murali', 'Col Anup', 'Col Ramakrishnan'],
      seats: 10,
      enrolled: 10,
      price: '₹8,000',
      month: 'May',
      status: 'Completed',
    },
    {
      id: 3,
      title: 'Batch 3 - Full SSB Prep',
      startDate: 'April 25, 2025',
      endDate: 'May 8, 2025',
      duration: '12 Days',
      timing: 'Flexible',
      mentors: ['Col Anup', 'Col Murali', 'Col Ramakrishnan'],
      seats: 10,
      enrolled: 10,
      price: '8,000',
      month: 'April',
      status: 'Completed',
    },
    {
      id: 2,
      title: 'Batch 2 - Full SSB Prep',
      startDate: 'April 10, 2025',
      endDate: 'April 23, 2025',
      duration: '12 Days',
      timing: 'Flexible',
      mentors: ['Col Anup', 'Col Murali', 'Col Ramakrishnan'],
      seats: 10,
      enrolled: 10,
      price: '₹8,000',
      month: 'April',
      status: 'Completed',
    },
    {
      id: 1,
      title: 'Batch 1 - Full SSB Prep',
      startDate: 'March 10, 2025',
      endDate: 'March 23, 2025',
      duration: '12 Days',
      timing: 'Flexible',
      mentors: ['Col Anup', 'Col Murali', 'Col Ramakrishnan'],
      seats: 10,
      enrolled: 10,
      price: '₹8,000',
      month: 'March',
      status: 'Completed',
    },
  ];

  const months = ['All', 'January', 'Febuary','March', 'April', 'May', 'June','July','August', 'September', 'October', 'November', 'December'];
  const mentors = ['All', 'Col Murali', 'Col Ramakrishnan', 'Col Anup'];

  const filteredBatches = batches.filter(batch => {
    const monthMatch = selectedMonth === 'All' || batch.month === selectedMonth;
    const mentorMatch = selectedMentor === 'All' || batch.mentors.includes(selectedMentor);
    return monthMatch && mentorMatch;
  });

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Upcoming Batches</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Choose from our carefully structured batches designed to meet different preparation needs
          </p>
        </div>

        {/* Filters */}
        <div className="bg-white p-6 rounded-lg shadow-md mb-8">
          <div className="flex items-center space-x-4 mb-4">
            <Filter className="h-5 w-5 text-gray-600" />
            <span className="font-semibold text-gray-900">Filter Batches</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">By Month</label>
              <select
                value={selectedMonth}
                onChange={(e) => setSelectedMonth(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              >
                {months.map(month => (
                  <option key={month} value={month}>{month}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">By Mentor</label>
              <select
                value={selectedMentor}
                onChange={(e) => setSelectedMentor(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              >
                {mentors.map(mentor => (
                  <option key={mentor} value={mentor}>{mentor}</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Batches Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredBatches.map((batch) => (
            <div
              key={batch.id}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              {/* Status Badge */}
              <div className="p-4 bg-gradient-to-r from-green-600 to-blue-700">
                <div className="flex justify-between items-center">
                  <span className="text-white font-semibold">{batch.title}</span>
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      batch.status === 'Open'
                        ? 'bg-green-100 text-green-800'
                        : 'bg-red-100 text-red-800'
                    }`}
                  >
                    {batch.status}
                  </span>
                </div>
              </div>

              <div className="p-6">
                {/* Date and Duration */}
                <div className="flex items-center space-x-2 mb-3">
                  <Calendar className="h-4 w-4 text-gray-500" />
                  <span className="text-sm text-gray-600">
                        {batch.month} {new Date(batch.startDate).getFullYear()}
                  </span>
                </div>

                <div className="flex items-center space-x-2 mb-3">
                  <Clock className="h-4 w-4 text-gray-500" />
                  <span className="text-sm text-gray-600">{batch.timing}</span>
                </div>

                {/* Enrollment Info */}
                <div className="flex items-center space-x-2 mb-4">
                  <Users className="h-4 w-4 text-gray-500" />
                  <span className="text-sm text-gray-600">
                    {batch.enrolled}/{batch.seats} enrolled
                  </span>
                </div>

                {/* Progress Bar */}
                <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
                  <div
                    className="bg-gradient-to-r from-green-500 to-blue-600 h-2 rounded-full"
                    style={{ width: `${(batch.enrolled / batch.seats) * 100}%` }}
                  ></div>
                </div>

                {/* Mentors */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-900 mb-2">Mentors</h4>
                  <div className="flex flex-wrap gap-2">
                    {batch.mentors.map((mentor, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-md"
                      >
                        {mentor}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Price and CTA */}
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-green-600">{batch.price}</span>
                  <Link
                    to={`/enroll?batch=${batch.id}`}
                    className={`px-4 py-2 rounded-lg font-semibold flex items-center space-x-2 transition-all duration-200 ${
                      batch.status === 'Open'
                        ? 'bg-gradient-to-r from-orange-500 to-red-600 text-white hover:from-orange-600 hover:to-red-700 transform hover:scale-105'
                        : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                    }`}
                    onClick={(e) => batch.status === 'Full' && e.preventDefault()}
                  >
                    <span>{batch.status === 'Open' ? 'Enroll' : 'Full'}</span>
                    {batch.status === 'Open' && <ArrowRight className="h-4 w-4" />}
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* No Results */}
        {filteredBatches.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-400 mb-4">
              <Users className="h-16 w-16 mx-auto" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No batches found</h3>
            <p className="text-gray-600 mb-4">
              Try adjusting your filters to see more batches
            </p>
            <button
              onClick={() => {
                setSelectedMonth('All');
                setSelectedMentor('All');
              }}
              className="text-green-600 hover:text-green-700 font-semibold"
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* Contact Section */}
        <div className="mt-16 bg-gradient-to-r from-green-900 via-blue-900 to-green-800 text-white p-8 rounded-xl text-center">
          <h3 className="text-2xl font-bold mb-4">Need Help Choosing a Batch?</h3>
          <p className="mb-6">
            Our counselors are here to help you select the right program based on your preparation level
          </p>
          <Link
            to="/contact"
            className="bg-white text-green-800 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-200 inline-flex items-center space-x-2"
          >
            <span>Contact Us</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Batches;