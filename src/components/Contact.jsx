import React from 'react';

const Contact = () => {
  return (
    <div>
      <h2 className="text-3xl font-bold text-gray-800 mb-8 ml-8">
        CONTACT
      </h2>
      
      <div className="ml-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
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
    </div>
  );
};

export default Contact;