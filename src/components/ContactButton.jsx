import React from "react";

const ContactButton = () => (
  <a
    href="mailto:sujalpolawala@gmail.com"
    className="rounded-2xl bg-gray-700/85 py-4 font-semibold shadow flex items-center justify-between px-4 hover:bg-gray-600/90 duration-200 hover:scale-105 transition-transform text-base"
    onClick={(e) => {
      // Prevent React Router from handling this as a route change
      e.stopPropagation();
    }}
  >
    Contact Me <span className="ml-2 text-lg">📩</span>
  </a>
);

export default ContactButton;