import React from 'react';

const Experience = () => {
  return (
    <div className="mb-16">
      <h2 className="text-3xl font-bold text-gray-800 mb-8 ml-8">
        EXPERIENCE
      </h2>
      
      <div className="ml-8 space-y-8">
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
    </div>
  );
};

export default Experience;