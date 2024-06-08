"use client";
import React, {useState} from 'react'
import Image from 'next/image';
import { FaBars, FaTimes } from 'react-icons/fa'
import Logo from '../assets/oj.png'

function Navbar() {
  const [nav, setNav] = useState(false)
  const handleHamburgerClick = () => setNav(!nav)

  return (
    <div className="fixed w-full h-[80px] flex  justify-between items-center px-4 bg-[#0a192f] text-gray-300">
      <div>
        <Image src={Logo} alt="logo" className="w-32" />
      </div>

      {/* Menu */}
      <ul className="hidden md:flex">
        <li className="">Home</li>
        <li className="">About</li>
        <li className="">Technologies</li>
        <li className="">Work</li>
        <li className="">Contact</li>
      </ul>

      {/* Hamburger */}
      <div onClick={handleHamburgerClick} className="md:hidden z-10">
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* Mobile Menu */}
      <ul className={!nav ? "hidden" : "absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center"}>
        <li className="py-6 text-4xl">Home</li>
        <li className="py-6 text-4xl">About</li>
        <li className="py-6 text-4xl">Technologies</li>
        <li className="py-6 text-4xl">Work</li>
        <li className="py-6 text-4xl">Contact</li>
      </ul>

      {/* Social icons*/}
      <div className="hidden"></div>
    </div>
  )
}

export default Navbar