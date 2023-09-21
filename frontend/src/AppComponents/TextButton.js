import React from "react";

const TextButton = ({
  position,
  padding,
  margin,
  backgroundColor,
  color,
  text,
}) => {
  const transition1 = () => {
    const ele = document.getElementById("text-button");
    ele.style.backgroundColor = "blue";
  };
  const transition2 = () => {
    const ele = document.getElementById("text-button");
    ele.style.backgroundColor = "#0955b5";
  };

  return (
    <div
      id="text-button"
      style={{
        position,
        padding: "5px",
        margin,
        backgroundColor,
        color,
        borderRadius: "5px",
      }}
    //   onMouseEnter={transition1}
    //   onMouseLeave={transition2}
    >
      {text}
    </div>
  );
};

export default TextButton;
