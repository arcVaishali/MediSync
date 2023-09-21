import React, { useState } from "react";
import "../AppPages/PatientFlow/Styles/Infostyles.css";
import { Button } from "antd";
import EditIcon from "./EditIcon";
import CloseIcon from "./CloseIcon";
import Checkout from "./Checkout";
import {Link} from "react-router-dom";

const PatientInfo = () => {
  // const [isSymptom , setIsSymptom] = useState(false);
  // const foundSymptom=()=> {
  //   setIsSymptom(true);
  // }

  // const styles={
  //   display: isSymptom? "none" : "inline"
  // }
  const userData = {
    name: "Vaishali",
    dob: "14-03-2004",
    gender: "Female",
    phoneNumber: "8851463032",
    symptoms: ["cold", "fever", "back pain", "headache"],
    bloodGroup: "B+ve",
    height: "157cm",
    weight: "50kg",
  };

  const objectData = Object.entries(userData);
  console.log(userData);

  return (
    <div className="info-container">
      <div className="row1">
        {objectData.map(([key, value]) => (
          <div
            className="field"
            style={{ display: value === userData.symptoms ? "none" : "flex" }}
          >
            {value != userData.symptoms ? `${value}` : ""} <EditIcon />
          </div>
        ))}
      </div>
      <div className="row2">
        <select className="field" id="symptoms" name="symptoms">
          <option>Symptoms</option>
          <option>fever</option>
          <option>cold</option>
          <option>back pain</option>
        </select>
        <div className="field">
          {" "}
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
        <Button type="primary" style={{ marginRight: "10px" }}>
          <Link to="/live-pass">Generate Live Patient Pass</Link>
        </Button>
        <Button type="primary">Edit Profile Info</Button>
      </div>
    </div>
  );
};

export default PatientInfo;
