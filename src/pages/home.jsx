import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import HeroSection from "../components/HeroSection.jsx";
import AboutCard from "../components/AboutCard.jsx";
import ExperienceSection from "../components/ExperienceSection.jsx";
import TechStackCard from "../components/TechStackCard.jsx";
import ProjectsCard from "../components/ProjectCard.jsx";
import EducationCard from "../components/EducationCard.jsx";
import CertificationCard from "../components/CertificationCard.jsx";
import ContactSection from "../components/ContactSection.jsx";

const Home = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const delay = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(delay);
  }, []);

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <div className="relative min-h-screen w-full bg-gradient-to-br from-[#0a0a0f] via-[#16151c] to-[#1a1a1f] text-white overflow-x-hidden">
      {/* Animated Background Blobs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-20 left-10 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-3xl"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 sm:pt-28 pb-8 sm:pb-12">
        {/* Hero Section */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-20 sm:mb-32"
        >
          <HeroSection />
        </motion.section>

        {/* About Section */}
        <motion.section
          {...fadeInUp}
          className="mb-20 sm:mb-32"
        >
          <AboutCard />
        </motion.section>

        {/* Experience Section */}
        <motion.section
          {...fadeInUp}
          className="mb-20 sm:mb-32"
        >
          <ExperienceSection />
        </motion.section>

        {/* Skills Section */}
        <motion.section
          {...fadeInUp}
          className="mb-20 sm:mb-32"
        >
          <TechStackCard />
        </motion.section>

        {/* Projects Section */}
        <motion.section
          {...fadeInUp}
          className="mb-20 sm:mb-32"
        >
          <ProjectsCard />
        </motion.section>

        {/* Education & Certifications */}
        <motion.section
          {...fadeInUp}
          className="mb-20 sm:mb-32 grid grid-cols-1 lg:grid-cols-2 gap-6"
        >
          <EducationCard />
          <CertificationCard />
        </motion.section>

        {/* Contact Section */}
        <motion.section
          {...fadeInUp}
          className="mb-12"
        >
          <ContactSection />
        </motion.section>
      </div>
    </div>
  );
};

export default Home;
