import React from "react";
import Lottie from "lottie-react";
import L1 from "../Assets/L1.json";
import L2 from "../Assets/L2.json";
import L3 from "../Assets/L3.json";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-xl p-2  mx-auto flex items-center justify-center w-full h-full bg-slate-50 backdrop-filter backdrop-blur-[20px] bg-opacity-10 rounded-xl">
        <div className="flex-[0.5] items-center justify-between mt-20 py-11">
          <div className="flex items-center justify-around">
            <div className="flex flex-col items-center rounded-lg w-[250px]  cursor-pointer relative bg-gray-100 bg-opacity-10 backdrop-blur-xl drop-shadow-2xl">
              <Lottie animationData={L3} className="h-[150px]" />
              <p className="font-medium text-xl py-2 text-gray-300">Front-End</p>
            </div>
            <div className="flex flex-col items-center rounded-lg w-[250px]  cursor-pointer relative bg-gray-100 bg-opacity-10 backdrop-blur-xl drop-shadow-2xl">
            <Lottie animationData={L1} className="h-[150px]" />
              <p className="font-medium text-xl py-2 text-gray-300">Full-Stack developer</p>
            </div>
          </div>
          <div className="flex flex-col items-center rounded-lg w-[300px] cursor-pointer relative bg-gray-100 bg-opacity-10 backdrop-blur-xl drop-shadow-2xl mx-auto  my-6">
          <Lottie animationData={L2} className="h-[150px]" />
            <p className="font-medium text-xl py-2 text-gray-300">Sofware Engineer</p>
          </div>
        </div>
        <div className="flex-[0.5]  flex-col">
          <div className="pb-5 flex items-center justify-center">
            <p className="text-4xl font-bold inline border-b-4 border-gray-500 text-center">
              What I Do
            </p>
          </div>
          <p className="text-lg mt-10 text-left">
          I'm Rakshit, a final year student of computer and communication Engineer at manipal University jaipur. As a web developer, I am dedicated to creating dynamic and responsive websites that provide a seamless user experience. I have experience working with modern technologies such as HTML, CSS, JavaScript and various frameworks such as React, Next Js. Beyond frontend development, I have developed a keen interest in solving data structure problems. The challenge of analyzing algorithms, optimizing code efficiency, and finding elegant solutions drives me to continually enhance my problem-solving skills.
          </p>
          <br></br>
          <p className="text-lg">
          Recently completed Tech Internship at UNSTOP(formally Dare2Compete), focusing on frontend development for an in-house email application. Proficient in HTML, CSS, and JavaScript, creating intuitive interfaces. Enhanced skills in React JS for dynamic features. Explored backend integration with Firebase, gaining insight into full-stack development. Grateful for mentorship and eager to apply newfound expertise.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
