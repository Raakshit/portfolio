import React from 'react'
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import {SiLeetcode , SiGeeksforgeeks} from "react-icons/si"

const links = [
  {
    id: 1,
    child: (
      <>
         <FaLinkedin size={33} />
      </>
    ),
    href: "https://www.linkedin.com/in/rakshit-agarwal-348419204/",
    style: " hover:text-blue-400",
  },
  {
    id: 2,
    child: (
      <>
         <FaGithub size={33} />
      </>
    ),
    href: "https://github.com/Raakshit",
    style:" hover:text-black",
  },
  {
    id: 3,
    child: (
      <>
         <SiLeetcode size={33} />
      </>
    ),
    href: "https://leetcode.com/Rakshit2541/",
    style:" hover:text-yellow-500",
  },
  {
    id: 4,
    child: (
      <>
        
        <SiGeeksforgeeks size={33} />
      </>
    ),
    href: "https://auth.geeksforgeeks.org/user/rakshitagarwalrocks/practice",
    style: " hover:text-green-500"
  },
  {
    id: 5,
    child: (
      <>
        <HiOutlineMail size={33} />  
      </>
    ),
    href: "https://linkedin.com",
    style:" hover:text-red-600",
  },
  {
    id: 6,
    child: (
      <>
       <BsFillPersonLinesFill size={33} />   
      </>
    ),
    href: "/Rakshit_resume_.pdf",
    style: " hover:text-gray-500",
    download: true,
  },
];

const Design = () => {
  return (
    <div className='flex top-[89%] right-[36%] rounded-2xl fixed bg-gray-500 bg-opacity-20 backdrop-blur-3xl drop-shadow-lg'>
      <ul className='flex items-center justify-between w-auto'>
      {links.map((link) => (
          <li key={link.id} className="px-4 py-3 ">
            <a
              href={link.href}
              className={"flex items-center justify-center flex-col hover:scale-125 duration-500 text-white" + link.style}
              download={link.download}
              target='_blank'
              rel="noreferrer"
            >
              {link.child}
            </a>
          </li>
       ))}
      </ul>
    </div>
  )
}

export default Design
