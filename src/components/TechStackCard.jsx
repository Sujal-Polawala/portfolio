import React from "react";
import { motion } from "framer-motion";
import { FiCode, FiDatabase, FiServer, FiTool } from "react-icons/fi";
import techIcons from "../assests/techIcons";

const TechStackCard = () => {
  // Categorize skills
  const categories = {
    frontend: {
      title: "Frontend",
      icon: <FiCode className="text-2xl" />,
      skills: ["ReactJS", "Angular", "HTML", "CSS"]
    },
    backend: {
      title: "Backend",
      icon: <FiServer className="text-2xl" />,
      skills: ["NodeJS", "ExpressJS"]
    },
    database: {
      title: "Database",
      icon: <FiDatabase className="text-2xl" />,
      skills: ["MongoDB", "SQL"]
    },
    tools: {
      title: "Tools & Technologies",
      icon: <FiTool className="text-2xl" />,
      skills: ["Git", "GitHub", "Postman", "VS Code"]
    }
  };

  const getIconForSkill = (skillName) => {
    // Map skill names to icon names
    const skillMap = {
      "ReactJS": "ReactJS",
      "React": "ReactJS",
      "Angular": "Angular",
      "HTML": "HTML",
      "CSS": "CSS",
      "NodeJS": "NodeJS",
      "Node": "NodeJS",
      "ExpressJS": "ExpressJS",
      "Express": "ExpressJS",
      "MongoDB": "MongoDB",
      "SQL": "SQL",
      "Git": "Git",
      "GitHub": "GitHub",
      "Postman": "Postman",
      "VS Code": "VS Code"
    };
    
    const mappedName = skillMap[skillName] || skillName;
    return techIcons.find(icon => 
      icon.name.toLowerCase() === mappedName.toLowerCase() ||
      mappedName.toLowerCase().includes(icon.name.toLowerCase()) ||
      icon.name.toLowerCase().includes(mappedName.toLowerCase())
    );
  };

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
          Skills & <span className="text-cyan-400">Technologies</span>
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {Object.entries(categories).map(([key, category], index) => {
          const categoryIcon = getIconForSkill(category.skills[0]);
          
          return (
            <motion.div
              key={key}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gradient-to-br from-gray-900/80 to-gray-800/60 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 group"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-gradient-to-br from-cyan-500/20 to-blue-600/20 rounded-xl border border-cyan-500/30 group-hover:scale-110 transition-transform">
                  <div className="text-cyan-400">
                    {category.icon}
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-white">{category.title}</h3>
              </div>

              <div className="flex flex-wrap gap-4">
                {category.skills.map((skill, idx) => {
                  const icon = getIconForSkill(skill);
                  return (
                    <motion.div
                      key={idx}
                      whileHover={{ scale: 1.1, y: -5 }}
                      className="flex flex-col items-center gap-2 p-3 bg-gray-800/50 rounded-xl border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300 group/item"
                    >
                      {icon ? (
                        <img
                          src={icon.src}
                          alt={icon.name}
                          className="w-10 h-10 group-hover/item:scale-110 transition-transform"
                        />
                      ) : (
                        <div className="w-10 h-10 bg-gray-700 rounded flex items-center justify-center">
                          <span className="text-xs text-gray-400">{skill.charAt(0)}</span>
                        </div>
                      )}
                      <span className="text-sm text-gray-300 font-medium">{skill}</span>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
};

export default TechStackCard;
