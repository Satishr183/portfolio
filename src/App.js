import React from "react";

import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Project from "./components/Project";
import Skills from "./components/Skills";

 function App() {
  return (
  <main className='text-gray-400 bg-gray-900 body-font'>
    {/* <h1>here</h1> */}
    <Navbar />
      <About />
      <Project />
      <Skills />
      <Contact />
  </main>
  );
}
export default App


