import React from "react";
import { motion } from "framer-motion";
import { FiBookOpen, FiCalendar, FiAward } from "react-icons/fi";

const EducationCard = () => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
    className="h-full bg-gradient-to-br from-gray-900/80 to-gray-800/60 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 sm:p-8 shadow-xl hover:shadow-2xl transition-all duration-300"
  >
    <div className="flex items-center gap-4 mb-6">
      <div className="p-3 bg-gradient-to-br from-cyan-500/20 to-blue-600/20 rounded-xl border border-cyan-500/30">
        <FiBookOpen className="text-cyan-400 text-2xl" />
      </div>
      <h2 className="text-2xl sm:text-3xl font-bold text-white">
        Education
      </h2>
    </div>

    <div className="space-y-4">
      <div className="bg-gray-800/50 p-5 rounded-xl border border-gray-700/50 hover:border-cyan-500/30 transition-colors">
        <div className="flex items-start justify-between mb-3">
          <div>
            <h3 className="text-lg font-bold text-white mb-1">
              Bachelor of Computer Applications (BCA)
            </h3>
            <p className="text-cyan-400 font-semibold text-sm">
              Veer Narmad South Gujarat University
            </p>
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 text-sm text-gray-400">
          <div className="flex items-center gap-2">
            <FiCalendar className="text-cyan-400" />
            <span>Jun 2022 - Apr 2025</span>
          </div>
          <div className="flex items-center gap-2">
            <FiAward className="text-cyan-400" />
            <span>CGPA: <span className="text-cyan-400 font-semibold">8.34</span></span>
          </div>
        </div>

        <div className="mt-4 pt-4 border-t border-gray-700/50">
          <p className="text-sm text-gray-300">
            Focused on Computer Science fundamentals, software development, and database management. 
            Completed multiple projects demonstrating full-stack development capabilities.
          </p>
        </div>
      </div>
    </div>
  </motion.div>
);

export default EducationCard;
