import React from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const Projects = () => {
  return (
    <>
      <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 md:mb-8 ml-4 md:ml-8">
        PROJECTS
      </h2>
      
  <div className="ml-4 md:ml-8 grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
        
  <a href="https://lifeatnitsxr.vercel.app/" target="_blank" rel="noopener noreferrer" className="border-2 border-black bg-white p-4 md:p-6 rounded-lg shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] block hover:shadow-lg transition-shadow duration-200">
          <div className="h-32 md:h-40 bg-gray-200 border border-black mb-4 rounded flex items-center justify-center">
            <img src="/NIT.webp" alt="Movie Project" loading="lazy" className="w-full h-full object-cover" />
          </div>
          <h3 className="text-lg md:text-xl font-bold mb-2 flex items-center justify-between">
            <span>Life At NIT</span>
            <span className="flex items-center gap-4">
              <a href="https://github.com/Ankita-kuntal/LifeAtNIT.git" target="_blank" rel="noopener noreferrer" className="text-black hover:text-gray-700"><FaGithub /></a>
              <a href="https://lifeatnitsxr.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-black hover:text-gray-700"><FaExternalLinkAlt /></a>
            </span>
          </h3>
          <p className="text-gray-700 mb-4 text-sm md:text-base">LifeAtNIT — an all-in-one website to explore everything about NIT Srinagar, from campus life to academics and opportunities.</p>
          <div className="flex gap-2 flex-wrap">
            <span className="bg-indigo-200 px-2 md:px-3 py-1 rounded text-xs md:text-sm">React</span>
            <span className="bg-teal-200 px-2 md:px-3 py-1 rounded text-xs md:text-sm">Tailwind CSS</span>
            <span className="bg-lime-200 px-2 md:px-3 py-1 rounded text-xs md:text-sm">Chart.js</span>
          </div>
  </a>

  <a href="https://movie-site-beryl.vercel.app/" target="_blank" rel="noopener noreferrer" className="border-2 border-black bg-white p-4 md:p-6 rounded-lg shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] block hover:shadow-lg transition-shadow duration-200">
          <div className="h-32 md:h-40 bg-gray-200 border border-black mb-4 rounded overflow-hidden">
              <img src="/movie.webp" alt="Movie Project" loading="lazy" className="w-full h-full object-cover" />
          </div>
          <h3 className="text-lg md:text-xl font-bold mb-2 flex items-center justify-between">
            <span>Movie Website</span>
            <span className="flex items-center gap-2">
              <a href="https://github.com/Ankita-kuntal/Movie_site.git" target="_blank" rel="noopener noreferrer" className="text-black hover:text-gray-700"><FaGithub /></a>
              <a href="https://movie-site-beryl.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-black hover:text-gray-700"><FaExternalLinkAlt /></a>
            </span>
          </h3>
          <p className="text-gray-700 mb-4 text-sm md:text-base">A movie website where users can browse, search, and explore details about their favorite films.</p>
          <div className="flex gap-2 flex-wrap">
            <span className="bg-purple-200 px-2 md:px-3 py-1 rounded text-xs md:text-sm">React</span>
            <span className="bg-red-200 px-2 md:px-3 py-1 rounded text-xs md:text-sm">Tailwind CSS</span>
            <span className="bg-blue-200 px-2 md:px-3 py-1 rounded text-xs md:text-sm">API</span>
          </div>
  </a>


  <a href="https://wiki-banner-tool.vercel.app/" target="_blank" rel="noopener noreferrer" className="border-2 border-black bg-white p-4 md:p-6 rounded-lg shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] block hover:shadow-lg transition-shadow duration-200">
          <div className="h-32 md:h-40 bg-gray-200 border border-black mb-4 rounded overflow-hidden">
              <img src="/things_i_love.webp" alt="Things I Love Project" loading="lazy" className="w-full h-full object-cover" />
          </div>
          <h3 className="text-lg md:text-xl font-bold mb-2 flex items-center justify-between">
            <span>UI Learning Project</span>
            <span className="flex items-center gap-2">
              <a href="https://github.com/Ankita-kuntal/wiki-banner-tool.git" target="_blank" rel="noopener noreferrer" className="text-black hover:text-gray-700"><FaGithub /></a>
              <a href="https://wiki-banner-tool.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-black hover:text-gray-700"><FaExternalLinkAlt /></a>
            </span>
          </h3>
          <p className="text-gray-700 mb-4 text-sm md:text-base">A fun little project where I designed a UI-focused site about my favorite things — built to sharpen my design and frontend skills</p>
          <div className="flex gap-2 flex-wrap">
            <span className="bg-orange-200 px-2 md:px-3 py-1 rounded text-xs md:text-sm">HTML</span>
            <span className="bg-cyan-200 px-2 md:px-3 py-1 rounded text-xs md:text-sm">CSS</span>
            <span className="bg-pink-200 px-2 md:px-3 py-1 rounded text-xs md:text-sm">JavaScript</span>
          </div>
  </a>

        

  <a href="https://code-assist-winter-project-ivory.vercel.app/" target="_blank" rel="noopener noreferrer" className="border-2 border-black bg-white p-4 md:p-6 rounded-lg shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] block hover:shadow-lg transition-shadow duration-200">
          <div className="h-32 md:h-40 bg-gray-200 border border-black mb-4 rounded overflow-hidden">
              <img src="/weather.webp" alt="Weather Project" loading="lazy" className="w-full h-full object-cover" />
          </div>
          <h3 className="text-lg md:text-xl font-bold mb-2 flex items-center justify-between">
            <span>Weather Dashboard</span>
            <span className="flex items-center gap-2">
              <a href="https://github.com/Ankita-kuntal/Code_Assist_Winter_Project/tree/main/weather" target="_blank" rel="noopener noreferrer" className="text-black hover:text-gray-700"><FaGithub /></a>
              <a href="https://code-assist-winter-project-ivory.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-black hover:text-gray-700"><FaExternalLinkAlt /></a>
            </span>
          </h3>
          <p className="text-gray-700 mb-4 text-sm md:text-base">A weather app that shows real-time weather conditions using API integration. Built with HTML, CSS, and JavaScript</p>
          <div className="flex gap-2 flex-wrap">
            <span className="bg-red-200 px-2 md:px-3 py-1 rounded text-xs md:text-sm">HTML</span>
            <span className="bg-yellow-200 px-2 md:px-3 py-1 rounded text-xs md:text-sm">CSS3</span>
            <span className="bg-blue-200 px-2 md:px-3 py-1 rounded text-xs md:text-sm">JavaScript</span>
            <span className="bg-green-200 px-2 md:px-3 py-1 rounded text-xs md:text-sm">API</span>
            
          </div>
  </a>

        
      </div>
    </>
  );
};

export default Projects;
          