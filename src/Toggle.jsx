import { useState } from "react";
import { useSpring, animated } from "@react-spring/web";

export const Toggle = () => {
  const [isToggled, setIsToggled] = useState(false);
  const fade = useSpring({
    color: isToggled ? "#000" : "green",
    transform: isToggled
      ? "translate3d(0, 15px, 0)"
      : "translate3d(0, 15px, 0)",
    fontSize: isToggled ? "2rem" : "3rem",
  });
  return (
    <div>
      <animated.h1 style={{ ...fade }}>Hello</animated.h1>
      <button onClick={() => setIsToggled(!isToggled)}>Toggle</button>
    </div>
  );
};
