import Navbar from "./components/navbar";
import Home from "./components/home";
import About from "./components/about";
import Experience from "./components/experience";
import Projects from "./components/projects";
import Contact from "./components/contact";

export default function App() {
  return (
    <main >
      <Navbar />
      <Home />
      <About />
      <Experience />
      <Projects />
      <Contact />
    </main>
  );
}
