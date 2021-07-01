import React from "react";
import FormLogin from "../components/FormLogin";
import "./Login.css";

const Login = () => {
  return (
    <>
      <div className="valign-wrapper">
        <div className="container">
          <h4 className="center white-text loginh4">Login</h4>
          <div className="row divlogin">
            <div className="col s10 m6 l4 offset-s1 offset-m3 offset-l4 divcardline loginD">
              <FormLogin />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
