import React from "react";
import Cookies from "universal-cookie";
const cookies = new Cookies();
const Navbar = () => {
  const handleLogout = () => {
    cookies.remove("email");
    window.location.href = "./";
  };
  return (
    <nav className="navbar">
      <div className="nav-wrapper">
        <span className="brand-logo">Courier</span>
        <ul className="right ulN">
          <li>
            <button
              onClick={() => handleLogout()}
              className="waves-effect waves-light btn logout"
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
