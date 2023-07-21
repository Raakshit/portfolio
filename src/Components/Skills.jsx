import React from "react";
import Html from "../Assets/Html.png";
import Css from "../Assets/CssImg.png";
import Javascript from "../Assets/Javascript.png";
import Reactjs from "../Assets/reactImg.png";
import Nodejs from "../Assets/nodejs.png"
import Firebase from "../Assets/firebase.png"
import nextjs from "../Assets/NextJsImg.png"
import Github from "../Assets/githubImg.png"
import Redux from "../Assets/reducimg.png"
import tailwind from "../Assets/tailwind.png"
import clanguage from "../Assets/clanguage.png"


const Skills = () => {
  const tech = [
    {
      id: 1,
      src: Html,
      title: "HTML",
      style: " shadow-orange-500",
    },
    {
      id: 2,
      src: Css,
      title: "CSS",
      style: " shadow-blue-500",
    },
    {
      id: 3,
      src: Javascript,
      title: "JavaScript",
      style: " shadow-yellow-500",
    },
    {
      id: 4,
      src: Reactjs,
      title: "React JS",
      style: " shadow-blue-600",
    },
    {
      id: 5,
      src: Redux,
      title: "Redux",
      style: " shadow-purple-500",
    },
    {
      id: 6,
      src: Nodejs,
      title: "Node JS",
      style: " shadow-green-500",
    },
    {
      id: 7,
      src: Firebase,
      title: "Firebase",
      style: " shadow-yellow-500",
    },
    {
      id: 8,
      src: nextjs,
      title: "Next Js",
      style: " shadow-gray-500",
    },
    {
      id: 9,
      src: Github,
      title: "Github",
      style: " shadow-gray-200",
    },
    {
      id: 10,
      src: tailwind,
      title: "Tailwind CSS",
      style: " shadow-sky-300",
    },
    {
      id: 11,
      src: Html,
      title: "Express Js",
      style: " shadow-orange-500",
    },
    {
      id: 12,
      src: clanguage,
      title: "C/C++",
      style: " shadow-blue-800",
    },
  ];

  return (
    <div
      name="Skiils"
      className="bg-gradient-to-b from-gray-800 to-black w-full h-fit py-6"
    >
      <div className="max-w-screen-lg mx-auto p-10 flex flex-col justify-center w-full h-full text-white bg-slate-50 backdrop-filter backdrop-blur-[20px] bg-opacity-10 rounded-xl">
        <div>
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
            Skills
          </p>
          <p className="py-6">Lorem ipsum dolor sit amet.</p>
        </div>

        <div className="w-full grid grid-cols-2 md:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {tech.map((item) => (
            <div key={item.id} className={"shadow-md hover:scale-105 duration-500 py-2 rounded-lg shadow-orange-500" + item.style}>
              <img src={item.src} alt="" className="w-20 mx-auto m-2" />
              <p className="mt-4">{item.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
