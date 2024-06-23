"use client";
import React from 'react'
import { useInView } from "react-intersection-observer";
import { data } from '../data/about';

interface AboutProps {
  id: string;
  onChange: (inView: boolean, id: string) => void;
}

function About({ id, onChange }: AboutProps) {

  const { ref, inView } = useInView({
    threshold: 0.2,
    onChange: (inView) => onChange(inView, id),
  });

  return (
    <div  id={id} className="w-full h-screen text-gray-300 mb-[800px]">
      <div className="flex flex-col justify-center mx-auto p-4 items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="pb-8">
            <p className="text-4xl font-bold inline border-b-4 border-[#E25822]">About</p>
          </div>
          <div></div>
        </div>
        <div ref={ref} className={`max-w-[1000px] w-full pr-4 grid sm:grid-cols-2 gap-8 items-center ${inView ? "opacity-100 duration-1000" : "xl:opacity-0 blur xl:translate-x-[-100%]"}`}>
          <div className="text-4xl font-bold">
            <p>{data.intro}</p>
          </div>
          <div>
            <p className="text-md">{data.about}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About