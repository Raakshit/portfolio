import React from "react";
import NotesApp from "../Assets/note_keeper.jpg";
import SlackClone from "../Assets/Slack_clone.jpg";
import BookingSystem from "../Assets/train_booking.jpg";
import { BsGlobe } from "react-icons/bs";
import { AiOutlineGithub } from "react-icons/ai";

const Portfolio = () => {
  const portfoli = [
    {
      id: 1,
      title: "Notes Keeper",
      src: NotesApp,
      gitLink: "https://github.com/Raakshit/note_keeper",
      hostLink: "https://note-assignment.web.app/",
    },
    {
      id: 2,
      title: "Slack Clone",
      src: SlackClone,
      gitLink: "https://github.com/Raakshit/Slack-CLone",
      hostLink: "https://slack-clone-926b4.web.app/",
    },
    {
      id: 3,
      title: "Train Booking System",
      src: BookingSystem,
      gitLink: "https://github.com/Raakshit/Train__Booking",
      hostLink:
        "https://643fb7fcffd0f6008c5f6fac--fantastic-maamoul-bc88b1.netlify.app/",
    },
    // {
    //   id: 4,
    //   src: Demo1,
    // },
    // {
    //   id: 5,
    //   src: Demo1,
    // },
    // {
    //   id: 6,
    //   src: Demo1,
    // },
  ];

  return (
    <div
      name="projects"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Projects
          </p>
          <p className="py-6">Check out some of my work here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfoli.map((item) => (
            <div
              key={item.id}
              className="shadow-md shadow-gray-600 rounded-lg hover:scale-105 duration-300"
            >
              <img
                src={item.src}
                className="rounded-md overflow-hidden"
                alt=""
              />
              <p className="flex items-center justify-center text-xl font-medium py-2">
                {item.title}
              </p>
              <div className="flex items-center justify-around">
                <a 
                className="m-4 hover:text-gray-500"
                href={item.hostLink} target="_blank" rel="noreferrer">
                  <BsGlobe size={25} />
                </a>
                <a 
                className="m-4 hover:text-gray-500"
                href={item.gitLink} target="_blank" rel="noreferrer">
                  <AiOutlineGithub size={28} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
