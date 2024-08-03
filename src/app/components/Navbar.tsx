"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import { FaBars, FaTimes, FaGithub, FaLinkedin, FaFacebook } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import Logo from '../assets/oj.png';
import { Link } from 'react-scroll';
// const CV = '/CV_xOleJacobMellgren.pdf'

interface NavbarProps {
  activeSection: string;
}
function Navbar({ activeSection }: NavbarProps) {
  const [nav, setNav] = useState(false)
  const [menuPos, setMenuPos] = useState("right-[-300px]")

  const handleHamburgerClick = () => {
    setNav(!nav)
    if (nav) {
      setMenuPos("right-[-300px]")
    } else {
      setMenuPos("right-0")
    }
  }

  return (
    <div className="fixed w-full h-[80px] flex  justify-between items-center px-4 text-gray-300 z-40">
      <div>
        <Link to="home" smooth={true} duration={500}> <Image src={Logo} alt="logo" className="w-32 cursor-pointer hover:scale-110 duration-300 pt-8" /> </Link>
      </div>

      {/* Menu */}
      <ul className="hidden md:flex">
        <li><Link className={`${activeSection === "about" ? "border-b-2 border-[#E25822]" :""}`} to="about" smooth={true} duration={500} > About </Link></li>
        <li><Link className={`${activeSection === "experience" ? "border-b-2 border-[#E25822]" :""}`} to="experience" smooth={true} offset={-700} duration={500}> Experience </Link></li>
        <li><Link className={`${activeSection === "projects" ? "border-b-2 border-[#E25822]" :""}`}to="projects" smooth={true} offset={-80} duration={500} > Projects </Link></li>
        <li><Link className={`${activeSection === "contact" ? "border-b-2 border-[#E25822]" :""}`}to="contact" smooth={true} duration={500} > Contact </Link></li>
      </ul>

      {/* Hamburger */}
      <div onClick={handleHamburgerClick} className="md:hidden z-20">
        {!nav ? <FaBars color="white" size={30} /> : <FaTimes color="white" size={30} />}
      </div>

      {/* Mobile Menu */}
      <ul className={`mt-14 rounded-md absolute z-30 top-0 w-fit h-fit ${menuPos} flex flex-col justify-center items-center duration-300 bg-[#0A192F]`}>
        <li className="py-1 text-l"><Link to="about" smooth={true} duration={500} onClick={handleHamburgerClick}> About </Link></li>
        <li className="py-1 text-l"><Link to="experience" smooth={true} duration={500} onClick={handleHamburgerClick}> Experience </Link></li>
        <li className="py-1 text-l"><Link to="projects" smooth={true} offset={-80} duration={500} onClick={handleHamburgerClick}> Projects </Link></li>
        <li className="py-1 text-l"><Link to="contact" smooth={true} duration={500} onClick={handleHamburgerClick}> Contact </Link></li>
      </ul>

      {/* Social icons*/}
      <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
        <ul className="flex flex-col gap-1">
          <li className="w-40 h-14 flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#0077B5] rounded-r-xl">
            <a className="flex w-full justify-between items-center text-gray-300" href="https://www.linkedin.com/in/ole-jacob-mellgren-9b417127a/" target="_blank">
              LinkedIn <FaLinkedin className="ml-8" size={30} />
            </a>
          </li>
          <li className="w-40 h-14 flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333] rounded-r-xl">
            <a className="flex w-full justify-between items-center text-gray-300" href="https://github.com/olejacobmellgren" target="_blank">
              GitHub <FaGithub className="ml-8" size={30} />
            </a>
          </li>
          <li className="w-40 h-14 flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#de5246] rounded-r-xl">
            <a className="flex w-full justify-between items-center text-gray-300" href="mailto:olejacobmellgren@gmail.com">
              Email <HiOutlineMail className="ml-8" size={30} />
            </a>
          </li>
          <li className="w-40 h-14 flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69] rounded-r-xl">
            {/* <a className="flex w-full justify-between items-center text-gray-300" href={CV} target="_blank">
              Resume <BsFillPersonLinesFill className="ml-8" size={30} />
            </a> */}
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar