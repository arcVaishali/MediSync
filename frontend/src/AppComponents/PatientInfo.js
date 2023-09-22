import React from "react";
import "../AppPages/PatientFlow/Styles/Infostyles.css";
import { Button } from "antd";

const PatientInfo = () => {
  const name = "Vaishali";
  const dob = "14-03-2004";
  const gender = "Female";
  const phoneNumber = "8851463032";
  const symptoms = ["cold", "fever", "back pain", "headache"];
  const data1="data1";
  const data2="data1";
  const data3="data1";

  return (
    <div className="info-container">
      <div className="row1">
        <div className="field"> {`${name}`}</div>
        <div className="field"> {`${dob}`}</div>
        <div className="field"> {`${gender}`}</div>
        <div className="field"> {`${data3}`}</div>
        <div className="field">{`${data1}`}</div>
        <div className="field"> {`${data2}`}</div>
      </div>
      <div className="row2">
        <div className="field"> Symptoms</div>
        <div className="field"> Patient History</div>
      </div>
      <div className="row3">
        {symptoms.map((key, element) => (
          <Button ghost type="text" key={key} className="tag">
            {`${symptoms[element]}`}
          </Button>
        ))}
      </div>
      <div className="row3">
        <Button type="primary" style={{marginRight:"10px"}}>Generate Live Patient Pass</Button>
        <Button type="primary">Edit Profile Info</Button>
      </div>
    </div>
  );
};

export default PatientInfo;
