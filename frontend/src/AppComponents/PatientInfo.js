import React, { useEffect, useState } from "react";
import "../AppPages/PatientFlow/Styles/Infostyles.css";
import { Button } from "antd";
import EditIcon from "./EditIcon";
import CloseIcon from "./CloseIcon";
import Checkout from "./Checkout";
import { Link } from "react-router-dom";

const PatientInfo = () => {
  const [buttonStyles, setButtonStyles] = useState({
    color: "white",
    backgroundColor: "gray",
    marginRight: "10px",
  });
  const [textStyles, setTextStyles] = useState({
    color: "gray",
  });

  const buttonStylesChange = () => {
    setButtonStyles({
      color: "white",
      backgroundColor: "blue",
      marginRight: "10px",
    });
  };
  const textStylesChange = () => {
    setTextStyles({
      color: "white",
    });
  };

  const userData = {
    name: "Vaishali",
    dob: "Field empty",
    gender: "Field empty",
    phoneNumber: "Field empty",
    symptoms: [],
    bloodGroup: "Field empty",
    height: "Field empty",
    weight: "Field empty",
  };

  const objectData = Object.entries(userData);
  console.log(userData);

  return (
    <div className="info-container">
      <div className="row1">
        {objectData.map(([key, value]) => (
          <div
            className="field"
            style={{
              display: value === userData.symptoms ? "none" : "flex",
              color:
                value === "Field empty" || value.length === 0
                  ? "gray"
                  : "black",
              content: value === null ? "Edit your profile" : `${value}`,
            }}
          >
            {value != userData.symptoms ? `${value}` : ""} <EditIcon />
          </div>
        ))}
      </div>
      <div className="row2">
        <select
          className="field"
          id="symptoms"
          name="symptoms"
          style={textStyles}
        >
          <option>Symptoms</option>
          <option>fever</option>
          <option>cold</option>
          <option>back pain</option>
        </select>
        <div className="field" style={textStyles}>
          Patient History <Checkout />{" "}
        </div>
      </div>
      <div className="row3">
        {userData.symptoms.map((key, element) => (
          <Button ghost type="text" key={key} className="tag">
            <CloseIcon />
            {`${userData.symptoms[element]}`}
          </Button>
        ))}
      </div>
      <div className="row3">
        <Button type="primary" style={buttonStyles}>
          <Link to="/live-pass">Generate Live Patient Pass</Link>
        </Button>
        <Button type="primary">
          Edit Profile Info
        </Button>
      </div>
    </div>
  );
};

export default PatientInfo;
