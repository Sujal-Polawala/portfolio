// // CustomCursor.jsx
// import React, { useState, useEffect } from 'react';

// const CustomCursor = () => {
//   const [cursorType, setCursorType] = useState('default'); // Track cursor type (default or clicked)

//   const handleMouseMove = (e) => {
//     const cursor = document.querySelector('.custom-cursor');
//     if (cursor) {
//       cursor.style.top = `${e.clientY}px`;
//       cursor.style.left = `${e.clientX}px`;
//     }
//   };

//   const handleMouseDown = () => {
//     setCursorType('clicked'); // Change cursor type when mouse is clicked
//   };

//   const handleMouseUp = () => {
//     setCursorType('default'); // Reset cursor type when mouse button is released
//   };

//   // Add event listeners for mouse events
//   useEffect(() => {
//     document.addEventListener('mousemove', handleMouseMove);
//     document.addEventListener('mousedown', handleMouseDown);
//     document.addEventListener('mouseup', handleMouseUp);

//     // Remove the default cursor by applying cursor: none to body
//     document.body.style.cursor = 'none';

//     // Cleanup the event listeners and reset cursor on unmount
//     return () => {
//       document.removeEventListener('mousemove', handleMouseMove);
//       document.removeEventListener('mousedown', handleMouseDown);
//       document.removeEventListener('mouseup', handleMouseUp);
//       document.body.style.cursor = ''; // Reset to default cursor
//     };
//   }, []);

//   return (
//     <div
//       className={`custom-cursor absolute rounded-full ${cursorType === 'clicked' ? 'bg-[#32b2c7]' : 'bg-[#FF6347]'} transition-all duration-200 ease-out transform -translate-x-1/2 -translate-y-1/2`}
//       style={{
//         width: '30px', // Medium size cursor
//         height: '30px',
//         pointerEvents: 'none', // Prevent the custom cursor from interacting with elements
//         zIndex: 9999, // Ensure it stays above other elements
//       }}
//     />
//   );
// };

// export default CustomCursor;


import React, { useEffect, useRef } from 'react';

const CustomCursor = () => {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const glowRef = useRef(null);

  const mouse = useRef({ x: 0, y: 0 });
  const pos = useRef({ x: 0, y: 0 });

  // Lag offsets for dot and ring
  const dotOffset = useRef({ x: 0, y: 0 });
  const ringOffset = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
    };

    document.addEventListener('mousemove', handleMouseMove);
    // document.body.style.cursor = 'none';

    const animate = () => {
      // Smoothly move main position toward cursor
      pos.current.x += (mouse.current.x - pos.current.x) * 0.1;
      pos.current.y += (mouse.current.y - pos.current.y) * 0.1;

      // Dot and ring offset trail further behind (more lag)
      dotOffset.current.x += (mouse.current.x - dotOffset.current.x) * 0.1;
      dotOffset.current.y += (mouse.current.y - dotOffset.current.y) * 0.1;

      ringOffset.current.x += (mouse.current.x - ringOffset.current.x) * 0.15;
      ringOffset.current.y += (mouse.current.y - ringOffset.current.y) * 0.15;

      // Glow follows cursor closely
      const glowTransform = `translate(${pos.current.x}px, ${pos.current.y}px) translate(-50%, -50%)`;
      if (glowRef.current) glowRef.current.style.transform = glowTransform;

      // Ring lags behind
      const ringTransform = `translate(${ringOffset.current.x}px, ${ringOffset.current.y}px) translate(-50%, -50%)`;
      if (ringRef.current) ringRef.current.style.transform = ringTransform;

      // Dot lags behind more
      const dotTransform = `translate(${dotOffset.current.x}px, ${dotOffset.current.y}px) translate(-50%, -50%)`;
      if (dotRef.current) dotRef.current.style.transform = dotTransform;

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.body.style.cursor = '';
    };
  }, []);

  return (
    <>
      {/* Glowing background blur */}
      <div
        ref={glowRef}
        className="fixed top-0 left-0 w-[200px] h-[200px] rounded-full bg-cyan-400 opacity-30 blur-[50px] pointer-events-none z-[9997] transition-transform"
      />

      {/* Outer ring */}
      <div
        ref={ringRef}
        className="fixed top-0 left-0 w-14 h-14 border border-cyan-900 rounded-full pointer-events-none z-[9998] transition-transform"
      />

      {/* Center dot */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 w-3 h-3 bg-black rounded-full pointer-events-none z-[9999] transition-transform"
      />
    </>
  );
};

export default CustomCursor;