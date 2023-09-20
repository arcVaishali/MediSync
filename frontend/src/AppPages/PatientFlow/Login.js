import React from "react";
import "../Styles/Loginstyles.css";
import {} from "antd";
import { Form, Input } from "antd";
import { Link } from "react-router-dom";
//import FormItem from "antd/es/form/FormItem";
const LoginPage = () => {
  const onfinishandler = (values) => {
    console.log(values);
  };
  return (
    <>
      <div className="form-container">
        <Form
          layout="horizontal"
          onFinish={onfinishandler}
          register
          className="register-form"
        >
          <h1> Register </h1>
          <Form.Item label="Name" name="name">
            <Input type="text" required />
          </Form.Item>
          <Form.Item label="Email" name="Email">
            <Input type="email" required />
          </Form.Item>
          <Link to="/HomePage" className="m-2">
            {" "}
            Already a user
          </Link>
          <button className="btn btn-primary" type="submit">
          </button>
        </Form>
      </div>
    </>
  );
};

export default LoginPage;
