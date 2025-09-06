import React from 'react'

function Skill() {
  return (
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Skills</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Here are the technologies and tools I work with to bring ideas to life.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {/* Languages */}
          <div className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </div>
              Languages
            </h3>
            <div className="flex flex-wrap gap-3">
              <span className="px-4 py-2 bg-white rounded-lg text-gray-700 font-medium shadow-sm border border-gray-200 flex items-center gap-2">
                {/* <span className="text-orange-500">&lt;/&gt;</span> */}
                JavaScript
              </span>
              <span className="px-4 py-2 bg-white rounded-lg text-gray-700 font-medium shadow-sm border border-gray-200 flex items-center gap-2">
                {/* <span className="text-blue-500">&lt;/&gt;</span> */}
                TypeScript
              </span>
              <span className="px-4 py-2 bg-white rounded-lg text-gray-700 font-medium shadow-sm border border-gray-200 flex items-center gap-2">
                <span className="text-yellow-500"></span>
                Python
              </span>
              <span className="px-4 py-2 bg-white rounded-lg text-gray-700 font-medium shadow-sm border border-gray-200 flex items-center gap-2">
                <span className="text-orange-500"></span>
                Java
              </span>
              <span className="px-4 py-2 bg-white rounded-lg text-gray-700 font-medium shadow-sm border border-gray-200 flex items-center gap-2">
                {/* <span className="text-blue-500">&lt;/&gt;</span> */}
                C
              </span>
              <span className="px-4 py-2 bg-white rounded-lg text-gray-700 font-medium shadow-sm border border-gray-200 flex items-center gap-2">
                {/* <span className="text-blue-500">&lt;/&gt;</span> */}
                C++
              </span>
              <span className="px-4 py-2 bg-white rounded-lg text-gray-700 font-medium shadow-sm border border-gray-200 flex items-center gap-2">
                {/* <span className="text-gray-500">&gt;_</span> */}
                Bash
              </span>
            </div>
          </div>

          {/* Frontend */}
          <div className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" clipRule="evenodd" />
                </svg>
              </div>
              Frontend
            </h3>
            <div className="flex flex-wrap gap-3">
              <span className="px-4 py-2 bg-white rounded-lg text-gray-700 font-medium shadow-sm border border-gray-200 flex items-center gap-2">
                {/* <span className="text-blue-500">&lt;/&gt;</span> */}
                React
              </span>
              <span className="px-4 py-2 bg-white rounded-lg text-gray-700 font-medium shadow-sm border border-gray-200 flex items-center gap-2">
                {/* <span className="text-gray-800">&lt;/&gt;</span> */}
                Next.js
              </span>
              <span className="px-4 py-2 bg-white rounded-lg text-gray-700 font-medium shadow-sm border border-gray-200 flex items-center gap-2">
                <span className="text-cyan-500"></span>
                Tailwind CSS
              </span>
              <span className="px-4 py-2 bg-white rounded-lg text-gray-700 font-medium shadow-sm border border-gray-200 flex items-center gap-2">
                <span className="text-cyan-500"></span>
                Chakra UI
              </span>
              <span className="px-4 py-2 bg-white rounded-lg text-gray-700 font-medium shadow-sm border border-gray-200 flex items-center gap-2">
                <span className="text-blue-500"></span>
                Material UI
              </span>
            </div>
          </div>

          {/* Backend & Frameworks */}
          <div className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              Backend & Frameworks
            </h3>
            <div className="flex flex-wrap gap-3">
              <span className="px-4 py-2 bg-white rounded-lg text-gray-700 font-medium shadow-sm border border-gray-200 flex items-center gap-2">
                {/* <span className="text-green-500">&lt;/&gt;</span> */}
                Node.js
              </span>
              <span className="px-4 py-2 bg-white rounded-lg text-gray-700 font-medium shadow-sm border border-gray-200 flex items-center gap-2">
                <span className="text-gray-500"></span>
                Express
              </span>
              {/* <span className="px-4 py-2 bg-white rounded-lg text-gray-700 font-medium shadow-sm border border-gray-200 flex items-center gap-2">
                <span className="text-green-500"></span>
                Spring Boot
              </span> */}
              {/* <span className="px-4 py-2 bg-white rounded-lg text-gray-700 font-medium shadow-sm border border-gray-200 flex items-center gap-2">
                <span className="text-gray-500"></span>
                BullMQ
              </span> */}
              <span className="px-4 py-2 bg-white rounded-lg text-gray-700 font-medium shadow-sm border border-gray-200 flex items-center gap-2">
                <span className="text-blue-500"></span>
                WebSocket
              </span>
              {/* <span className="px-4 py-2 bg-white rounded-lg text-gray-700 font-medium shadow-sm border border-gray-200 flex items-center gap-2">
                <span className="text-purple-500"></span>
                Godot
              </span> */}
            </div>
          </div>

          {/* Databases & ORMs */}
          <div className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <div className="w-10 h-10 bg-yellow-100 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-yellow-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
                </svg>
              </div>
              Databases & ORMs
            </h3>
            <div className="flex flex-wrap gap-3">
              <span className="px-4 py-2 bg-white rounded-lg text-gray-700 font-medium shadow-sm border border-gray-200 flex items-center gap-2">
                <span className="text-blue-500"></span>
                PostgreSQL
              </span>
              <span className="px-4 py-2 bg-white rounded-lg text-gray-700 font-medium shadow-sm border border-gray-200 flex items-center gap-2">
                <span className="text-orange-500"></span>
                MySQL
              </span>
              <span className="px-4 py-2 bg-white rounded-lg text-gray-700 font-medium shadow-sm border border-gray-200 flex items-center gap-2">
                <span className="text-red-500"></span>
                Redis
              </span>
              <span className="px-4 py-2 bg-white rounded-lg text-gray-700 font-medium shadow-sm border border-gray-200 flex items-center gap-2">
                <span className="text-green-500"></span>
                MongoDB
              </span>
              {/* <span className="px-4 py-2 bg-white rounded-lg text-gray-700 font-medium shadow-sm border border-gray-200 flex items-center gap-2">
                {/* <span className="text-orange-500"></span>
                Firebase
              </span> */} 
              <span className="px-4 py-2 bg-white rounded-lg text-gray-700 font-medium shadow-sm border border-gray-200 flex items-center gap-2">
                {/* <span className="text-gray-500">&lt;/&gt;</span> */}
                Prisma
              </span>
            </div>
          </div>

          {/* DevOps & Tools */}
          <div className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                </svg>
              </div>
              DevOps & Tools
            </h3>
            <div className="flex flex-wrap gap-3">
              <span className="px-4 py-2 bg-white rounded-lg text-gray-700 font-medium shadow-sm border border-gray-200 flex items-center gap-2">
                <span className="text-orange-500">git</span>
                Git
              </span>
              <span className="px-4 py-2 bg-white rounded-lg text-gray-700 font-medium shadow-sm border border-gray-200 flex items-center gap-2">
                <span className="text-gray-800"></span>
                GitHub Actions
              </span>
              <span className="px-4 py-2 bg-white rounded-lg text-gray-700 font-medium shadow-sm border border-gray-200 flex items-center gap-2">
                <span className="text-blue-500"></span>
                Docker
              </span>
              <span className="px-4 py-2 bg-white rounded-lg text-gray-700 font-medium shadow-sm border border-gray-200 flex items-center gap-2">
                <span className="text-yellow-500"></span>
                PM2
              </span>
              <span className="px-4 py-2 bg-white rounded-lg text-gray-700 font-medium shadow-sm border border-gray-200 flex items-center gap-2">
                <span className="text-blue-500"></span>
                Caddy
              </span>
              <span className="px-4 py-2 bg-white rounded-lg text-gray-700 font-medium shadow-sm border border-gray-200 flex items-center gap-2">
                <span className="text-orange-500"></span>
                Postman
              </span>
            </div>
          </div>

          {/* Cloud Platforms */}
          <div className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <div className="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-indigo-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M5.5 16a3.5 3.5 0 01-.369-6.98 4 4 0 117.753-1.977A4.5 4.5 0 1113.5 16h-8z" />
                </svg>
              </div>
              Cloud Platforms
            </h3>
            <div className="flex flex-wrap gap-3">
              {/* <span className="px-4 py-2 bg-white rounded-lg text-gray-700 font-medium shadow-sm border border-gray-200 flex items-center gap-2">
                <span className="text-orange-500"></span>
                AWS
              </span> */}
              {/* <span className="px-4 py-2 bg-white rounded-lg text-gray-700 font-medium shadow-sm border border-gray-200 flex items-center gap-2">
                <span className="text-orange-500"></span>
                Firebase
              </span> */}
              <span className="px-4 py-2 bg-white rounded-lg text-gray-700 font-medium shadow-sm border border-gray-200 flex items-center gap-2">
                <span className="text-blue-500"></span>
                Render
              </span>
              <span className="px-4 py-2 bg-white rounded-lg text-gray-700 font-medium shadow-sm border border-gray-200 flex items-center gap-2">
                <span className="text-orange-500"></span>
                Cloudflare
              </span>
            </div>
          </div>
        </div>

        {/* Architecture & Practices */}
        <div className="mt-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Architecture & Practices</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {/* <span className="px-6 py-3 bg-gradient-to-r from-blue-50 to-blue-100 text-blue-800 rounded-xl font-semibold border border-blue-200 flex items-center gap-2">
              <span className="text-blue-600"></span>
              Microservices
            </span> */}
            <span className="px-6 py-3 bg-gradient-to-r from-green-50 to-green-100 text-green-800 rounded-xl font-semibold border border-green-200 flex items-center gap-2">
              <span className="text-green-600"></span>
              REST API
            </span>
            {/* <span className="px-6 py-3 bg-gradient-to-r from-purple-50 to-purple-100 text-purple-800 rounded-xl font-semibold border border-purple-200 flex items-center gap-2">
              <span className="text-purple-600"></span>
              MVC+S
            </span> */}
            <span className="px-6 py-3 bg-gradient-to-r from-red-50 to-red-100 text-red-800 rounded-xl font-semibold border border-red-200 flex items-center gap-2">
              <span className="text-red-600"></span>
              JWT Auth
            </span>
            <span className="px-6 py-3 bg-gradient-to-r from-yellow-50 to-yellow-100 text-yellow-800 rounded-xl font-semibold border border-yellow-200 flex items-center gap-2">
              <span className="text-yellow-600"></span>
              CI/CD
            </span>
            <span className="px-6 py-3 bg-gradient-to-r from-indigo-50 to-indigo-100 text-indigo-800 rounded-xl font-semibold border border-indigo-200 flex items-center gap-2">
              <span className="text-indigo-600"></span>
              Rate Limiting
            </span>
            <span className="px-6 py-3 bg-gradient-to-r from-pink-50 to-pink-100 text-pink-800 rounded-xl font-semibold border border-pink-200 flex items-center gap-2">
              <span className="text-pink-600"></span>
              API Monitoring
            </span>
            <span className="px-6 py-3 bg-gradient-to-r from-teal-50 to-teal-100 text-teal-800 rounded-xl font-semibold border border-teal-200 flex items-center gap-2">
              <span className="text-teal-600"></span>
              Background Tasks
            </span>
            <span className="px-6 py-3 bg-gradient-to-r from-orange-50 to-orange-100 text-orange-800 rounded-xl font-semibold border border-orange-200 flex items-center gap-2">
              <span className="text-orange-600"></span>
              WebSocket
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skill