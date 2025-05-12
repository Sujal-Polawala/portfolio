import React from "react";
import { FiBookOpen } from "react-icons/fi";
import { Tooltip } from "react-tooltip";

const EducationCard = () => (
  <div className="rounded-2xl bg-[#1f1f1f] p-5 shadow-lg transition duration-300 hover:shadow-2xl hover:-translate-y-1">
    <div className="flex items-center justify-between mb-4">
      <h2 className="text-lg font-bold text-white">My <span className="text-[#00f7ff]">Education</span></h2>
      <div data-tooltip-id="edu-tooltip" data-tooltip-content="Education Background">
        <FiBookOpen className="text-[#00f7ff] text-xl hover:scale-110 transition-transform duration-200 hover:cursor-pointer" />
        <Tooltip id="edu-tooltip" place="top" effect="solid" />
      </div>
    </div>
    <div className="bg-[#23202b]/85 p-4 rounded-xl border border-[#2c2c3b]">
      <div className="text-white font-semibold text-sm">Veer Narmad South Gujarat University</div>
      <div className="text-xs text-gray-400">Jun 2022 - Apr 2025</div>
      <div className="text-xs text-gray-400">BCA (Computer Science), CGPA: 8.34</div>
    </div>
  </div>
);

export default EducationCard;