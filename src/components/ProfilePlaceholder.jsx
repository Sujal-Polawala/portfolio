// import React from "react";

// const ProfilePlaceholder = () => (
//   <div className="rounded-2xl bg-[#222028]/90 p-6 shadow-md text-center text-base transition hover:shadow-xl hover:-translate-y-1 duration-300">
//     <div className="text-lg font-semibold mb-2">Sujal Polawala</div>
//     <p className="text-sm opacity-70">
//       A MERN Stack Developer passionate about creating scalable web applications with smooth user experiences. Always exploring new tech, with a focus on full-stack development, APIs, and clean UI design.
//     </p>
//   </div>
// );

// export default ProfilePlaceholder;
import React from "react";
// import profileImage from "../assets/profile.jpg"; // 👈 put your image in src/assets/

const ProfilePlaceholder = () => (
  <div className="rounded-2xl bg-[#222028]/90 p-6 shadow-md text-center transition hover:shadow-xl hover:-translate-y-1 duration-300">
    {/* <img
      src={profileImage}
      alt="Sujal Polawala"
      className="w-24 h-24 md:w-28 md:h-28 rounded-full mx-auto mb-4 border-4 border-[#32b2c7] shadow-lg"
    /> */}
    <h2 className="text-lg font-semibold mb-1">Sujal Polawala</h2>
    <p className="text-sm text-white/70">
      MERN Stack Developer with a focus on building seamless, secure, and scalable full-stack applications.
    </p>
  </div>
);

export default ProfilePlaceholder;