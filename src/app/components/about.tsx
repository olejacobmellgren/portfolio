import React from 'react'

function About() {
  return (
    <div id="about" className="w-full h-screen bg-[#0A192F] text-gray-300">
      <div className="flex flex-col justify-center mx-auto p-4 items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="pb-8 sm:pl-12">
            <p className="text-4xl font-bold inline border-b-4 border-[#E25822]">About</p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full pr-4 grid sm:grid-cols-2 gap-8">
          <div className="sm:text-right text-4xl font-bold">
            <p>Hi, I'm Ole Jacob, nice to meet you. Please take a look around.</p>
          </div>
          <div>
            <p>I am passionate about building excellent software that improves
              the lives of those around me. I specialize in creating software
              for clients ranging from individuals and small-businesses all the
              way to large enterprise corporations. What would you do if you had
              a software expert available at your fingertips?</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About