import React, { useEffect, useState } from "react";
import "./Login.css";
import axios from "axios";
import Cookies from "universal-cookie";
const Login = () => {
  const cookies = new Cookies();
  const baseUrl = "https://courierdemo.azurewebsites.net/api/membership/login";

  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = data;

  const handleChange = (e) => {
    const value = e.target.value;
    setData({
      ...data,
      [e.target.name]: value,
    });
  };
  const postData = {
    username: email,
    password: password,
  };
  let axiosConfig = {
    method: "post",
    url: "https://courierdemo.azurewebsites.net/api/membership/login",
    dataType: "jsonp",
    headers: {
      "Content-Type": "application/json",
      "X-Requested-With": "XMLHttpRequest",
      "Access-Control-Allow-Origin": true,
    },
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const handleLogin = async () => {
    await axios
      .post(baseUrl, postData, axiosConfig)
      .then((res) => {
        return res.data;
      })
      .then((response) => {
        if (response.success) {
          cookies.set("email", email, { path: "/" });
          cookies.set("Name", response.responseObject.fullName, { path: "/" });
          console.log(response.responseObject.fullName + email);
          window.location.href = "./Home";
        } else {
          console.log("no hay nadie");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    if (cookies.get("email")) {
      window.location.href = "./Home";
    }
  }, []);

  return (
    <>
      <div className="valign-wrapper">
        <div className="container">
          <h4 className="center white-text loginh4">Login</h4>
          <div className="row divlogin">
            <div className="col s10 m6 l4 offset-s1 offset-m3 offset-l4 divcardline loginD">
              <form className="formD" onSubmit={handleSubmit}>
                <div className="input-field col s12 form">
                  <i className="material-icons prefix">mail</i>
                  <input
                    id="icon_prefix"
                    type="text"
                    className="validate"
                    name="email"
                    onChange={handleChange}
                    value={email}
                  />
                  <label htmlFor="icon_prefix">Email</label>
                </div>

                <div className="input-field col s12">
                  <i className="material-icons prefix">lock_outline</i>
                  <input
                    id="icon_prefix2"
                    type="password"
                    className="validate"
                    required
                    minLength="6"
                    name="password"
                    onChange={handleChange}
                    value={password}
                  />
                  <label htmlFor="icon_prefix2">password</label>
                </div>

                <div className="col s12 mgrem">
                  <p>
                    <label>
                      <span></span>
                    </label>
                  </p>
                </div>

                <div className="input-field col s12 divbt">
                  <button
                    className="waves-effect waves-light btn blue btlg1"
                    type="submit"
                    name="bt-send"
                    onClick={() => handleLogin()}
                  >
                    Login
                  </button>
                  <div className="input-field col s12"></div>
                </div>

                <div className="googleButton center input-field col s12"></div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
