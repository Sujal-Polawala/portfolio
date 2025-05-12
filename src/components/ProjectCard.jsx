import React from "react";
import { FiArrowUpRight } from "react-icons/fi";
import { Tooltip } from "react-tooltip";
import { Link } from "react-router-dom"; // ✅ Import Link
import projects from "../data/projects.jsx";

const ProjectsCard = () => (
  <div className="rounded-2xl bg-[#1f1f1f] p-6 shadow-lg mb-2 transition duration-300 hover:shadow-2xl hover:-translate-y-1">
    <div className="flex items-center justify-between mb-4">
      <h2 className="text-lg font-bold text-white">
        My <span className="text-[#00f7ff]">Projects</span>
      </h2>

      {/* ✅ Link wraps the icon */}
      <Link to="/projects" data-tooltip-id="proj-tooltip" data-tooltip-content="Projects List">
        <FiArrowUpRight className="text-[#00f7ff] text-xl hover:scale-110 transition-transform duration-200" />
      </Link>
      <Tooltip id="proj-tooltip" place="top" effect="solid" />
    </div>

    <ul className="flex flex-col gap-3">
      {projects.map((project, index) => (
        <li
          key={project.name}
          className="flex flex-col group border-b border-gray-700 pb-2"
          data-tooltip-id={`project-tooltip-${index}`}
          data-tooltip-content={project.description}
        >
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-sm md:text-base text-white hover:text-[#00f7ff] transition"
          >
            {project.name}
          </a>
          <Tooltip id={`project-tooltip-${index}`} place="top" effect="solid" />
        </li>
      ))}
    </ul>
  </div>
);

export default ProjectsCard;
