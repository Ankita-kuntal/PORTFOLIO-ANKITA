import React from 'react';
import Projects from './Projects';
import Experience from './Experience';
import Contact from './Contact';
import TypingAnimation from './TypingAnimation';

const Hero = () => {
  return (
    <div className="flex-1 bg-yellow-50 ml-5 relative border border-black mt-0 overflow-y-auto max-h-[calc(100vh-2rem)] font-sans">
      
      {/* About Me Section */}
      <section id="about" className="p-8 min-h-screen">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 ml-8">
          ABOUT ME
        </h2>
        
        {/* Profile Layout */}
        <div className="flex gap-8 items-start ml-8 mt-8">
          {/* Profile Image Card */}
          <div className="border-2 border-black bg-white pt-2 pl-2 pr-2 pb-0 w-72 flex flex-col justify-center items-center rounded-lg shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            <div className="w-64 h-60 bg-red-300 border-2 border-black mb-3 relative flex justify-center items-center overflow-visible rounded">
              <div className="image">
                <img src='Ladki.png' className="w-72 h-72 object-cover absolute -top-10 left-1/2 -translate-x-1/2" style={{ zIndex: 3 }} />
              </div>
            </div>
            <div className="text-center font-bold text-black text-lg tracking-wider">
              ANKITA-KUNTAL
            </div>
          </div>
          
          {/* About Text */}
    <div className="flex-1 flex flex-col justify-start text-gray-700 leading-relaxed text-base min-h-[22rem]">
            <p className="mb-8 pt-8 font-jetbrains text-xl px-4 py-2">
              I’m <span className='text-3xl font-extrabold font-jetbrains text-red-400 drop-shadow-lg'>Ankita</span> Developer by logic, designer by heart <b>♡</b> <br></br> Blending code and creativity to build user-friendly web experiences.<br></br>
              Student of pixels & logic! 
               {/* <span className=" text-red-300">Fun fact: I can spend hours perfecting tiny design details ✨</span> */}
            </p>
            <TypingAnimation roles={["WEB DEVELOPER", "DSA ENTHUSIAST", "UI/UX DESIGNER"]} />
            
          </div>
        </div>

        {/* Skills Section */}
        <div className="ml-8 mt-8 ">
          
          
          <div className="flex flex-wrap gap-4 items-center">
           
              <img src="/skills/HTML5.png" alt="HTML5" className="w-12 h-12 object-contain transition-transform duration-300 hover:scale-125 hover:-translate-y-1 cursor-pointer" />
              <img src="/skills/CSS3.png" alt="CSS3" className="w-12 h-12 object-contain transition-transform duration-300 hover:scale-125 hover:-translate-y-1 cursor-pointer" />
              <img src="/skills/Javascript.png" alt="JavaScript" className="w-12 h-12 object-contain transition-transform duration-300 hover:scale-125 hover:-translate-y-1 cursor-pointer" />
              <img src="/skills/TailwindCSS.png" alt="Tailwind" className="w-12 h-12 object-contain transition-transform duration-300 hover:scale-125 hover:-translate-y-1 cursor-pointer" />
              <img src="/skills/React.png" alt="React" className="w-12 h-12 object-contain transition-transform duration-300 hover:scale-125 hover:-translate-y-1 cursor-pointer" />
              <img src="/skills/Nodejs.png" alt="Node.js" className="w-12 h-12 object-contain transition-transform duration-300 hover:scale-125 hover:-translate-y-1 cursor-pointer" />
              <img src="/skills/TypeScript.png" alt="TypeScript" className="w-12 h-12 object-contain transition-transform duration-300 hover:scale-125 hover:-translate-y-1 cursor-pointer" />
              <img src="/skills/Python.png" alt="Python" className="w-12 h-12 object-contain transition-transform duration-300 hover:scale-125 hover:-translate-y-1 cursor-pointer" />
              <img src="/skills/Nextjs.png" alt="Next.js" className="w-12 h-12 object-contain transition-transform duration-300 hover:scale-125 hover:-translate-y-1 cursor-pointer" />
              <img src="/skills/Figma.png" alt="Figma" className="w-12 h-12 object-contain transition-transform duration-300 hover:scale-125 hover:-translate-y-1 cursor-pointer" />
              <img src="/skills/Java.png" alt="Java" className="w-12 h-12 object-contain transition-transform duration-300 hover:scale-125 hover:-translate-y-1 cursor-pointer" />
              <img src="/skills/C++.png" alt="C++" className="w-12 h-12 object-contain transition-transform duration-300 hover:scale-125 hover:-translate-y-1 cursor-pointer" />
              <img src="/skills/git.png" alt="C++" className="w-12 h-12 object-contain transition-transform duration-300 hover:scale-125 hover:-translate-y-1 cursor-pointer" />
            
            
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="p-4 md:p-8 min-h-screen">
        <Projects />
      </section>

      {/* Experience Section */}
      <section id="experience" className="p-4 md:p-8 min-h-screen">
        <Experience />
      </section>

      {/* Contact Section */}
      <section id="contact" className="p-4 md:p-8 min-h-screen">
        <Contact />
      </section>
    </div>
  );
};

export default Hero;