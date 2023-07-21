import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import {SiLeetcode , SiGeeksforgeeks} from "react-icons/si"

const SocialLink = () => {
  const links = [
    {
      id: 1,
      child: (
        <>
          LinkedIn <FaLinkedin size={30} />
        </>
      ),
      href: "https://www.linkedin.com/in/rakshit-agarwal-348419204/",
      style: "rounded-tr-md",
    },
    {
      id: 2,
      child: (
        <>
          GitHub <FaGithub size={30} />
        </>
      ),
      href: "https://github.com/Raakshit",
    },
    {
      id: 3,
      child: (
        <>
          LinkedIn <SiLeetcode size={30} />
        </>
      ),
      href: "https://leetcode.com/Rakshit2541/",
    },
    {
      id: 4,
      child: (
        <>
          LinkedIn <SiGeeksforgeeks size={30} />
        </>
      ),
      href: "https://auth.geeksforgeeks.org/user/rakshitagarwalrocks/practice",
    },
    {
      id: 5,
      child: (
        <>
          Mail <HiOutlineMail size={30} />
        </>
      ),
      href: "https://linkedin.com",
    },
    {
      id: 6,
      child: (
        <>
          Resume <BsFillPersonLinesFill size={30} />
        </>
      ),
      href: "/Rakshit_resume_.pdf",
      style: "rounded-br-md",
      download: true,
    },
  ];

  return (
    <div className="hidden lg:flex flex-col top-[35%] left-0 fixed">
      <ul>
        {links.map((link) => (
          <li key={link.id} className={"flex justify-center items-center w-40 h-14 bg-gray-500 hover:ml-[-10px] hover:rounded-md duration-300 px-4 ml-[-100px] " + " " + link.style}>
            <a
              href={link.href}
              className="flex justify-between items-center w-full text-white"
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
  );
};

export default SocialLink;
