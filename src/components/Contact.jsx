import React from 'react';

const Contact = () => {
  return (
    <>
      <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 md:mb-6 ml-4 md:ml-8">
        CONTACT
      </h2>
      
      <div className="ml-4 md:ml-8 grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
        <div className="border-2 border-black bg-white p-4 md:p-6 rounded-lg shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
          <h3 className="text-lg md:text-xl font-bold mb-4 md:mb-6">Get In Touch</h3>
          
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <div className="w-8 h-8 md:w-10 md:h-10 bg-blue-100 rounded-full flex items-center justify-center">
                <span className="text-blue-600 text-sm">📧</span>
              </div>
              <div>
                <p className="font-semibold text-sm md:text-base">Email</p>
                <p className="text-gray-600 text-sm md:text-base">kuntalankitaa@email.com</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="w-8 h-8 md:w-10 md:h-10 bg-green-100 rounded-full flex items-center justify-center">
                <span className="text-green-600 text-sm">📱</span>
              </div>
              <div>
                <p className="font-semibold text-sm md:text-base">Phone</p>
                <p className="text-gray-600 text-sm md:text-base">+91 6005509568</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="w-8 h-8 md:w-10 md:h-10 bg-purple-100 rounded-full flex items-center justify-center">
                <span className="text-purple-600 text-sm">📍</span>
              </div>
              <div>
                <p className="font-semibold text-sm md:text-base">Location</p>
                <p className="text-gray-600 text-sm md:text-base">NIT Srinagar, India</p>
              </div>
            </div>
          </div>
          
          <div className="mt-6 md:mt-8">
            <p className="text-gray-700 mb-2 text-sm md:text-base">
              I'm always excited to work on new projects and collaborate with creative minds. Let's build something amazing together!
            </p>
            
            <div className="flex justify-center items-center ">
              <img src="/cat.gif" alt="Fun GIF" className="w-64 h-64 object-contain" />
            </div>
          </div>
        </div>
        
        <div className="border-2 border-black bg-white p-4 md:p-6 rounded-lg shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
          <h3 className="text-lg md:text-xl font-bold mb-4 md:mb-6">Send Message</h3>
          
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-semibold mb-2">Name</label>
              <input 
                type="text" 
                className="w-full border-2 border-gray-300 rounded px-3 py-2 focus:border-blue-500 focus:outline-none text-sm md:text-base"
                placeholder="Your Name"
              />
            </div>
            
            <div>
              <label className="block text-sm font-semibold mb-2">Email</label>
              <input 
                type="email" 
                className="w-full border-2 border-gray-300 rounded px-3 py-2 focus:border-blue-500 focus:outline-none text-sm md:text-base"
                placeholder="your.email@example.com"
              />
            </div>
            
            <div>
              <label className="block text-sm font-semibold mb-2">Subject</label>
              <input 
                type="text" 
                className="w-full border-2 border-gray-300 rounded px-3 py-2 focus:border-blue-500 focus:outline-none text-sm md:text-base"
                placeholder="Project Inquiry"
              />
            </div>
            
            <div>
              <label className="block text-sm font-semibold mb-2">Message</label>
              <textarea 
                rows="4" 
                className="w-full border-2 border-gray-300 rounded px-3 py-2 focus:border-blue-500 focus:outline-none resize-none text-sm md:text-base"
                placeholder="Tell me about your project..."
              ></textarea>
            </div>
            
            <button 
              type="submit" 
              className="w-full bg-blue-500 text-white font-bold py-3 rounded hover:bg-blue-600 transition-colors duration-300 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px] text-sm md:text-base"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;