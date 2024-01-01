import React from "react";
import aditya from "../assets/aditya.jpeg";
import winjit from "../assets/winjit.jpeg";


const Experience = () => {
    const techs = [
        {
            id: 1,
            src: aditya,
            title: "Data Science Intern",
            style: "shadow-red-500",
          },
          {
            id: 2,
            src: winjit,
            title: "Software Development Intern",
            style: "shadow-blue-500",
          },
    ];

    return (
        <div
        name="experience"
        className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
      >
        <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
          <div>
            <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
              Experience
            </p>
            <p className="py-6">My Professional Experience</p>
          </div>
  
          <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
            {techs.map(({ id, src, title, style }) => (
              <div
                key={id}
                className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
              >
                <img src={src} alt="" className="w-20 mx-auto" />
                <p className="mt-4">{title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
};

export default Experience;