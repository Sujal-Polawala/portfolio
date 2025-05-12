import { motion } from "framer-motion";
import AboutCard from "../components/AboutCard.jsx";
import NameCard from "../components/NameCard.jsx";
import ProjectsCard from "../components/ProjectCard.jsx";
import TechStackCard from "../components/TechStackCard.jsx";
import EducationCard from "../components/EducationCard.jsx";
import CertificationCard from "../components/CertificationCard.jsx";
import resume from "../resume/Sujal-Polawala-Software-Developer(1).pdf";
import avatarImage from "../assests/Sujal-Developer.png";
import { FiDownload } from "react-icons/fi";
import ContactButton from "../components/ContactButton.jsx";
import AboutCardSkeleton from "../skeletons/AboutCardSkeleton.jsx";
import ProjectsCardSkeleton from "../skeletons/ProjectsCardSkeleton.jsx";
import CertificationCardSkeleton from "../skeletons/CertificationCardSkeleton.jsx";
import EducationCardSkeleton from "../skeletons/EducationCardSkeleton.jsx";
import TechStackCardSkeleton from "../skeletons/TechStackCardSkeleton.jsx";
import NameCardSkeleton from "../skeletons/NameCardSkeleton.jsx";
import { useState, useEffect } from "react";
import { Tooltip } from "react-tooltip";

const Home = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const delay = setTimeout(() => setLoading(false), 2000); // simulate 2s loading
    return () => clearTimeout(delay);
  }, []);

  return (
    <div className="relative z-0 min-h-screen w-full bg-gradient-to-tr from-[#16151c] via-[#27203b] to-[#18181a] text-white flex flex-col items-center px-4 py-10 overflow-hidden">
      {/* Central Blobs */}
      <div className="absolute inset-0 flex justify-center items-center z-[-1]">
        <div className="absolute w-[300px] h-[300px] bg-[#ca2fdb] rounded-full blur-[140px] opacity-40 animate-float"></div>
        <div className="absolute w-[250px] h-[250px] bg-[#b038d4] rounded-full blur-[130px] opacity-30 animate-float delay-00"></div>
        <div className="absolute w-[200px] h-[200px] bg-[#a81ca3] rounded-full blur-[120px] opacity-20 animate-float delay-2000"></div>
      </div>

      {/* Main Content Section */}
      <div className="w-full max-w-7xl flex flex-col lg:flex-row items-start justify-between space-y-10 lg:space-y-0 gap-10">
        {/* Left Section */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center gap-6 w-full lg:w-1/4"
        >
          {loading ? (
            <>
              <AboutCardSkeleton />
              <div className="w-full h-12 bg-gray-700/60 animate-pulse rounded-xl mt-4"></div>
            </>
          ) : (
            <>
              <AboutCard />
              <div className="rounded-2xl bg-[#1f1f1f] p-5 shadow-lg transition duration-300 hover:shadow-2xl hover:-translate-y-1">
                <a href={resume} download className="py-3 my-7 font-sans">
                  <div className="flex items-center justify-between text-lg font-bold text-white">
                    <h2 className="text-lg font-bold font-serif">
                      My <span className="text-[#00f7ff]">Resume 📄</span>
                    </h2>
                    <div
                      data-tooltip-id="resume-tooltip"
                      data-tooltip-content="Download Resume"
                    >
                      <FiDownload className="text-[#00f7ff] text-xl hover:scale-110 transition-transform duration-200" />
                      <Tooltip id="resume-tooltip" place="top" effect="solid" />
                    </div>
                  </div>
                </a>
              </div>
            </>
          )}
        </motion.div>

        {/* Center Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center gap-6 w-full lg:w-1/4"
        >
          {loading ? (
            <>
              <div className="w-64 h-64 rounded-full bg-gray-700/60 animate-pulse"></div>
              <NameCardSkeleton />
              <div className="w-full h-12 bg-gray-700/60 animate-pulse rounded-xl mt-4"></div>
            </>
          ) : (
            <>
              <div className="relative p-4 border-1 rounded-3xl inline-block bg-gradient-to-tr from-[#16151c] via-[#27203b] to-[#18181a] bg-opacity-40 transform transition-transform duration-500 ease-in-out hover:translate-y-[-10px]">
                <div className="absolute inset-0 rounded-3xl bg-transparent bg-opacity-40"></div>
                <img
                  src={avatarImage}
                  alt="Profile Avatar"
                  className="w-64 h-64 object-cover rounded-full shadow-lg relative z-10"
                />
              </div>

              <NameCard />
              {/* <h1 className="text-4xl font-bold text-center">
            Hi, I'm <span className="text-[#7b68ee]">Sujal Polawala</span>
            </h1>
            <p className="text-gray-400 text-center max-w-md">
            Frontend Developer | Anime Lover | Tech Enthusiast
            </p> */}
              <ContactButton />
            </>
          )}
        </motion.div>

        {/* Projects and Tech Stack */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col gap-6 w-full lg:w-1/4"
        >
          {loading ? (
            <>
              <ProjectsCardSkeleton />
              <TechStackCardSkeleton />
            </>
          ) : (
            <>
              <ProjectsCard />
              <TechStackCard />
            </>
          )}
        </motion.div>

        {/* Education and Certification */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col gap-6 w-full lg:w-1/4"
        >
          {loading ? (
            <>
              <EducationCardSkeleton />
              <CertificationCardSkeleton />
            </>
          ) : (
            <>
              <EducationCard />
              <CertificationCard />
            </>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
