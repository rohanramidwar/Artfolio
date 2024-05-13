import React from "react";
import appLogo from "../assets/folio.png";

const Navbar = () => {
  return (
    <nav className="px-5">
      <img className="w-20" src={appLogo} alt="Artfolio" />
      <button>Create</button>
    </nav>
  );
};

export default Navbar;
