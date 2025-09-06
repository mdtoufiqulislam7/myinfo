import React from 'react'

function About() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-8">
      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        {/* Left Column - Heading */}
        <div className="text-center lg:text-left">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
            About Me
          </h1>
          <div className="w-24 h-1 bg-blue-400 mx-auto lg:mx-0"></div>
        </div>
        
        {/* Right Column - Content */}
        <div className="space-y-6 text-gray-800">
          <p className="text-lg leading-relaxed">
            Hi, I'm Toufiq — a Software Engineer passionate about building scalable systems and impactful digital experiences.
          </p>
          
          <p className="text-lg leading-relaxed">
            I specialize in backend development and system design, with a strong focus on creating high-performance solutions for edtech platforms.
          </p>
          
          <p className="text-lg leading-relaxed">
            While backend is my forte, I also enjoy crafting intuitive and responsive frontends that deliver a seamless user experience.
          </p>
          
          <p className="text-lg leading-relaxed">
            Known among peers as "The AI," I'm constantly exploring new technologies and pushing boundaries through hands-on learning and teaching.
          </p>
        </div>
      </div>
    </div>
  )
}

export default About