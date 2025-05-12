import React, { useEffect, useState } from "react";
import ProjectCardSkeleton from "../skeletons/ProjectCardSkeleton";
import Breadcrumbs from "../components/Breadcrumbs/Breadcrumbs"; // Adjust the import path as necessary

const CACHE_KEY = "githubProjects";
const CACHE_TIMESTAMP_KEY = "githubProjectsTimestamp";
const CACHE_EXPIRY_HOURS = 24;

const ProjectsPage = () => {
  const [projects, setProjects] = useState([]);
  const Link = import.meta.env.GITHUB_LINK

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
    } else {
      const fetchProjects = async () => {
        try {
          const response = await fetch(
            Link
          );
          if (!response.ok) throw new Error("Failed to fetch");
          const data = await response.json();
          setProjects(data);
          localStorage.setItem(CACHE_KEY, JSON.stringify(data));
          localStorage.setItem(CACHE_TIMESTAMP_KEY, now.toString());
        } catch (error) {
          console.error("Error fetching GitHub repos:", error);
        }
      };

      fetchProjects();
    }
  }, []);

  return (
    <section className="min-h-screen bg-gradient-to-br from-[#0f0f0f] via-[#1a1a1a] to-[#0f0f0f] text-white px-4 sm:px-8 md:px-16 py-14">
      {/* Breadcrumb */}
      <Breadcrumbs />

      <h1 className="text-4xl md:text-5xl font-extrabold text-center mb-10 tracking-wide text-cyan-400 drop-shadow">
        My Projects
      </h1>

      <div className="h-[calc(100vh-200px)] overflow-y-auto custom-scrollbar">
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {projects.length === 0 ? (
            <>
              {[...Array(8)].map((_, index) => (
                <ProjectCardSkeleton key={index} />
              ))}
            </>
          ) : (
            projects.map((project) => (
              <div
                key={project.id}
                className="bg-[#1e1e1e] border border-[#2e2e2e] hover:border-cyan-400 transition-all duration-300 rounded-2xl p-6 shadow-md hover:shadow-cyan-500/20 flex flex-col justify-between"
              >
                <div>
                  <h3 className="text-xl font-bold text-cyan-300 truncate">
                    {project.name}
                  </h3>
                  <p className="text-sm text-gray-400 mt-2 line-clamp-3 min-h-[60px]">
                    {project.description || "No description available."}
                  </p>
                </div>

                <div className="mt-4 flex justify-between items-center">
                  <a
                    href={project.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-cyan-600 hover:bg-cyan-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition"
                  >
                    View Repo
                  </a>
                  {project.language && (
                    <span className="bg-[#333] text-cyan-300 text-xs px-3 py-1 rounded-full">
                      {project.language}
                    </span>
                  )}
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
};

export default ProjectsPage;
