"use client";
import { data } from '@/data/contact';
import React from 'react';
import { useInView } from "react-intersection-observer";

interface ContactProps {
  id: string;
  onChange: (inView: boolean, id: string) => void;
}

function Contact({ id, onChange }: ContactProps) {

  const { ref, inView } = useInView({
    onChange: (inView) => onChange(inView, id),
  }
  );

  return (
    <div id={id} className="w-full h-screen flex justify-center items-start py-32 px-4">
      <form method="POST" action="https://getform.io/f/lbkmqjnb" className="flex flex-col items-center max-w-[600px] w-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-[#E25822] text-gray-300">Contact</p>
          <p className="text-gray-400 p-4">{data.comment}</p>
        </div>
        <div ref={ref} className={`${inView ? "opacity-100 duration-1000" : "xl:opacity-0 blur xl:translate-x-[-100%]"}`}>
          <input className="p-2 bg-[#CCD6F6] rounded-lg w-full" type="text" placeholder="Name" name="name" />
          <input className="my-4 p-2 bg-[#CCD6F6] rounded-lg w-full" type="email" placeholder="Email" name="email" />
          <textarea className="p-2 bg-[#CCD6F6] rounded-lg w-full" placeholder="Message" name="message" rows={4} />
          <button className="text-white w-fit border-2 px-6 py-3 my-4 rounded-xl hover:bg-[#E25822] hover:border-[#E25822]"> Submit</button>
        </div>
      </form>
    </div>
  )
}

export default Contact