'use client';
import React, { useState } from "react";
import About from "./components/about";
import Contact from "./components/contact";
import Experience from "./components/experience";
import Home from "./components/home";
// import Navbar from "./components/navbar";
import Projects from "./components/projects";

export default function App() {

  const [activeSection, setActiveSection] = useState("");

  const handleSectionChange = (inView: boolean, id: string) => {
    if (inView) {
      setActiveSection(id);
    }
  };

  return (
    <main className="font-source">
      {/* <Navbar activeSection={activeSection}/> */}
      <Home id="home" onChange={handleSectionChange}/>
      <About id="about" onChange={handleSectionChange}/>
      <Experience id="experience" onChange={handleSectionChange}/>
      <Projects id="projects" onChange={handleSectionChange}/>
      <Contact id="contact" onChange={handleSectionChange}/>
    </main>
  );
}
