import React from "react";
import { Button, Space } from "antd";
import { Link } from "react-router-dom";
import Logo from "../../AppComponents/Logo";
import "./Styles/Homestyles.css";

const Home = () => {
  return (
    <div className="container">
      <div className="header">
        <div className="logo">
          <Logo
            background="url('https://i.ibb.co/z8QTMnh/Logo.jpg')"
            backgroundRepeat="no-repeat"
            backgroundSize="contain"
            backgroundPosition="center"
            height="120px"
            width="120px"
            borderRadius="60px"
          />
        </div>
        <Link to="/signup" className="get-started">
          <Button type="primary"> Get Started </Button>
        </Link>
      </div>

      <div className="box">
        <div className="column1">
          <h1
            className="title"
            style={{
              color: "white",
            }}
          >
            MediSync  <br/>
            Sync your health
          </h1>
          <h1
            className="sub-title"
            style={{
              color: "white",
            }}
          >
            LOREM IPSUM DOLOR SIT AMET
          </h1>
          <div
            className="body"
            style={{
              color: "white",
            }}
          >
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </div>

          <div className="buttons">
            <Link to="/signup" style={{ marginRight: "12px" }}>
              <Button type="primary"> Signup</Button>
            </Link>
            <Link to="/login">
              <Button>Login</Button>
            </Link>
          </div>
        </div>

        <div className="column2"></div>
      </div>
    </div>
  );
};

export default Home;
