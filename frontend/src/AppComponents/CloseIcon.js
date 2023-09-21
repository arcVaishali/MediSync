import React from "react";
import { useState } from "react";
const CloseIcon = () => {
  const [isHovered, setIsHovered] = useState(false);

  const transition1 = () => {
    setIsHovered(true);
  };
  const transition2 = () => {
    setIsHovered(false);
  };
  const styles = {
    backgroundColor: isHovered === true ? "#bac3e630" : "#ffffff00",
    borderRadius: "20px",
    padding: "5px",
  };
  return (
    <i
      onMouseEnter={transition1}
      onMouseLeave={transition2}
      class="ri-close-line"
      style={styles}
    ></i>
  );
};

export default CloseIcon;
