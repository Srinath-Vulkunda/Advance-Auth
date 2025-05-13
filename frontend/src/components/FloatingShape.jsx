import React from "react";

const FloatingShape = ({ color, size, top, left, delay }) => {
  return (
    <div
      className={`${color} ${size} absolute rounded-full opacity-20 blur-xl animate-float`}
      style={{
        top,
        left,
        animationDelay: `${delay}s`,
      }}
    ></div>
  );
};

export default FloatingShape;