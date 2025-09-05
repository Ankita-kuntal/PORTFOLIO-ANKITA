import React from 'react';
import Projects from './Projects';
import Experience from './Experience';
import Contact from './Contact';
import TypingAnimation from './TypingAnimation';

const Hero = () => {
  return (
    <div className="flex-1 bg-[#fffeed] ml-2 lg:ml-5 relative border border-black mt-0 overflow-y-auto overflow-x-hidden max-h-[calc(100vh-2rem)] font-sans">
      
      {/* About Me Section */}
      <section id="about" className="p-4 lg:p-8 min-h-screen">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 ml-2 lg:ml-8">
          ABOUT ME
        </h2>
        
        {/* Profile Layout - Responsive: Stack on mobile, side by side on desktop */}
        <div className="flex flex-col lg:flex-row gap-8 items-start ml-2 lg:ml-8 mt-8 w-full">
          {/* Profile Image Card */}
          <div className="border-2 border-black bg-white pt-2 pl-2 pr-2 pb-0 w-full max-w-72 flex flex-col justify-center items-center rounded-lg shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] mx-auto lg:mx-0 mb-2 lg:mb-0">
            <div className="w-64 h-60 bg-red-400 border-2 border-black mb-3 relative flex justify-center items-center overflow-visible rounded">
              <div className="image">
                <img src='Ladki.webp' className="w-72 h-72 object-cover absolute -top-10 left-1/2 -translate-x-1/2" style={{ zIndex: 3 }} />
              </div>
            </div>
            <div className="text-center font-bold text-black text-lg tracking-wider">
              ANKITA-KUNTAL
            </div>
          </div>
          {/* About Text - Always below profile card on mobile */}
          <div className="w-full lg:flex-1 flex flex-col justify-start text-gray-700 leading-relaxed text-base min-h-[12rem] lg:min-h-[22rem] mt-2 lg:mt-0">
            <p className="mt-6 pt-2 font-jetbrains text-lg lg:text-xl px-2 lg:px-4 py-2 text-center lg:text-left">
              I'm <span className='text-2xl lg:text-3xl font-extrabold font-jetbrains text-red-400 drop-shadow-lg'>Ankita</span> Developer by logic, designer by heart <b>♡</b> <br /> Blending code and creativity to build user-friendly web experiences.<br />
              Student of pixels & logic!
            </p>
            <div className="mt-8 ml-2 ">
              <TypingAnimation roles={["WEB DEVELOPER", "DSA ENTHUSIAST", "UI/UX DESIGNER"]} />
            </div>
          </div>
        </div>

        {/* Skills Section - Responsive, no horizontal scroll */}
  <div className="mt-8 w-full  lg:ml-8">
          <div className="flex flex-wrap gap-3 lg:gap-4 items-center justify-center lg:justify-start">
              <img src="/skills/HTML5.webp" alt="HTML5" className="w-10 h-10 lg:w-12 lg:h-12 object-contain transition-transform duration-300 hover:scale-125 hover:-translate-y-1 cursor-pointer" />
              <img src="/skills/CSS3.webp" alt="CSS3" className="w-10 h-10 lg:w-12 lg:h-12 object-contain transition-transform duration-300 hover:scale-125 hover:-translate-y-1 cursor-pointer" />
              <img src="/skills/Javascript.webp" alt="JavaScript" className="w-10 h-10 lg:w-12 lg:h-12 object-contain transition-transform duration-300 hover:scale-125 hover:-translate-y-1 cursor-pointer" />
              <img src="/skills/TailwindCSS.webp" alt="Tailwind" className="w-10 h-10 lg:w-12 lg:h-12 object-contain transition-transform duration-300 hover:scale-125 hover:-translate-y-1 cursor-pointer" />
              <img src="/skills/React.webp" alt="React" className="w-10 h-10 lg:w-12 lg:h-12 object-contain transition-transform duration-300 hover:scale-125 hover:-translate-y-1 cursor-pointer" />
              <img src="/skills/Nodejs.webp" alt="Node.js" className="w-10 h-10 lg:w-12 lg:h-12 object-contain transition-transform duration-300 hover:scale-125 hover:-translate-y-1 cursor-pointer" />
              <img src="/skills/TypeScript.webp" alt="TypeScript" className="w-10 h-10 lg:w-12 lg:h-12 object-contain transition-transform duration-300 hover:scale-125 hover:-translate-y-1 cursor-pointer" />
              <img src="/skills/Python.webp" alt="Python" className="w-10 h-10 lg:w-12 lg:h-12 object-contain transition-transform duration-300 hover:scale-125 hover:-translate-y-1 cursor-pointer" />
              <img src="/skills/Nextjs.webp" alt="Next.js" className="w-10 h-10 lg:w-12 lg:h-12 object-contain transition-transform duration-300 hover:scale-125 hover:-translate-y-1 cursor-pointer" />
              <img src="/skills/Figma.webp" alt="Figma" className="w-10 h-10 lg:w-12 lg:h-12 object-contain transition-transform duration-300 hover:scale-125 hover:-translate-y-1 cursor-pointer" />
              <img src="/skills/Java.webp" alt="Java" className="w-10 h-10 lg:w-12 lg:h-12 object-contain transition-transform duration-300 hover:scale-125 hover:-translate-y-1 cursor-pointer" />
              <img src="/skills/C++.webp" alt="C++" className="w-10 h-10 lg:w-12 lg:h-12 object-contain transition-transform duration-300 hover:scale-125 hover:-translate-y-1 cursor-pointer" />
              <img src="/skills/git.webp" alt="Git" className="w-10 h-10 lg:w-12 lg:h-12 object-contain transition-transform duration-300 hover:scale-125 hover:-translate-y-1 cursor-pointer" />
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="p-2 md:p-8 min-h-screen">
        <Projects />
      </section>

      {/* Experience Section */}
      <section id="experience" className="p-2 md:p-8 min-h-screen">
        <Experience />
      </section>

      {/* Contact Section */}
      <section id="contact" className="p-2 md:p-8 min-h-screen">
        <Contact />
      </section>
    </div>
  );
};

export default Hero;