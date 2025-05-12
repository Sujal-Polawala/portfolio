import React from "react";
import { FiArrowUpRight } from "react-icons/fi";
import { Tooltip } from "react-tooltip";

const NameCard = () => (
  <div className="rounded-2xl bg-[#222028]/90 p-6 shadow-md transition hover:shadow-xl hover:-translate-y-1 duration-300">
    <div className="flex items-center justify-between mb-4">
      <h2 className="text-lg font-bold">
      Sujal <span className="font-bold text-[#00f7ff]"> Polawala</span>
      </h2>
      <div data-tooltip-id="name-tooltip" data-tooltip-content="Sujal Polawala">
            {/* <span className="flex items-center gap-2 font-semibold tracking-wide text-xs text-[#32b2c7]"> */}
              <FiArrowUpRight className="text-[#00f7ff] text-xl hover:scale-110 transition-transform duration-200 hover:cursor-pointer" />
              <Tooltip id="name-tooltip" place="top" effect="solid" />
            {/* </span> */}
          </div>
    </div>
    <p className="text-sm opacity-90">
      Software / Full Stack / MERN Stack / React JS Developer
    </p>
  </div>
);

export default NameCard;
