import React from "react";
import Navbar from "./Navbar";
import Cookies from "universal-cookie";
const Header = () => {
  const cookies = new Cookies();
  return (
    <div className="headernav">
      <Navbar name={cookies.get("Name")} />
    </div>
  );
};

export default Header;
