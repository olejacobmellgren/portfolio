import React from 'react'

function Contact() {
  return (
    <div id="contact" className="w-full h-screen bg-[#0A192F] flex justify-center items-start py-32 px-4">
      <form method="POST" action="https://getform.io/f/lbkmqjnb" className="flex flex-col items-center max-w-[600px] w-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-[#E25822] text-gray-300">Contact</p>
          <p className="text-gray-400 p-4">// Get in touch by submitting the form below or
            send me an Email - olejacobmellgren@gmail.com</p>
        </div>
        <input className="p-2 bg-[#CCD6F6] rounded-lg w-full" type="text" placeholder="Name" name="name" />
        <input className="my-4 p-2 bg-[#CCD6F6] rounded-lg w-full" type="email" placeholder="Email" name="email" />
        <textarea className="p-2 bg-[#CCD6F6] rounded-lg w-full" placeholder="Message" name="message" rows={4} />
        <button className="text-white w-fit border-2 px-6 py-3 my-4 rounded-xl hover:bg-[#E25822] hover:border-[#E25822]"> Submit</button>
      </form>
    </div>
  )
}

export default Contact