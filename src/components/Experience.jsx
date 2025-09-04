import React from 'react';

const Experience = () => {
  return (
    <>
      <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 md:mb-8 ml-4 md:ml-8">
        EXPERIENCE
      </h2>
      
      <div className="ml-4 md:ml-8 space-y-6 md:space-y-8">
  <div className="border-2 border-black bg-white p-4 md:p-6 rounded-lg shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-lg transition-shadow duration-200">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-4 gap-2">
            <div>
              <h3 className="text-lg md:text-xl font-bold">Frontend Developer</h3>
              <p className="text-blue-600 font-semibold text-sm md:text-base">Code Assist</p>
            </div>
            <span className="bg-green-200 px-2 md:px-3 py-1 rounded text-xs md:text-sm font-semibold self-start">Dec'24 - Jan'25</span>
          </div>
          <p className="text-gray-700 mb-4 text-sm md:text-base">
            Contributed to Code Assist by developing the Idea Point page — a platform where students can pitch project ideas and collaborate
          </p>
          <div className="flex gap-2 flex-wrap">
            <span className="bg-blue-100 px-2 md:px-3 py-1 rounded text-xs md:text-sm">React</span>
            <span className="bg-yellow-100 px-2 md:px-3 py-1 rounded text-xs md:text-sm">Tailwind CSS</span>
            <span className="bg-green-100 px-2 md:px-3 py-1 rounded text-xs md:text-sm">Git</span>
          </div>
        </div>

  <div className="border-2 border-black bg-white p-4 md:p-6 rounded-lg shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-lg transition-shadow duration-200">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-4 gap-2">
            <div>
              <h3 className="text-lg md:text-xl font-bold">Contributor</h3>
              <p className="text-blue-600 font-semibold text-sm md:text-base">Outreachy</p>
            </div>
            <span className="bg-blue-200 px-2 md:px-3 py-1 rounded text-xs md:text-sm font-semibold self-start">Mar'25 - May'25</span>
          </div>
          <p className="text-gray-700 mb-4 text-sm md:text-base">
            Contributed to Wikimedia as part of the Outreachy program, collaborating with the open-source community to enhance features, improve documentation, and support users worldwide.
          </p>
          <div className="flex gap-2 flex-wrap">
            <span className="bg-orange-100 px-2 md:px-3 py-1 rounded text-xs md:text-sm">React</span>
            <span className="bg-yellow-100 px-2 md:px-3 py-1 rounded text-xs md:text-sm">Tailwind CSS</span>
            <span className="bg-red-100 px-2 md:px-3 py-1 rounded text-xs md:text-sm">Git</span>
            <span className="bg-teal-100 px-2 md:px-3 py-1 rounded text-xs md:text-sm">Open source</span>
          </div>
        </div>

  <div className="border-2 border-black bg-white p-4 md:p-6 rounded-lg shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-lg transition-shadow duration-200">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-4 gap-2">
            <div>
              <h3 className="text-lg md:text-xl font-bold">Graphic Designer</h3>
              <p className="text-blue-600 font-semibold text-sm md:text-base">Girls Leading Tech</p>
            </div>
            <span className="bg-purple-200 px-2 md:px-3 py-1 rounded text-xs md:text-sm font-semibold self-start">Apr'25 - Present</span>
          </div>
          <p className="text-gray-700 mb-4 text-sm md:text-base">
            Graphic Designer at Girls Leading Tech — creating visuals to support community events and initiatives.
          </p>
          <div className="flex gap-2 flex-wrap">
            <span className="bg-pink-100 px-2 md:px-3 py-1 rounded text-xs md:text-sm">Canva</span>
            <span className="bg-lime-100 px-2 md:px-3 py-1 rounded text-xs md:text-sm">UI/UX</span>
            <span className="bg-cyan-100 px-2 md:px-3 py-1 rounded text-xs md:text-sm">Figma</span>
            
          </div>
        </div>
      </div>
    </>
  );
};

export default Experience;