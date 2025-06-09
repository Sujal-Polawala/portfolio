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
      <Link
        to="/projects"
        data-tooltip-id="proj-tooltip"
        data-tooltip-content="Projects List"
      >
        <FiArrowUpRight className="text-[#00f7ff] text-xl hover:scale-110 transition-transform duration-200" />
      </Link>
      <Tooltip id="proj-tooltip" place="top" effect="solid" />
    </div>

    <ul className="flex flex-col gap-3">
      {projects.map((project) => (
        <li
          key={project.name}
          className="flex flex-col group border-b border-gray-700 pb-2"
        >
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-sm md:text-base text-white hover:text-[#00f7ff] transition"
          >
            {project.name}
          </a>
          {project.description && (
            <p className="text-xs text-gray-400 mt-1 line-clamp-2">
              {project.description}
            </p>
          )}

          {/* ✅ Conditional Demo Links */}
          {project.demos && (
            <div className="mt-3 flex flex-wrap gap-3">
              {project.demos.user && (
                <a
                  href={project.demos.user}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs bg-[#00f7ff] text-black px-2 py-1 rounded hover:bg-[#0ff] transition"
                >
                  User Demo
                </a>
              )}
              {project.demos.admin && (
                <a
                  href={project.demos.admin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs bg-[#00f7ff] text-black px-2 py-1 rounded hover:bg-[#0ff] transition"
                >
                  Admin/Seller Demo
                </a>
              )}
            </div>
          )}
          {project.Credentials && (
            <div className="mt-1 text-xs text-gray-400">
              {project.Credentials.admin && (
                <p>
                  <span className="text-white">Admin Login:</span>{" "}
                  {project.Credentials.admin.username} /{" "}
                  {project.Credentials.admin.password}
                </p>
              )}
            </div>
          )}
        </li>
      ))}
    </ul>
  </div>
);

export default ProjectsCard;
