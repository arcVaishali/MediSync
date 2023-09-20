import React from 'react'
import "./Styles/Signupstyles.css";
import {} from "antd";
import { Link } from "react-router-dom";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Checkbox, Form, Input } from "antd";
//import FormItem from "antd/es/form/FormItem";
const Signup = () => {
  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };
  return (
      <>
        <div className="signup-form-container">
          <div className="logo-cover"></div>
          <Form
            name="normal_signup"
            className="signup-form"
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
          >
            <Form.Item
              name="username"
              rules={[
                {
                  required: true,
                  message: "Please input your Username!",
                },
              ]}
            >
              <Input
                prefix={<UserOutlined className="site-form-item-icon" />}
                placeholder="Username"
              />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[
                {
                  required: true,
                  message: "Please input your Password!",
                },
              ]}
            >
              <Input
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                placeholder="Password"
              />
            </Form.Item>
            <Form.Item>
              <Form.Item name="remember" valuePropName="checked" noStyle>
                <Checkbox>Remember me</Checkbox>
              </Form.Item>
  
              <a className="login-form-forgot" href="">
                Forgot password
              </a>
            </Form.Item>
  
            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                className="login-form-button"
              >
                Sign up
              </Button>
              Or <Link to="/login"> Already a member?</Link>
            </Form.Item>
          </Form>
        </div> 
    </>
  )
}

export default Signup