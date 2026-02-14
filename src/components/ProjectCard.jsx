import React from "react";
import { motion } from "framer-motion";
import { FiArrowUpRight, FiGithub, FiExternalLink } from "react-icons/fi";
import { Link } from "react-router-dom";
import projects from "../data/projects.jsx";

const ProjectsCard = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="relative"
    >
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h2 className="text-4xl sm:text-5xl font-bold mb-2">
            Featured <span className="text-cyan-400">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full"></div>
        </div>
        <Link
          to="/projects"
          className="hidden sm:flex items-center gap-2 px-6 py-3 bg-gray-800/80 border border-gray-700 rounded-xl hover:bg-gray-700/80 transition-all duration-300 text-cyan-400 hover:text-cyan-300 group"
        >
          <span className="font-semibold">View All</span>
          <FiArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
        {projects.map((project, index) => (
          <motion.div
            key={project.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group relative bg-gradient-to-br from-gray-900/80 to-gray-800/60 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden"
          >
            {/* Hover gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 to-blue-600/0 group-hover:from-cyan-500/10 group-hover:to-blue-600/10 transition-all duration-300"></div>

            <div className="relative z-10">
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                  {project.name}
                </h3>
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-gray-800/50 rounded-lg hover:bg-cyan-500/20 transition-colors"
                  onClick={(e) => e.stopPropagation()}
                >
                  <FiGithub className="text-gray-400 group-hover:text-cyan-400 transition-colors" />
                </a>
              </div>

              {/* Description */}
              <p className="text-gray-400 text-sm mb-4 line-clamp-3 leading-relaxed">
                {project.description || "A full-stack project showcasing modern web development practices."}
              </p>

              {/* Demo/Deployment Links */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.deployment && (
                  <a
                    href={project.deployment}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-3 py-1.5 bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 rounded-lg text-xs font-medium hover:bg-cyan-500/20 transition-colors"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <FiExternalLink className="text-xs" />
                    Live Demo
                  </a>
                )}
                {project.demos && project.demos.user && (
                  <a
                    href={project.demos.user}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-3 py-1.5 bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 rounded-lg text-xs font-medium hover:bg-cyan-500/20 transition-colors"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <FiExternalLink className="text-xs" />
                    User Demo
                  </a>
                )}
                {project.demos && project.demos.admin && (
                  <a
                    href={project.demos.admin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-3 py-1.5 bg-blue-500/10 border border-blue-500/30 text-blue-400 rounded-lg text-xs font-medium hover:bg-blue-500/20 transition-colors"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <FiExternalLink className="text-xs" />
                    Admin Demo
                  </a>
                )}
              </div>

              {/* Credentials */}
              {project.Credentials && project.Credentials.admin && (
                <div className="mt-4 p-3 bg-gray-800/50 rounded-lg border border-gray-700/50">
                  <p className="text-xs text-gray-500 mb-1">Admin Credentials:</p>
                  <p className="text-xs text-gray-400">
                    <span className="text-gray-300">Username:</span> {project.Credentials.admin.username}
                  </p>
                  <p className="text-xs text-gray-400">
                    <span className="text-gray-300">Password:</span> {project.Credentials.admin.password}
                  </p>
                </div>
              )}

              {/* View Project Link */}
              <div className="mt-4 pt-4 border-t border-gray-700/50">
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-cyan-400 hover:text-cyan-300 font-medium group/link"
                  onClick={(e) => e.stopPropagation()}
                >
                  View Repository
                  <FiArrowUpRight className="group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform" />
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Mobile View All Button */}
      <Link
        to="/projects"
        className="sm:hidden flex items-center justify-center gap-2 w-full px-6 py-3 bg-gray-800/80 border border-gray-700 rounded-xl hover:bg-gray-700/80 transition-all duration-300 text-cyan-400 hover:text-cyan-300 group"
      >
        <span className="font-semibold">View All Projects</span>
        <FiArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
      </Link>
    </motion.div>
  );
};

export default ProjectsCard;
