import React from "react";
import { motion } from "framer-motion";
import { FiUser } from "react-icons/fi";

const AboutCard = () => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
    className="relative"
  >
    <div className="mb-6">
      <h2 className="text-4xl sm:text-5xl font-bold mb-2">
        About <span className="text-cyan-400">Me</span>
      </h2>
      <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full"></div>
    </div>

    <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/60 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 sm:p-10 shadow-xl hover:shadow-2xl transition-all duration-300">
      <div className="flex items-start gap-4 mb-6">
        <div className="p-3 bg-cyan-500/20 rounded-xl">
          <FiUser className="text-cyan-400 text-2xl" />
        </div>
        <div className="flex-1">
          <p className="text-lg text-gray-300 leading-relaxed mb-4">
            I'm a <span className="text-cyan-400 font-semibold">Software Engineer</span> with a passion for building 
            clean, scalable, and impactful applications. With hands-on experience in full-stack development, 
            I specialize in creating modern web solutions using the MERN stack.
          </p>
          <p className="text-lg text-gray-300 leading-relaxed mb-4">
            Through my internship and real-world project experience, I've developed expertise in:
          </p>
          <ul className="space-y-2 text-gray-300">
            <li className="flex items-start gap-3">
              <span className="text-cyan-400 mt-1">▹</span>
              <span>Building responsive, user-friendly interfaces with React and modern CSS frameworks</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-cyan-400 mt-1">▹</span>
              <span>Designing robust backend architectures with Node.js and Express</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-cyan-400 mt-1">▹</span>
              <span>Implementing secure database solutions with MongoDB and SQL</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-cyan-400 mt-1">▹</span>
              <span>Integrating third-party APIs and payment gateways (Stripe)</span>
            </li>
          </ul>
          <p className="text-lg text-gray-300 leading-relaxed mt-4">
            I'm always eager to take on new challenges and contribute to innovative tech teams that value 
            clean code, best practices, and continuous learning.
          </p>
        </div>
      </div>
    </div>
  </motion.div>
);

export default AboutCard;
