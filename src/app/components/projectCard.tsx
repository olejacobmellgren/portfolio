import React from 'react'
import Image from 'next/image';

function ProjectCard({ image, title, demoLink, codeLink }: { image: any, title: string, demoLink?: string, codeLink: string }) {
  return (
    <div className=" group container rounded-md flex justify-center items-center mx-auto">
            <div className="group-hover:opacity-50 group-hover:scale-105 duration-300">
              <Image className="w-full h-full rounded-lg shadow-lg shadow-[#040C16]" src={image} alt={`${title} project"`} />
            </div>
            {/* Hover Effects */}
            <div className="absolute opacity-0 group-hover:opacity-100 flex flex-col items-center">
              <span className="text-2xl font-bold text-white tracking-wider">
                {title}
              </span>
              
              <div className="pt-8 flex gap-1">
              { demoLink ?
                <a href={demoLink} target="_blank">
                  <button className="text-white group border-2 px-6 py-3 my-2 flex items-center rounded-xl hover:bg-[#E25822] hover:border-[#E25822]"> Demo</button>
                </a> : null }
                <a href={codeLink} target="_blank">
                  <button className="text-white group border-2 px-6 py-3 my-2 flex items-center rounded-xl hover:bg-[#E25822] hover:border-[#E25822]"> Code</button>
                </a>
              </div>
            </div>
          </div>
  )
}

export default ProjectCard