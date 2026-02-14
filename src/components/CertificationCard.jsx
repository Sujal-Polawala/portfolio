import React from "react";
import { motion } from "framer-motion";
import { FiAward, FiCalendar } from "react-icons/fi";

const certifications = [
  {
    title: "1st Place at IT Buzz",
    issuer: "MindStrom",
    date: "Jan 2025",
    type: "award",
    icon: "🏆"
  },
  {
    title: "JavaScript (Intermediate)",
    issuer: "HackerRank",
    date: "Apr 2025",
    type: "certification"
  },
  {
    title: "SQL (Basic)",
    issuer: "HackerRank",
    date: "Jun 2024",
    type: "certification"
  }
];

const CertificationCard = () => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
    className="h-full bg-gradient-to-br from-gray-900/80 to-gray-800/60 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 sm:p-8 shadow-xl hover:shadow-2xl transition-all duration-300"
  >
    <div className="flex items-center gap-4 mb-6">
      <div className="p-3 bg-gradient-to-br from-cyan-500/20 to-blue-600/20 rounded-xl border border-cyan-500/30">
        <FiAward className="text-cyan-400 text-2xl" />
      </div>
      <h2 className="text-2xl sm:text-3xl font-bold text-white">
        Awards & <span className="text-cyan-400">Certifications</span>
      </h2>
    </div>

    <div className="space-y-4">
      {certifications.map((cert, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="bg-gray-800/50 p-5 rounded-xl border border-gray-700/50 hover:border-cyan-500/30 transition-all duration-300 group"
        >
          <div className="flex items-start gap-4">
            <div className="p-2 bg-gradient-to-br from-cyan-500/20 to-blue-600/20 rounded-lg border border-cyan-500/30 group-hover:scale-110 transition-transform">
              {cert.type === "award" ? (
                <span className="text-2xl">{cert.icon}</span>
              ) : (
                <FiAward className="text-cyan-400 text-xl" />
              )}
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-bold text-white mb-1">
                {cert.title}
              </h3>
              <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 text-sm text-gray-400">
                <div className="flex items-center gap-2">
                  <span className="text-cyan-400">{cert.issuer}</span>
                </div>
                <div className="flex items-center gap-2">
                  <FiCalendar className="text-cyan-400" />
                  <span>{cert.date}</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  </motion.div>
);

export default CertificationCard;
