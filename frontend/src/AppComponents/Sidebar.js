import React, { useState } from "react";
import Logo from "./Logo";
import Box from "./Box";
import TextButton from "./TextButton";
import { Button, Space } from "antd";

const Sidebar = ({
  height,
  display,
  gridTemplateRows,
  position,
  backgroundColor,
  color,
  padding,
  width,
}) => {
  const arr = [
    <div
      style={{ margin: "0px 30px", display: "flex", flexDirection: "column" }}
    >
      <Button type="primary">Emergency</Button>,
      <Button type="primary">Text</Button>,<Button type="primary">Text</Button>,
      <Button type="primary">Logout</Button>,
    </div>,
    // <TextButton
    //   backgroundColor="#0955b5"
    //   color="white"
    // //   padding="10px"
    //   margin="5px"
    //   text="Emergency"
    //   key="emergency"
    // />,
    // <TextButton
    //   backgroundColor="#0955b5"
    //   color="white"
    // //   padding="10px"
    //   margin="5px"
    //   text="Text"
    //   key="text1"
    // />,
    // <TextButton
    //   position="relative"
    //   backgroundColor="#0955b5"
    //   color="white"
    // //   padding="10px"
    //   margin="5px"
    //   text="Text"
    //   key="text2"
    // />,
    // <TextButton
    //   backgroundColor="#0955b5"
    //   color="white"
    // //   padding="10px"
    //   margin="5px"
    //   text="Logout"
    //   key="logout"
  ];
  return (
    <div
      style={{
        height,
        display,
        gridTemplateRows,
        position,
        backgroundColor,
        color,
        padding,
        width,
      }}
    >
      <Logo
        background="url('https://i.ibb.co/z8QTMnh/Logo.jpg')"
        backgroundRepeat="no-repaet"
        backgroundSize="contain"
        backgroundPositionX="center"
        height="100px"
        width="100px"
        borderRadius="50px"
        marginLeft="37px"
      />
      {/* <Space direction="vertical" style={{ width: '105%' }}>
      <Button type="primary">Primary Button</Button>
      <Button type="primary">Primary Button</Button>
      <Button type="primary">Primary Button</Button>
      </Space> */}

      <Box
        display="grid"
        gridTemplateRows="repeat( 4, 1fr)"
        marginTop="80px"
        childComponents={arr}
      />
    </div>
  );
};

export default Sidebar;
