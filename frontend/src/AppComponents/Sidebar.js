import React from "react";
import Logo from "./Logo";

const Sidebar = ({ display, gridTemplateRows, position, backgroundColor, color, padding }) => {
  return (
    <div style={{ display, gridTemplateRows, position, backgroundColor, color , padding}}>
      <Logo
        background="url('https://i.ibb.co/z8QTMnh/Logo.jpg')"
        backgroundRepeat="no-repaet"
        backgroundSize="contain"
        backgroundPositionX="center"
        height="100px"
        width="100px"
        borderRadius="50px"
      />
      

    </div>
  );
};

export default Sidebar;
