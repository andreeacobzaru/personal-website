import React from "react";

export const Duck = ({ x, y }) => {
  const bodyColour = "#E5EBF0";
  const beakColour = "#DEAD61";
  return (
    <svg height="100" width="100">
      <ellipse cx="50" cy="55" rx="18" ry="13" fill={bodyColour} />
      <ellipse cx="60" cy="40" rx="13" ry="10" fill={bodyColour} />
      <polygon points="71,35 81,40 71,45" fill={beakColour} />
      <circle cx="60" cy="37" r="2" fill="black" />
      Sorry, your browser does not support inline SVG.
    </svg>
  );
};
