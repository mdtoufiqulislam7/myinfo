import React from 'react'

function Education() {
  return (
    <div className="min-h-screen bg-white py-16">
      <div className="max-w-4xl mx-auto px-8">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-400 mb-4">Education</h2>
          <div className="w-32 h-1 bg-blue-400 mx-auto"></div>
        </div>

        {/* Education Card */}
        <div className="bg-white rounded-lg shadow-lg p-8 border border-gray-100">
          {/* Institution and Dates */}
          <div className="flex justify-between items-start mb-4">
            <h3 className="text-xl font-bold text-gray-800">
              BANGLADESH UNIVERSITY OF BUSINESS AND TECHNOLOGY
            </h3>
            <span className="text-gray-700 font-medium">December 2021 - Present</span>
          </div>
          
          {/* Degree */}
          <p className="text-lg text-gray-700 mb-2">
            B.Sc. in Computer Science and Engineering
          </p>
          
          {/* Current Status and CGPA */}
          <p className="text-gray-700 mb-6">
            Currently in Level 4, Term 1 | CGPA: 3.49
          </p>
          
          {/* Description */}
          <p className="text-gray-700 leading-relaxed mb-8">
            It's where I've grown not just technically, but also through meaningful friendships and collaborative learning. I've had the opportunity to explore core CS subjects in-depth and apply them in real-world projects.
          </p>
          
          {/* Key Courses */}
          <div>
            <h4 className="text-lg font-bold text-gray-800 mb-4">Key Courses Completed:</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              <div className="flex items-start">
                <span className="text-gray-800 mr-2">•</span>
                <span className="text-gray-700">Structured Programming (C)</span>
              </div>
              <div className="flex items-start">
                <span className="text-gray-800 mr-2">•</span>
                <span className="text-gray-700">Data Structures & Algorithms (C++)</span>
              </div>
              <div className="flex items-start">
                <span className="text-gray-800 mr-2">•</span>
                <span className="text-gray-700">Object-Oriented Programming (C++, Java)</span>
              </div>
              <div className="flex items-start">
                <span className="text-gray-800 mr-2">•</span>
                <span className="text-gray-700">Operating Systems</span>
              </div>
              <div className="flex items-start">
                <span className="text-gray-800 mr-2">•</span>
                <span className="text-gray-700">Compilers</span>
              </div>
              <div className="flex items-start">
                <span className="text-gray-800 mr-2">•</span>
                <span className="text-gray-700">Database Management Systems (SQL)</span>
              </div>
              <div className="flex items-start">
                <span className="text-gray-800 mr-2">•</span>
                <span className="text-gray-700">Numerical Methods (Python)</span>
              </div>
              <div className="flex items-start">
                <span className="text-gray-800 mr-2">•</span>
                <span className="text-gray-700">Discrete Mathematics</span>
              </div>
              <div className="flex items-start">
                <span className="text-gray-800 mr-2">•</span>
                <span className="text-gray-700">Concrete Mathematics</span>
              </div>
              <div className="flex items-start">
                <span className="text-gray-800 mr-2">•</span>
                <span className="text-gray-700">Information System Design</span>
              </div>
              <div className="flex items-start">
                <span className="text-gray-800 mr-2">•</span>
                <span className="text-gray-700">Software Engineering</span>
              </div>
              <div className="flex items-start">
                <span className="text-gray-800 mr-2">•</span>
                <span className="text-gray-700">Computer Networks</span>
              </div>
              <div className="flex items-start">
                <span className="text-gray-800 mr-2">•</span>
                <span className="text-gray-700">Artificial Intelligence</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Education