import React from 'react';
import Sidebar from "./components/Sidebar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";

const App = () => {
  return (
    <div className="w-full min-h-screen m-0 flex overflow-hidden">
      <Sidebar />
      <main className="flex-1 ml-64 bg-green-200 min-h-screen pt-4 pr-4 w-full">
        <div className="flex gap-2 justify-end mb-2 mr-4">
          <div className="w-4 h-4 bg-red-400 rounded-full"></div>
          <div className="w-4 h-4 bg-yellow-400 rounded-full"></div>
          <div className="w-4 h-4 bg-green-400 rounded-full"></div>
        </div>
        <div id="about">
          <Hero />
        </div>
        {/* <div id="projects">
          <Projects />
        </div>
        <div id="experience">
          <Experience />
        </div>
        <div id="contact">
          <Contact />
        </div> */}
      </main>
    </div>
  );
};

export default App;