// HeroSection.jsx
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="flex flex-col justify-center items-start gap-6 px-6 md:px-10 py-8 bg-[#141218] text-white">
      <h1 className="text-4xl md:text-6xl font-bold leading-tight w-full max-w-4xl">
        Hi, I'm <span className="text-[#32b2c7]">Sujal Polawala</span>
      </h1>
      <p className="text-lg md:text-xl max-w-xl text-gray-300">
        MERN Stack Developer | Building seamless, secure, and scalable full-stack applications with a love for clean UI and strong backend logic.
      </p>
      <Link
        to="/projects"
        className="mt-4 inline-block bg-[#32b2c7] text-white px-6 py-2 rounded-xl font-medium group hover:bg-[#2ea1b4] transition"
      >
        View Projects
        <span className="group-hover:text-[#FF6347]"> →</span>
      </Link>
    </section>
  );
};

export default HeroSection;
