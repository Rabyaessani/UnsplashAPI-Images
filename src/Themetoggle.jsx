import React from "react";
import { useGlobalContext } from "./Context";
import { BsFillSunFill, BsFillMoonFill } from "react-icons/bs";

const Themetoggle = () => {
  const { IsThemeDark, ToggleDarkTheme } = useGlobalContext();

  return (
    <section className="toggle-container">
      <button className="dark-toggle" onClick={ToggleDarkTheme}>
        {IsThemeDark ? (
          <BsFillSunFill className="toggle-icon"></BsFillSunFill>
        ) : (
          <BsFillMoonFill className="toggle-icon"></BsFillMoonFill>
        )}
      </button>
    </section>
  );
};

export default Themetoggle;
