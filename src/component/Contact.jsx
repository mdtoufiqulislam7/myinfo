import React from 'react'

function Contact() {
  return (
    <section id="contact" style={{ padding: '50px 15px', backgroundColor: '#3498db', textAlign: 'center', width: '100%' }}>
      <div className="w-full">
        <h2 className="text-4xl font-bold text-white mb-12">Get in Touch</h2>
        
        <div className="space-y-8">
          {/* Email */}
          <div className="flex flex-col items-center gap-4">
            <div className="flex items-center gap-4">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span className="text-white font-medium">Email:</span>
            </div>
            <div className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-lg font-medium">
              mdtoufiq83@gmail.com
            </div>
          </div>

          {/* Phone */}
          <div className="flex flex-col items-center gap-4">
            <div className="flex items-center gap-4">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span className="text-white font-medium">Phone:</span>
            </div>
            <div className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-lg font-medium">
              +8801866733279
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact