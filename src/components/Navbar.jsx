import React from "react";
import Cookies from "universal-cookie";
const cookies = new Cookies();
const Navbar = () => {
  const handleLogout = () => {
    cookies.remove("email");
    window.location.href = "./";
  };
  return (
    <nav style={{ backgroundColor: "#1952D4" }}>
      <div className="nav-wrapper">
        <span className="brand-logo">Courier</span>
        <ul id="" className="right ">
          <li>
            <button
              onClick={handleLogout}
              className="waves-effect waves-light btn"
            >
              Logout
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
