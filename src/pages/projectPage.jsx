import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import ProjectCardSkeleton from "../skeletons/ProjectCardSkeleton";
import Breadcrumbs from "../components/Breadcrumbs/Breadcrumbs";
import { FiGithub, FiExternalLink, FiFolder } from "react-icons/fi";

const CACHE_KEY = "githubProjects";
const CACHE_TIMESTAMP_KEY = "githubProjectsTimestamp";
const CACHE_EXPIRY_HOURS = 24;

const ProjectsPage = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const Link = import.meta.env.VITE_GITHUB_LINK;

  useEffect(() => {
    const now = new Date().getTime();
    const cachedProjects = localStorage.getItem(CACHE_KEY);
    const cachedTimestamp = localStorage.getItem(CACHE_TIMESTAMP_KEY);

    const isCacheValid =
      cachedProjects &&
      cachedTimestamp &&
      now - parseInt(cachedTimestamp) < CACHE_EXPIRY_HOURS * 60 * 60 * 1000;

    if (isCacheValid) {
      setProjects(JSON.parse(cachedProjects));
      setLoading(false);
    } else {
      const fetchProjects = async () => {
        try {
          const response = await fetch(Link);
          if (!response.ok) throw new Error("Failed to fetch");
          const data = await response.json();
          setProjects(data);
          localStorage.setItem(CACHE_KEY, JSON.stringify(data));
          localStorage.setItem(CACHE_TIMESTAMP_KEY, now.toString());
        } catch (error) {
          console.error("Error fetching GitHub repos:", error);
        } finally {
          setLoading(false);
        }
      };

      fetchProjects();
    }
  }, [Link]);

  return (
    <section className="min-h-screen bg-gradient-to-br from-[#0a0a0f] via-[#16151c] to-[#1a1a1f] text-white px-4 sm:px-6 lg:px-8 pt-24 sm:pt-28 pb-8 sm:pb-12">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto mb-8">
        <Breadcrumbs />
      </div>

      {/* Header */}
      <div className="max-w-7xl mx-auto mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <FiFolder className="text-cyan-400 text-3xl" />
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold">
              My <span className="text-cyan-400">Projects</span>
            </h1>
          </div>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full mx-auto mb-4"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A collection of my work showcasing full-stack development, modern technologies, and problem-solving skills.
          </p>
        </motion.div>
      </div>

      {/* Projects Grid */}
      <div className="max-w-7xl mx-auto">
        {loading ? (
          <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {[...Array(8)].map((_, index) => (
              <ProjectCardSkeleton key={index} />
            ))}
          </div>
        ) : projects.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-gray-400 text-lg">No projects found.</p>
          </div>
        ) : (
          <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative bg-gradient-to-br from-gray-900/80 to-gray-800/60 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden"
              >
                {/* Hover gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 to-blue-600/0 group-hover:from-cyan-500/10 group-hover:to-blue-600/10 transition-all duration-300"></div>

                <div className="relative z-10 flex flex-col h-full">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors line-clamp-2 flex-1">
                      {project.name}
                    </h3>
                    <a
                      href={project.html_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-gray-800/50 rounded-lg hover:bg-cyan-500/20 transition-colors ml-2 flex-shrink-0"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <FiGithub className="text-gray-400 group-hover:text-cyan-400 transition-colors" />
                    </a>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-gray-400 mb-4 line-clamp-3 min-h-[60px] leading-relaxed flex-1">
                    {project.description || "No description available."}
                  </p>

                  {/* Footer */}
                  <div className="mt-auto pt-4 border-t border-gray-700/50 flex items-center justify-between">
                    <a
                      href={project.html_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg text-sm font-medium hover:shadow-lg hover:shadow-cyan-500/50 transition-all group/link"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <span>View Repo</span>
                      <FiExternalLink className="group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform" />
                    </a>
                    {project.language && (
                      <span className="bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs px-3 py-1 rounded-full font-medium">
                        {project.language}
                      </span>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectsPage;
