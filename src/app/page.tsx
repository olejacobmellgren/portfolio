'use client';
import Navbar from "./components/navbar";
import Home from "./components/home";
import About from "./components/about";
import Experience from "./components/experience";
import Projects from "./components/projects";
import Contact from "./components/contact";
import { useState } from "react";

export default function App() {

  const [activeSection, setActiveSection] = useState("");

  const handleSectionChange = (inView: boolean, id: string) => {
    if (inView) {
      setActiveSection(id);
    }
  };

  return (
    <main className="font-source">
      <Navbar activeSection={activeSection}/>
      <Home id="home" onChange={handleSectionChange}/>
      <About id="about" onChange={handleSectionChange}/>
      <Experience id="experience" onChange={handleSectionChange}/>
      <Projects id="projects" onChange={handleSectionChange}/>
      <Contact id="contact" onChange={handleSectionChange}/>
    </main>
  );
}
