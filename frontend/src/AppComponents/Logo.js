import React from "react";

const Logo = ({
  background,
  backgroundRepeat,
  backgroundSize,
  backgroundPositionX,
  height,
  width,
  borderRadius,
}) => {
  return (
    <div
      style={{
        background,
        backgroundRepeat,
        backgroundSize,
        backgroundPositionX,
        height,
        width,
        borderRadius,
      }}
    ></div>
  );
};

export default Logo;
