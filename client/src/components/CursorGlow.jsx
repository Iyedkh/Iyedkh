import React, { useState, useEffect } from "react";

const CursorGlow = () => {
  const [pos, setPos] = useState({ x: -200, y: -200 });

  useEffect(() => {
    const move = (e) => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <div
      className="pointer-events-none fixed z-0"
      style={{
        left: pos.x - 200,
        top: pos.y - 200,
        width: 400,
        height: 400,
        background: "radial-gradient(circle, rgba(212,163,89,0.07) 0%, transparent 70%)",
        borderRadius: "50%",
        transition: "left 0.15s ease, top 0.15s ease",
      }}
    />
  );
};

export default CursorGlow;