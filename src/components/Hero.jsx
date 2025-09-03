import React from 'react';

const Hero = () => {
  return (
    <div className="flex-1 bg-yellow-50 ml-5 relative border border-black mt-2 overflow-y-auto max-h-[calc(100vh-2rem)]">
      
      {/* About Me Section */}
      <section id="about" className="p-8 min-h-screen">
        <h2 className="text-3xl font-bold text-gray-800 mb-4 ml-8">
          ABOUT ME
        </h2>
        
        {/* Profile Card */}
        <div className="flex gap-6 items-start ml-8 mt-8">
          {/* Profile Image Card */}
          <div className="border-2 border-black bg-white p-2 w-80 flex flex-col justify-center items-center rounded-lg shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] relative">
            <div className="w-72 h-60 bg-red-300 border border-black mb-2 relative flex justify-center items-center overflow-hidden">
              <div className="image">
                <img src='Ladki.png' className="w-72 h-80 object-cover absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-[40%] z-10" />
              </div>
            </div>
            <div className="text-center font-bold text-black">
              ANKITA-KUNTAL
            </div>
          </div>
          
          {/* About Text */}
          <div className="flex-1 text-black leading-relaxed text-lg">
            <p className="mb-4">
              Hi! I'm Ankita Kuntal, a passionate web developer and designer who loves creating beautiful and functional digital experiences.
            </p>
            <p className="mb-4">
              With expertise in modern web technologies like React, JavaScript, and CSS, I bring ideas to life through clean code and intuitive design.
            </p>
            <p>
              When I'm not coding, you can find me exploring new design trends, reading tech blogs, or working on creative side projects.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="p-8 min-h-screen">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 ml-8">
          PROJECTS
        </h2>
        
        <div className="ml-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Project Card 1 */}
          <div className="border-2 border-black bg-white p-6 rounded-lg shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            <div className="h-40 bg-gray-200 border border-black mb-4 rounded flex items-center justify-center">
              <span className="text-gray-600">Project Image</span>
            </div>
            <h3 className="text-xl font-bold mb-2">E-Commerce Website</h3>
            <p className="text-gray-700 mb-4">A full-stack e-commerce platform built with React and Node.js</p>
            <div className="flex gap-2">
              <span className="bg-blue-200 px-3 py-1 rounded text-sm">React</span>
              <span className="bg-green-200 px-3 py-1 rounded text-sm">Node.js</span>
              <span className="bg-yellow-200 px-3 py-1 rounded text-sm">MongoDB</span>
            </div>
          </div>

          {/* Project Card 2 */}
          <div className="border-2 border-black bg-white p-6 rounded-lg shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            <div className="h-40 bg-gray-200 border border-black mb-4 rounded flex items-center justify-center">
              <span className="text-gray-600">Project Image</span>
            </div>
            <h3 className="text-xl font-bold mb-2">Task Management App</h3>
            <p className="text-gray-700 mb-4">A collaborative task management tool with real-time updates</p>
            <div className="flex gap-2">
              <span className="bg-purple-200 px-3 py-1 rounded text-sm">Vue.js</span>
              <span className="bg-red-200 px-3 py-1 rounded text-sm">Firebase</span>
              <span className="bg-blue-200 px-3 py-1 rounded text-sm">Tailwind</span>
            </div>
          </div>

          {/* Project Card 3 */}
          <div className="border-2 border-black bg-white p-6 rounded-lg shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            <div className="h-40 bg-gray-200 border border-black mb-4 rounded flex items-center justify-center">
              <span className="text-gray-600">Project Image</span>
            </div>
            <h3 className="text-xl font-bold mb-2">Weather Dashboard</h3>
            <p className="text-gray-700 mb-4">A responsive weather app with location-based forecasts</p>
            <div className="flex gap-2">
              <span className="bg-orange-200 px-3 py-1 rounded text-sm">JavaScript</span>
              <span className="bg-cyan-200 px-3 py-1 rounded text-sm">API</span>
              <span className="bg-pink-200 px-3 py-1 rounded text-sm">CSS3</span>
            </div>
          </div>

          {/* Project Card 4 */}
          <div className="border-2 border-black bg-white p-6 rounded-lg shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            <div className="h-40 bg-gray-200 border border-black mb-4 rounded flex items-center justify-center">
              <span className="text-gray-600">Project Image</span>
            </div>
            <h3 className="text-xl font-bold mb-2">Portfolio Website</h3>
            <p className="text-gray-700 mb-4">A creative portfolio showcasing my design and development skills</p>
            <div className="flex gap-2">
              <span className="bg-indigo-200 px-3 py-1 rounded text-sm">React</span>
              <span className="bg-teal-200 px-3 py-1 rounded text-sm">Framer Motion</span>
              <span className="bg-lime-200 px-3 py-1 rounded text-sm">GSAP</span>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="p-8 min-h-screen">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 ml-8">
          EXPERIENCE
        </h2>
        
        <div className="ml-8 space-y-8">
          {/* Experience Item 1 */}
          <div className="border-2 border-black bg-white p-6 rounded-lg shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-xl font-bold">Frontend Developer</h3>
                <p className="text-blue-600 font-semibold">TechCorp Solutions</p>
              </div>
              <span className="bg-green-200 px-3 py-1 rounded text-sm font-semibold">2023 - Present</span>
            </div>
            <p className="text-gray-700 mb-4">
              Developed responsive web applications using React and modern JavaScript. Collaborated with UX/UI designers to implement pixel-perfect designs and improved website performance by 40%.
            </p>
            <div className="flex gap-2 flex-wrap">
              <span className="bg-blue-100 px-3 py-1 rounded text-sm">React</span>
              <span className="bg-yellow-100 px-3 py-1 rounded text-sm">JavaScript</span>
              <span className="bg-purple-100 px-3 py-1 rounded text-sm">TypeScript</span>
              <span className="bg-green-100 px-3 py-1 rounded text-sm">Git</span>
            </div>
          </div>

          {/* Experience Item 2 */}
          <div className="border-2 border-black bg-white p-6 rounded-lg shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-xl font-bold">Web Developer Intern</h3>
                <p className="text-blue-600 font-semibold">StartupHub Inc.</p>
              </div>
              <span className="bg-blue-200 px-3 py-1 rounded text-sm font-semibold">2022 - 2023</span>
            </div>
            <p className="text-gray-700 mb-4">
              Built and maintained company websites using HTML, CSS, and JavaScript. Assisted in developing the company's main product dashboard and gained experience in agile development methodologies.
            </p>
            <div className="flex gap-2 flex-wrap">
              <span className="bg-orange-100 px-3 py-1 rounded text-sm">HTML/CSS</span>
              <span className="bg-yellow-100 px-3 py-1 rounded text-sm">JavaScript</span>
              <span className="bg-red-100 px-3 py-1 rounded text-sm">jQuery</span>
              <span className="bg-teal-100 px-3 py-1 rounded text-sm">Bootstrap</span>
            </div>
          </div>

          {/* Experience Item 3 */}
          <div className="border-2 border-black bg-white p-6 rounded-lg shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-xl font-bold">Freelance Web Designer</h3>
                <p className="text-blue-600 font-semibold">Self-Employed</p>
              </div>
              <span className="bg-purple-200 px-3 py-1 rounded text-sm font-semibold">2021 - 2022</span>
            </div>
            <p className="text-gray-700 mb-4">
              Created custom websites for small businesses and entrepreneurs. Managed complete project lifecycle from client consultation to deployment, delivering 15+ successful projects.
            </p>
            <div className="flex gap-2 flex-wrap">
              <span className="bg-pink-100 px-3 py-1 rounded text-sm">WordPress</span>
              <span className="bg-indigo-100 px-3 py-1 rounded text-sm">Photoshop</span>
              <span className="bg-cyan-100 px-3 py-1 rounded text-sm">Figma</span>
              <span className="bg-lime-100 px-3 py-1 rounded text-sm">SEO</span>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="p-8 min-h-screen">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 ml-8">
          CONTACT
        </h2>
        
        <div className="ml-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Info */}
          <div className="border-2 border-black bg-white p-6 rounded-lg shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            <h3 className="text-xl font-bold mb-6">Get In Touch</h3>
            
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-blue-600">📧</span>
                </div>
                <div>
                  <p className="font-semibold">Email</p>
                  <p className="text-gray-600">ankita.kuntal@email.com</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                  <span className="text-green-600">📱</span>
                </div>
                <div>
                  <p className="font-semibold">Phone</p>
                  <p className="text-gray-600">+91 12345 67890</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                  <span className="text-purple-600">📍</span>
                </div>
                <div>
                  <p className="font-semibold">Location</p>
                  <p className="text-gray-600">Mumbai, India</p>
                </div>
              </div>
            </div>
            
            <div className="mt-8">
              <p className="text-gray-700 mb-4">
                I'm always excited to work on new projects and collaborate with creative minds. Let's build something amazing together!
              </p>
              
              <div className="flex gap-4">
                <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors duration-300">
                  LinkedIn
                </button>
                <button className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-900 transition-colors duration-300">
                  GitHub
                </button>
                <button className="bg-pink-500 text-white px-4 py-2 rounded hover:bg-pink-600 transition-colors duration-300">
                  Instagram
                </button>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="border-2 border-black bg-white p-6 rounded-lg shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            <h3 className="text-xl font-bold mb-6">Send Message</h3>
            
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-semibold mb-2">Name</label>
                <input 
                  type="text" 
                  className="w-full border-2 border-gray-300 rounded px-3 py-2 focus:border-blue-500 focus:outline-none"
                  placeholder="Your Name"
                />
              </div>
              
              <div>
                <label className="block text-sm font-semibold mb-2">Email</label>
                <input 
                  type="email" 
                  className="w-full border-2 border-gray-300 rounded px-3 py-2 focus:border-blue-500 focus:outline-none"
                  placeholder="your.email@example.com"
                />
              </div>
              
              <div>
                <label className="block text-sm font-semibold mb-2">Subject</label>
                <input 
                  type="text" 
                  className="w-full border-2 border-gray-300 rounded px-3 py-2 focus:border-blue-500 focus:outline-none"
                  placeholder="Project Inquiry"
                />
              </div>
              
              <div>
                <label className="block text-sm font-semibold mb-2">Message</label>
                <textarea 
                  rows="4" 
                  className="w-full border-2 border-gray-300 rounded px-3 py-2 focus:border-blue-500 focus:outline-none resize-none"
                  placeholder="Tell me about your project..."
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                className="w-full bg-blue-500 text-white font-bold py-3 rounded hover:bg-blue-600 transition-colors duration-300 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px]"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;