import React from 'react'

function Exprience() {
  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-6xl mx-auto px-8">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Experience</h2>
          <div className="w-32 h-1 bg-blue-500 mx-auto"></div>
        </div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Vertical Blue Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-blue-500"></div>
          
          {/* Experience Entry */}
          <div className="relative flex items-start mb-12">
            {/* Timeline Icon and Date */}
            <div className="flex flex-col items-center mr-12">
              {/* Location Pin Icon */}
              <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center mb-2 relative z-10">
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
              </div>
              {/* Date */}
              <span className="text-gray-500 text-sm font-medium">July 2025 - Present</span>
            </div>

            {/* Experience Card */}
            <div className="bg-white rounded-lg shadow-lg p-8 flex-1 ml-8">
              {/* Company Name */}
              <h3 className="text-2xl font-bold text-blue-600 mb-2">ACS FUTURE SCHOOL</h3>
              
              {/* Role */}
              <p className="text-lg text-gray-500 mb-4">SOFTWARE ENGINEER II</p>
              
              {/* Summary */}
              <p className="text-gray-700 text-base leading-relaxed mb-6">
                Built and scaled the backend for one of Bangladesh's fastest-growing edtech platforms, serving 75,000+ users and 6,000 concurrent live class participants.
              </p>
              
              {/* Key Achievements */}
              <div className="mb-6">
                <h4 className="text-gray-800 font-semibold mb-3">Key achievements and responsibilities:</h4>
                <ul className="space-y-2">
                  {/* <li className="flex items-start">
                    <span className="text-gray-800 mr-2">•</span>
                    <span className="text-gray-700">Designed and implemented a microservice architecture on AWS (EC2, RDS, API Gateway, CloudFront)</span>
                  </li> */}
                  <li className="flex items-start">
                    <span className="text-gray-800 mr-2">•</span>
                    <span className="text-gray-700">Built robust database systems using PostgreSQL and Redis for session storage</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gray-800 mr-2">•</span>
                    <span className="text-gray-700">Implemented BullMQ for efficient background job processing</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gray-800 mr-2">•</span>
                    <span className="text-gray-700">Developed secure JWT-based authentication system with access/refresh tokens using bcrypt</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gray-800 mr-2">•</span>
                    <span className="text-gray-700">Created real-time features including WebSocket-based live chat and FCM push notifications</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gray-800 mr-2">•</span>
                    <span className="text-gray-700">Set up Cloudflare for API rate limiting and monitoring</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gray-800 mr-2">•</span>
                    <span className="text-gray-700">Managed deployment with PM2 for process management and Caddy for HTTPS/load balancing</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gray-800 mr-2">•</span>
                    <span className="text-gray-700">Launched Curiosity, an AI chatbot for students of class 6-10</span>
                  </li>
                </ul>
              </div>
              
              {/* Tech Stack */}
              <div>
                <h4 className="text-gray-800 font-semibold mb-2">Tech Stack:</h4>
                <p className="text-gray-700">Node.js, PostgreSQL, Redis,  WebSocket,  GitHub Actions </p>
              </div>
            </div> 
          </div>
        </div>
      </div>
    </div>
  )
}

export default Exprience