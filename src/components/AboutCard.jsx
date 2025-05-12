import React from "react";
import { FiArrowUpRight } from "react-icons/fi";
import { Tooltip } from "react-tooltip";

const AboutCard = () => (
  <div className="relative bg-black/30 p-5 rounded-2xl w-full shadow-md transform transition-transform duration-500 ease-in-out hover:-translate-y-2">
    <div className="flex items-center justify-between mb-4">
    <h2 className="text-lg font-semibold">
      About <span className="text-[#00f7ff]">Me</span>
    </h2>
    <div data-tooltip-id="about-tooltip" data-tooltip-content="About Me" >
        <FiArrowUpRight className="text-[#00f7ff] text-xl hover:scale-110 transition-transform duration-200 hover:cursor-pointer" />
        <Tooltip id="about-tooltip" place="top" effect="solid" />
      </div>
    </div>
    <p className="text-sm text-gray-300 mt-0.5">
      I am a BCA Fresher with a strong passion for software development and problem solving.
      I’ve learned core concepts of programming, web development, and databases through academic projects.
      Currently exploring technologies like React, JavaScript, Python, and SQL.
      I’m eager to grow my skills and contribute to innovative tech teams.
    </p>
  </div>
);

export default AboutCard;