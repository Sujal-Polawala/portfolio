import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FiDownload, FiArrowRight, FiMail } from "react-icons/fi";
import resume from "../resume/Sujal-Polawala-Software-Developer.pdf";
import avatarImage from "../assests/Sujal-Developer.png";

const HeroSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section className="min-h-[85vh] flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
      {/* Left Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="flex-1 space-y-6 lg:space-y-8"
      >
        <motion.div variants={itemVariants} className="space-y-4">
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="text-cyan-400 font-semibold text-lg sm:text-xl tracking-wide"
          >
            👋 Hi, I'm
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight"
          >
            <span className="bg-gradient-to-r from-white via-cyan-100 to-cyan-400 bg-clip-text text-transparent">
              Sujal Polawala
            </span>
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-gray-300"
          >
            Software Engineer
          </motion.div>
        </motion.div>

        <motion.p
          variants={itemVariants}
          className="text-lg sm:text-xl text-gray-400 max-w-2xl leading-relaxed"
        >
          Building scalable, full-stack applications with modern technologies. 
          Passionate about clean code, problem-solving, and creating impactful digital experiences.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-wrap gap-4 pt-4"
        >
          <Link
            to="/projects"
            className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-xl overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/50 hover:scale-105"
          >
            <span className="relative z-10 flex items-center gap-2">
              View Projects
              <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-blue-700 opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </Link>

          <a
            href={resume}
            download
            className="group px-8 py-4 bg-gray-800/80 backdrop-blur-sm border border-gray-700 text-white font-semibold rounded-xl hover:bg-gray-700/80 transition-all duration-300 hover:scale-105 flex items-center gap-2"
          >
            <FiDownload />
            Download Resume
          </a>

          <a
            href="mailto:sujalpolawala@gmail.com"
            className="group px-8 py-4 bg-transparent border-2 border-cyan-500 text-cyan-400 font-semibold rounded-xl hover:bg-cyan-500/10 transition-all duration-300 hover:scale-105 flex items-center gap-2"
          >
            <FiMail />
            Contact Me
          </a>
        </motion.div>
      </motion.div>

      {/* Right Image */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="flex-1 flex justify-center lg:justify-end"
      >
        <div className="relative">
          {/* Glow effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/30 to-blue-500/30 rounded-full blur-3xl animate-pulse"></div>
          
          {/* Image container */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="relative z-10"
          >
            <div className="relative p-2 bg-gradient-to-br from-cyan-500/20 to-blue-600/20 rounded-full backdrop-blur-sm">
              <img
                src={avatarImage}
                alt="Sujal Polawala - Software Engineer"
                className="w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 object-cover rounded-full border-4 border-cyan-500/30 shadow-2xl"
              />
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
