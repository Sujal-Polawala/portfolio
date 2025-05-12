import React from "react";
import techIcons from "../assests/techIcons";
import { FiCpu } from "react-icons/fi";
import { Tooltip } from "react-tooltip";

const TechStackCard = () => (
  <div className="rounded-2xl bg-[#1f1f1f] p-5 shadow-lg transition duration-300 hover:shadow-2xl hover:-translate-y-1">
    <div className="flex items-center justify-between">
      <h2 className="text-lg font-bold text-white">Tech <span className="text-[#00f7ff]">Stack</span></h2>
      <div data-tooltip-id="tech-tooltip" data-tooltip-content="Tech Stack">
      <FiCpu className="text-[#00f7ff] text-xl hover:scale-110 transition-transform duration-200 hover:cursor-pointer" />
        <Tooltip id="tech-tooltip" place="top" effect="solid" />
        </div>
    </div>
    <div className="flex flex-wrap gap-4">
      {techIcons.map((icon, index) => (
        <div
          key={index}
          data-tooltip-id={`tooltip-${index}`}
          data-tooltip-content={icon.name}
          className="transition-transform duration-200 hover:scale-110"
        >
          <img
            src={icon.src}
            alt={icon.name}
            className="w-8 h-8"
          />
          <Tooltip id={`tooltip-${index}`} place="top" effect="solid" />
        </div>
      ))}
    </div>
  </div>
);

export default TechStackCard;