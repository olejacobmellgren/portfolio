"use client";
import React, { useState } from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import { Link } from 'react-scroll';
import { TypeAnimation } from 'react-type-animation';
import { useInView } from "react-intersection-observer";
import { data } from '../data/home';

interface HomeProps {
  id: string;
  onChange: (inView: boolean, id: string) => void;
}
function Home({ id, onChange }: HomeProps) {

  const { ref, inView } = useInView({
      threshold: 0.2,
      onChange: (inView) => onChange(inView, id),
    }
  );

  return (
    <div id={id} className="w-full h-screen mb-2">

      {/* Container */}
      <div className="max-w-[1000px] lg:mx-64 mx-2 flex flex-col justify-center h-full">
        <p className="text-[#E25822] font-bold font-poppins">{data.intro}</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6] font-gwen">{data.name}</h1>
        <div ref={ref} className={`${inView ? "opacity-100 duration-1000" : "xl:opacity-0 blur xl:translate-x-[-100%]"}`}>

          <TypeAnimation
            sequence={[
              "// I'm a Software Developer.",
              1000,
              "// I'm a Business Engineer.",
              1000,
              "// I'm a Computer Science Student.",
              1000,
              "// I'm a Designer (?).",
              1000,
              "// I'm a Football Enthusiast.",
              1000
            ]}
            speed={50}
            className="font-bold text-[#8892b0]"
            style={{ fontSize: '2rem', display: 'inline-block' }}
            repeat={Infinity}
          />
          <p className="text-[#8892b0] text-lg py-4 max-w-[700px]">{data.about}</p>
          <Link to="projects" smooth={true} offset={-80} duration={500}>
          <button className="text-white group border-2 px-6 py-3 my-2 flex items-center rounded-xl hover:bg-[#E25822] hover:border-[#E25822]">  View work 
            <span className="group-hover:rotate-90 duration-300">
              <HiArrowNarrowRight className="ml-3" />
            </span>
          </button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Home;