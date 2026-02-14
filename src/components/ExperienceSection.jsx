import React from "react";
import { motion } from "framer-motion";
import { FiBriefcase, FiCalendar, FiMapPin } from "react-icons/fi";
import experience from "../data/experience.jsx";

const ExperienceSection = () => {
  if (!experience || experience.length === 0) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative"
      >
        <div className="mb-6">
          <h2 className="text-4xl sm:text-5xl font-bold mb-2">
            Experience <span className="text-cyan-400">Timeline</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full"></div>
        </div>
        <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/60 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 text-center">
          <p className="text-gray-400">Experience details coming soon...</p>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="relative"
    >
      <div className="mb-6">
        <h2 className="text-4xl sm:text-5xl font-bold mb-2">
          Experience <span className="text-cyan-400">Timeline</span>
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full"></div>
      </div>

      <div className="space-y-6">
        {experience.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="relative bg-gradient-to-br from-gray-900/80 to-gray-800/60 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 sm:p-8 shadow-xl hover:shadow-2xl transition-all duration-300 group"
          >
            {/* Timeline connector */}
            {index < experience.length - 1 && (
              <div className="absolute left-8 top-full w-0.5 h-6 bg-gradient-to-b from-cyan-500/50 to-transparent"></div>
            )}

            <div className="flex flex-col sm:flex-row gap-6">
              {/* Left: Icon */}
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500/20 to-blue-600/20 rounded-xl flex items-center justify-center border border-cyan-500/30 group-hover:scale-110 transition-transform">
                  <FiBriefcase className="text-cyan-400 text-2xl" />
                </div>
              </div>

              {/* Right: Content */}
              <div className="flex-1 space-y-4">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">{exp.role}</h3>
                  <div className="flex flex-wrap items-center gap-4 text-gray-400 text-sm sm:text-base">
                    <div className="flex items-center gap-2">
                      <FiBriefcase className="text-cyan-400" />
                      <span className="text-cyan-400 font-semibold">{exp.company}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <FiCalendar className="text-cyan-400" />
                      <span>{exp.duration}</span>
                    </div>
                    {exp.location && (
                      <div className="flex items-center gap-2">
                        <FiMapPin className="text-cyan-400" />
                        <span>{exp.location}</span>
                      </div>
                    )}
                  </div>
                </div>

                {exp.description && exp.description.length > 0 && (
                  <ul className="space-y-2">
                    {exp.description.map((point, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-gray-300">
                        <span className="text-cyan-400 mt-1.5">▹</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {exp.technologies && exp.technologies.length > 0 && (
                  <div className="pt-2">
                    <p className="text-sm text-gray-400 mb-2">Technologies:</p>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 rounded-full text-xs font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default ExperienceSection;

