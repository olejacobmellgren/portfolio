import React from 'react'

function Projects() {
  return (
    <div id="projects" className="w-full md:h-screen text-gray-300 bg-[#0A192F]">

      {/* Container */}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-[#E25822]">Work</p>
          <p className="py-6 text-gray-400">// Check out some of my recent work</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          <div className="shadow-lg shadow-[#040C16] group container rounded-md flex justify-center items-center mx-auto">

            {/* Hover Effects  */}
            <div>
              <span>

              </span>
              <div>
                <a href="">
                  <button>View project</button>
                </a>
                <a href="">
                  <button>View project</button>
                </a>

              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Projects