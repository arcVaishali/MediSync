import React, { useEffect, useState } from "react";
import "../AppPages/PatientFlow/Styles/Infostyles.css";
import { Button } from "antd";
import EditIcon from "./EditIcon";
import CloseIcon from "./CloseIcon";
import Checkout from "./Checkout";
import { Link } from "react-router-dom";

const PatientInfo = () => {
  const [isEditing, setIsEditing] = useState({
    Name: false,
    DOB: false,
    Gender: false,
    Phone_Number: false,
    Symptoms: false,
    Blood_Group: false,
    Height: false,
    Weight: false,
  });

  // console.log(isEditing)
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

  let userData = {
    Name: "Vaishali",
    DOB: "Field empty",
    Gender: "Field empty",
    Phone_Number: "Field empty",
    Symptoms: [],
    Blood_Group: "Field empty",
    Height: "Field empty",
    Weight: "Field empty",
  };

  // const [ fetchedData , setFetchedData ] = useState({});
  // useEffect(()=>{
  //   // GET userData
  //   fetchedData ={}
  // })

  const [inputValue, setInputValue] = useState(userData);
  const objectData = Object.entries(inputValue);
  // console.log(objectData);

  const handleInputChange = (key, newValue) => {
    setInputValue({
      ...inputValue,
      [key]: newValue,
    });
    // console.log( objectData);
    // console.log(inputValue);
  };

  // const [ saveButtonLabel , setSaveButtonLabel] = useState("Edit Profile Info");
  // console.log(saveButtonLabel);

  const updateInfo = () => {
    userData = objectData;
    // POST this userData
    // console.log(userData);
    setIsEditing({
      Name: false,
      DOB: false,
      Gender: false,
      Phone_Number: false,
      Symptoms: false,
      Blood_Group: false,
      Height: false,
      Weight: false,
    });
    const showSaveButton = () => {
      console.log(isEditing)
  
      const objd = Object.entries(isEditing);
      console.log(objd);
      for (let i = 0; i < objd.length; i++) {
        if (objd[i][1] == true) return true;
      }
      return false;
    }; 
    showSaveButton();
  };
  const letEditingBegin = () => {
    setIsEditing({
      Name: true,
      DOB: true,
      Gender: true,
      Phone_Number: true,
      Symptoms: true,
      Blood_Group: true,
      Height: true,
      Weight: true,
    });
  };
  const showSaveButton = () => {
    console.log(isEditing)

    const objd = Object.entries(isEditing);
    console.log(objd);
    for (let i = 0; i < objd.length; i++) {
      if (objd[i][1] == true) return true;
    }
    return false;
  };

  // console.log(inputValue.Symptoms);

  return (
    <div className="info-container">
      <div className="row1">
        {objectData.map(([key, value]) =>
          !isEditing[key] ? (
            <div
              className="field"
              onClick={() => setIsEditing({ ...isEditing, [key]: true })}
              style={{
                display: value === inputValue.Symptoms ? "none" : "flex",
                color:
                  value === "Field empty" || value.length === 0
                    ? "gray"
                    : "black",
              }}
            >
              {value != inputValue.Symptoms ? `${value}` : ""}
              <EditIcon
              // onClick={() => setIsEditing({ ...isEditing, [key]: true })}
              />
            </div>
          ) : (
            <input
              type="text"
              className="field"
              key={key}
              id={key}
              placeholder={key}
              onChange={(e) => handleInputChange(key, e.target.value)}
              style={{
                fontFamily: "inherit",
                fontSize: "inherit",
                display: value === userData.Symptoms ? "none" : "flex",
                color:
                  value === "Field empty" || value.length === 0
                    ? "gray"
                    : "black",
              }}
            />
          )
        )}
      </div>
      <div className="row2">
        <select
          className="field"
          id="Symptoms"
          name="Symptoms"
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
        {userData.Symptoms.map((key, element) => (
          <Button ghost type="text" key={key} className="tag">
            <CloseIcon />
            {`${userData.Symptoms[element]}`}
          </Button>
        ))}
      </div>
      <div className="row3">
        <Button type="primary" style={buttonStyles}>
          <Link to="/live-pass">Generate Live Patient Pass</Link>
        </Button>
        { showSaveButton()  ? (
          <Button type="primary" onClick={updateInfo}>Save</Button>
        ) : (
          <Button type="primary">Edit Profile Info</Button>
        )}
      </div>
    </div>
  );
};

export default PatientInfo;
