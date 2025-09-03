import React from 'react';

const Projects = () => {
  return (
    <div className="mb-16">
      <h2 className="text-3xl font-bold text-gray-800 mb-8 ml-8">
        PROJECTS
      </h2>
      
      <div className="ml-8 grid grid-cols-1 md:grid-cols-2 gap-6">
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
    </div>
  );
};

export default Projects;