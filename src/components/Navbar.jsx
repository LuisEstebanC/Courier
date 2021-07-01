import React from "react";
import Cookies from "universal-cookie";
const cookies = new Cookies();
const Navbar = (props) => {
  const handleLogout = () => {
    cookies.remove("email");
    window.location.href = "./";
  };
  return (
    <nav className="navbar">
      <div className="container">
        <div className="nav-wrapper">
          <span className="brand-logo left">Courier</span>
          <ul className="right ulN">
            <li>
              <span className="WelcomeName">{props.name}</span>
            </li>
            <li>
              <button
                onClick={() => handleLogout()}
                className="waves-effect waves-light btn"
              >
                Logout
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
