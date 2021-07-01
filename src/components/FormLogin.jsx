import React, { useEffect, useState } from "react";

import axios from "axios";
import Cookies from "universal-cookie";
const FormLogin = () => {
  const retryTime = 3000;

  const cookies = new Cookies();
  const baseUrl = "https://courierdemo.azurewebsites.net/api/membership/login";
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const { email, password } = data;
  const [contador, SetContador] = useState(
    parseInt(localStorage.getItem("tryCount") ?? 0)
  );
  const [disableBotton, setDisableBotton] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  let pattern = new RegExp(/[~`!#$%^&*+=\-[\]\\';,/{}|\\":<>?]/);

  const setPersistantTryCount = (value) => {
    localStorage.setItem("tryCount", value);
    localStorage.setItem("lastTry", Date.now());

    SetContador(value);
  };

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
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleLogin = async () => {
    const formIsValid = validateForm();
    if (!formIsValid) return;

    try {
      const response = await axios
        .post(baseUrl, postData, axiosConfig)
        .then((res) => {
          return res.data;
        });

      if (response.success) loginSuccess(response.responseObject);
      else loginFail();
    } catch (err) {
      loginFail();
    }
  };

  const validateForm = () => {
    if (pattern.test(email) || pattern.test(password)) {
      setErrorMessage("Only use letters and numbers ");
      return false;
    }

    return true;
  };

  const loginSuccess = (result) => {
    setErrorMessage("");
    setPersistantTryCount(0);

    cookies.set("email", email, { path: "/" });
    cookies.set("Name", result.fullName, { path: "/" });

    window.location.href = "./Home";
  };

  const loginFail = () => {
    setErrorMessage("Email or password invalid");
    updateTryCount();
  };

  const updateTryCount = () => {
    setPersistantTryCount(contador + 1);
    if (contador > 2) {
      disableLoginButton(retryTime);
    }
  };

  const disableLoginButton = (time) => {
    setDisableBotton(true);
    setTimeout(() => {
      setDisableBotton(false);
    }, time);
  };

  const handleTimeDiff = () => {
    if (contador > 2) {
      const lastTry = parseInt(localStorage.getItem("lastTry"));
      const timediff = Date.now() - lastTry;

      if (timediff < retryTime && !disableBotton) {
        disableLoginButton(timediff);
      }
    }
  };

  useEffect(() => {
    if (cookies.get("email")) {
      window.location.href = "./Home";
    }
    handleTimeDiff();
  });

  return (
    <>
      <form className="formD" onSubmit={handleSubmit}>
        <div className="input-field col s12 form">
          <i className="material-icons prefix">account_circle</i>
          <input
            id="icon_prefix"
            type="text"
            className="validate"
            name="email"
            maxLength="10"
            pattern="[A-Za-z0-9]{1,15}"
            required
            onChange={handleChange}
            value={email}
          />
          <label htmlFor="icon_prefix">Username</label>
        </div>

        <div className="input-field col s12">
          <i className="material-icons prefix">lock_outline</i>
          <input
            id="icon_prefix2"
            type="password"
            className="validate"
            required
            minLength="6"
            pattern="[A-Za-z0-9]{1,15}"
            name="password"
            onChange={handleChange}
            value={password}
          />
          <label htmlFor="icon_prefix2">password</label>
        </div>

        <div className="col s12 mgrem">
          <p>
            <label>
              <span className="center red-text red-accent-3">
                {errorMessage}
              </span>
            </label>
          </p>
        </div>

        <div className="input-field col s12 divbt">
          <button
            className="waves-effect waves-light btn blue btlg1"
            type="submit"
            name="bt-send"
            disabled={disableBotton}
            onClick={() => handleLogin()}
          >
            Login
          </button>
          <div className="input-field col s12"></div>
        </div>

        <div className="googleButton center input-field col s12"></div>
      </form>
    </>
  );
};

export default FormLogin;
