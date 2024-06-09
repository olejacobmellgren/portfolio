"use client";
import React, { useState} from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import { Link } from 'react-scroll';
import { TypeAnimation } from 'react-type-animation';


function Home() {

  return (
    <div id="home" className="w-full h-screen bg-[#0A192F]">

      {/* Container */}
      <div className="max-w-[1000px] lg:mx-64 mx-2 flex flex-col justify-center h-full">
        <p className="text-[#E25822] font-bold font-poppins">Hi, my name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6] font-gwen">Ole Jacob Mellgren</h1>
        <div className=''>

          <TypeAnimation
            sequence={[
              // Same substring at the start will only be typed out once, initially
              "// I'm a Software Developer.",
              1000, // wait 1s before replacing "Mice" with "Hamsters"
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
        </div>
        <p className="text-[#8892b0] text-lg py-4 max-w-[700px]">I'm a full-stack developer eager to build (and occasionally
          design) exceptional web applications. Currently, I'm pursuing a master's degree in computer science at the 
          Norwegian University of Science and Technology in Trondheim.</p>
        <div>
          <button className="text-white group border-2 px-6 py-3 my-2 flex items-center rounded-xl hover:bg-[#E25822] hover:border-[#E25822]"> <Link to="projects" smooth={true} offset={-80} duration={500}> View work </Link>
            <span className="group-hover:rotate-90 duration-300">
              <HiArrowNarrowRight className="ml-3" />
            </span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Home;