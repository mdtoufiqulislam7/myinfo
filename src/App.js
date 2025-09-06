import React from 'react'
import Navbar from './component/Navbar'
import About from './component/About'
import Exprience from './component/Exprience'
import Education from './component/Education'
import Project from './component/Project'
import Skill from './component/Skill'
import Contact from './component/Contact'
import Footer from './component/Footer'

function App() {
  // Set body background color when component mounts
  React.useEffect(() => {
    document.body.style.backgroundColor = 'rgba(33.1380753138, 125.1882845188, 186.8619246862, 0.8)'
    document.body.style.margin = '0'
    document.body.style.padding = '0'
    
    // Cleanup when component unmounts
    return () => {
      document.body.style.backgroundColor = ''
      document.body.style.margin = ''
      document.body.style.padding = ''
    }
  }, [])

  return (
    <>
      <Navbar />
      <main>
        {/* Hero Section */}
        <section id="hero" className="min-h-screen relative overflow-hidden w-full h-screen" style={{backgroundColor: 'rgba(33.1380753138, 125.1882845188, 186.8619246862, 0.8)'}}>
          {/* Background code pattern */}
          <div className="absolute inset-0 opacity-10">
            {/* Multiple code blocks scattered across the background */}
            <div className="absolute top-20 left-10 text-white font-mono text-xs">
              <div>{'<html>'}</div>
              <div>&nbsp;&nbsp;{'<body>'}</div>
              <div>&nbsp;&nbsp;&nbsp;&nbsp;{'<div class="portfolio">'}</div>
              <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{'<h1>Welcome</h1>'}</div>
              <div>&nbsp;&nbsp;&nbsp;&nbsp;{'</div>'}</div>
              <div>&nbsp;&nbsp;{'</body>'}</div>
              <div>{'</html>'}</div>
            </div>
            
            <div className="absolute top-40 right-20 text-white font-mono text-xs">
              <div>function createPortfolio() {'{'}</div>
              <div>&nbsp;&nbsp;return "Amazing!";</div>
              <div>{'}'}</div>
            </div>
            
            <div className="absolute top-60 left-1/4 text-white font-mono text-xs">
              <div>const portfolio = {'{'}</div>
              <div>&nbsp;&nbsp;name: "Toufiq",</div>
              <div>&nbsp;&nbsp;role: "Developer",</div>
              <div>{'}'}</div>
            </div>
            
            <div className="absolute top-80 right-1/3 text-white font-mono text-xs">
              <div>if (talented) {'{'}</div>
              <div>&nbsp;&nbsp;hire = true;</div>
              <div>{'}'}</div>
            </div>
            
            <div className="absolute bottom-40 left-1/3 text-white font-mono text-xs">
              <div>class Portfolio {'{'}</div>
              <div>&nbsp;&nbsp;constructor() {'{'}</div>
              <div>&nbsp;&nbsp;&nbsp;&nbsp;this.awesome = true;</div>
              <div>&nbsp;&nbsp;{'}'}</div>
              <div>{'}'}</div>
            </div>
            
            <div className="absolute bottom-20 right-1/4 text-white font-mono text-xs">
              <div>npm install success</div>
              <div>✨ All packages installed</div>
            </div>
          </div>
          
          {/* Main content */}
          <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center px-4">
            <h1 className="text-6xl md:text-7xl font-bold text-white mb-4 tracking-wide">
              Md Toufiqul Islam
            </h1>
            <h2 className="text-2xl md:text-3xl text-blue-100 mb-8 font-light">
              Software Engineer
            </h2>
            <button 
              onClick={() => {
                const link = document.createElement('a')
                link.href = 'https://drive.google.com/file/d/1Wq8_FsbILvN8l4GyLdsXIu_aiCC5I-k2/view?usp=sharing'
                link.download = 'ToufiqulIslam_Resume.pdf'
                link.target = '_blank'
                document.body.appendChild(link)
                link.click()
                document.body.removeChild(link)
              }}
              className="bg-white text-blue-900 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition-all duration-300 shadow-lg hover:shadow-xl border-2 border-white hover:border-blue-200"
            >
              Download Resume
            </button>
          </div>
          
          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
            <div className="w-6 h-6 border-2 border-white rounded-full flex items-center justify-center animate-bounce">
              <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 10.293a1 1 0 010 1.414l-6 6a1 1 0 01-1.414 0l-6-6a1 1 0 111.414-1.414L9 14.586V3a1 1 0 012 0v11.586l4.293-4.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about">
          <About />
        </section>

        {/* Experience Section */}
        <section id="experience">
          <Exprience />
        </section>

        {/* Education Section */}
        <section id="education">
          <Education />
        </section>

        {/* Projects Section */}
        <section id="Project" className="min-h-screen bg-gray-50 flex items-center justify-center px-8">
          {/* <div className="max-w-4xl w-full text-center">
            <h2 className="text-4xl font-bold text-gray-800 mb-8">Projects</h2>
            <p className="text-lg text-gray-600">Projects section coming soon...</p>
          </div> */}
          <Project/>
        </section>

        {/* Skills Section */}
        <section id="skill" className="min-h-screen bg-white flex items-center justify-center px-8">
          {/* <div className="max-w-4xl w-full text-center">
            <h2 className="text-4xl font-bold text-gray-800 mb-8">Skills</h2>
            <p className="text-lg text-gray-600">Skills section coming soon...</p>
          </div> */}
          <Skill/>
        </section>


      
        <Contact/>
       
        
        
        <Footer/>
     
      </main>
    </>
  )
}

export default App