import React from 'react';
import Sidebar from "./components/Sidebar";
import Hero from "./components/Hero";

const App = () => {
  return (
  <div className="w-full min-h-screen m-0 flex overflow-hidden scrollbar-hide">
      <Sidebar />
  <main className="flex-1 md:ml-72 ml-0 bg-green-200 min-h-screen pt-4 pr-4 w-full overflow-y-hidden">
        <div className="flex gap-2 justify-end mb-2 mr-4">
          <div className="w-4 h-4 bg-red-400 rounded-full"></div>
          <div className="w-4 h-4 bg-yellow-400 rounded-full"></div>
          <div className="w-4 h-4 bg-green-400 rounded-full"></div>
        </div>
        <Hero />
      </main>
    </div>
  );
};

export default App;