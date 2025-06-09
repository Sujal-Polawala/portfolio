import React from "react";
import { FiArrowUpRight } from "react-icons/fi";
import { Tooltip } from "react-tooltip";
import { Link } from "react-router-dom";
import projects from "../data/projects.jsx";

const ProjectsCard = () => {
  return (
    <div className="rounded-2xl bg-[#111111] p-6 shadow-xl mb-4 transition duration-300 hover:shadow-2xl hover:-translate-y-1 border border-gray-800">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-semibold text-white tracking-tight">
          My <span className="text-[#00f7ff]">Projects</span>
        </h2>
        <Link
          to="/projects"
          data-tooltip-id="proj-tooltip"
          data-tooltip-content="View All Projects"
        >
          <FiArrowUpRight className="text-[#00f7ff] text-2xl hover:scale-110 transition-transform duration-200" />
        </Link>
        <Tooltip id="proj-tooltip" place="top" effect="solid" />
      </div>

      {/* Projects List */}
      <div className="space-y-5">
        {projects.map((project) => (
          <div
            key={project.name}
            className="border border-gray-700 rounded-xl p-4 hover:border-[#00f7ff] transition-all duration-200"
          >
            {/* Project Title */}
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg font-bold text-white hover:text-[#00f7ff] transition"
            >
              {project.name}
            </a>

            {/* Description */}
            {project.description && (
              <p className="text-sm text-gray-400 mt-1">{project.description}</p>
            )}

            {/* Demo Links */}
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

            {/* Credentials */}
            {project.Credentials && (
              <div className="mt-3 text-xs text-gray-300 space-y-1">
                {project.Credentials.admin && (
                  <p>
                    <span className="text-white font-medium">Admin Login:</span>{" "}
                    {project.Credentials.admin.username} /{" "}
                    {project.Credentials.admin.password}
                  </p>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsCard;
