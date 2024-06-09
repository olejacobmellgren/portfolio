import React from 'react';
import Image from 'next/image';
import Python from '../assets/python.png';
import Flutterflow from '../assets/flutterflow.png';
import HTML from '../assets/html.png';
import CSS from '../assets/css.png';
import Typescript from '../assets/typescript.png';
import ReactImg from '../assets/react.png';
import FireBase from '../assets/firebase.png';
import Mongo from '../assets/mongo.png';

function Experience() {

  return (
    <div id="experience" className="w-full h-screen bg-[#0A192F] text-gray-300">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-[#E25822]">Experience</p>
          <p className="py-6 text-gray-400">// These are some of the technologies I've worked with</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
          <div>
            <Image className="w-20 mx-auto hover:scale-110 duration-500" src={Python} alt="python icon" />
            <p>Python</p>
          </div>
          <div>
            <Image className="w-20 mx-auto hover:scale-110 duration-500" src={Typescript} alt="typescript icon" />
            <p>Typescript</p>
          </div>
          <div>
            <Image className="w-20 mx-auto hover:scale-110 duration-500" src={ReactImg} alt="react icon" />
            <p>React</p>
          </div>
          <div>
            <Image className="w-20 mx-auto hover:scale-110 duration-500" src={Flutterflow} alt="flutterflow icon" />
            <p>Flutterflow</p>
          </div>
          <div>
            <Image className="w-20 mx-auto hover:scale-110 duration-500" src={HTML} alt="html icon" />
            <p>HTML</p>
          </div>
          <div>
            <Image className="w-20 mx-auto hover:scale-110 duration-500" src={CSS} alt="css icon" />
            <p>CSS</p>
          </div>
          <div>
            <Image className="w-20 mx-auto hover:scale-110 duration-500" src={FireBase} alt="firebase icon" />
            <p>Firebase</p>
          </div>
          <div>
            <Image className="w-20 mx-auto hover:scale-110 duration-500" src={Mongo} alt="mongodb icon" />
            <p>MongoDB</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Experience