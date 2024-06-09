import React from 'react'

function About() {
  return (
    <div id="about" className="w-full h-screen bg-[#0A192F] text-gray-300">
      <div className="flex flex-col justify-center mx-auto p-4 items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="pb-8">
            <p className="text-4xl font-bold inline border-b-4 border-[#E25822]">About</p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full pr-4 grid sm:grid-cols-2 gap-8 items-center">
          <div className=" text-4xl font-bold">
            <p>Hi, I'm Ole Jacob, nice to meet you. Please take a look around.</p>
          </div>
          <div>
            <p className="text-md">I am a computer science student with a passion for developing software that solve problems 
              people encounter in their daily lives. Specializing within the field of 
              artificial intelligence, I am dedicated to gaining more knowledge in this rapidly growing field.
              During my studies I have also developed several software applications, and enjoy
              working in both front-end and back-end development.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About