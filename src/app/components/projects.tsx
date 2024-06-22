"use client";
import React from 'react';
import ProjectCard from './projectCard';
import Horserace from '../assets/horserace.png';
import Ibdb from '../assets/ibdb.png';
import Jokemaster from '../assets/jokemaster.png';
import Tictactoe from '../assets/tictactoe.png';
import Vektor from '../assets/vektor.png';
import Workout from '../assets/workout.png';
import SolarML from '../assets/solar_ml.png';
import OldPortfolio from '../assets/old_portfolio.png';
import { useInView } from "react-intersection-observer";

interface ProjectsProps {
  id: string;
  onChange: (inView: boolean, id: string) => void;
}

function Projects({ id, onChange }: ProjectsProps) {

  const { ref, inView } = useInView( {
      threshold: 0.08,
      onChange: (inView) => onChange(inView, id),
    }
  );

  return (
    <div id={id} className="w-full h-full text-gray-300">

      {/* Container */}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-[#E25822]">Projects</p>
          <p className="py-6 text-gray-400">// Check out some of my recent projects</p>
        </div>
        <div className="flex gap-2">
          <div ref={ref} className={`grid md:grid-cols-2 gap-4 ${inView ? "opacity-100 duration-1000" : "xl:opacity-0 blur xl:translate-x-[-100%]"}`}>
            <ProjectCard image={Ibdb} title="IBDB" demoLink="https://ibdb-743f5.web.app/" codeLink="https://github.com/olejacobmellgren/IBDb" />
            <ProjectCard image={Horserace} title="Horserace" demoLink="https://filipskaug.github.io/HorseRace/" codeLink="https://github.com/olejacobmellgren/horse-race" />
            <ProjectCard image={Jokemaster} title="Jokemaster" demoLink="https://olejacobmellgren.github.io/jokemaster/" codeLink="https://github.com/olejacobmellgren/jokemaster" />
            <ProjectCard image={Vektor} title="Vektorprogrammet" demoLink="https://vektorprogrammet.no/" codeLink="https://github.com/vektorprogrammet/vektor-frontend" />
            <ProjectCard image={SolarML} title="Energy Machine learning" codeLink="https://github.com/olejacobmellgren/solar-panel-energy-ml" />
            <ProjectCard image={Workout} title="Workout Journal" codeLink="https://github.com/olejacobmellgren/workout-journal" />
            <ProjectCard image={Tictactoe} title="Tic Tac Toe" codeLink="https://github.com/olejacobmellgren/tictactoe" />
            <ProjectCard image={OldPortfolio} title="Old Portfolio" demoLink="https://olejacobmellgren.github.io/old-portfolio/" codeLink="https://github.com/olejacobmellgren/old-portfolio" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects