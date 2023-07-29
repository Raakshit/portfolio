import React from "react";
import HeroImage from "../Assets/heroImage.jpg";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col justify-center items-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full pr-7">
          <h2 className="text-4xl sm:text-7xl font-bold text-white">
            I'm a <span className="text-blue-400">Full Stack</span> Developer
          </h2>
          <p className="text-gray-300 py-5 text-lg">
            Enthusiastic MERN Full Stack Developer skilled in Tailwind CSS,
            embracing upcoming projects with Next.js. Eager to learn and
            collaborate for innovative web experiences. Let's connect and build
            together!
          </p>
          <div>
            <Link to="projects"  smooth duration={500} >
              <button className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer">
                Projects
                <span className="group-hover:rotate-90 duration-300">
                  <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
                </span>
              </button>
            </Link>
          </div>
        </div>
        <div>
          <img
            src={HeroImage}
            alt="my Profile"
            className="rounded-2xl mx-auto w-2/3 md:w-full "
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
