import React from "react";

const CertificationCard = () => (
  <div className="rounded-2xl bg-[#222028]/90 p-6 shadow transition hover:shadow-xl hover:-translate-y-1 duration-300">
    <h2 className="text-lg font-bold">
      Awards & <span className="text-[#00f7ff]">Certifications</span>
    </h2>
    <div className="bg-[#23202b]/85 p-3 rounded border border-[#25253b]">
        <div className="font-bold text-white/90">🏆 1st place at IT Buzz</div>
        <div className="text-xs opacity-80">MindStrom • Jan 2025</div>
      </div>
    <div className="flex flex-col gap-3 mt-3 text-sm">
      <div className="bg-[#23202b]/85 p-3 rounded border border-[#25253b]">
        <div className="font-bold text-white/90">JavaScript (Intermediate)</div>
        <div className="text-xs opacity-80">HackerRank • Apr 2025</div>
      </div>
      <div className="bg-[#23202b]/85 p-3 rounded border border-[#25253b]">
        <div className="font-bold text-white/90">SQL (Basic)</div>
        <div className="text-xs opacity-80">HackerRank • Jun 2024</div>
      </div>
    </div>
  </div>
);

export default CertificationCard;
