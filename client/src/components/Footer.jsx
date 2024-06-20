import React from "react";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <div className="mt-16 flex flex-col gap-8 items-center bg-zinc-100 p-14">
      <img className="w-20 h-20" src={logo} alt="logo" />
      <ul className="text-slate-500 text-sm flex flex-col sm:flex-row items-center gap-8">
        <li>&copy; 2024 Artfolio</li>
        <li>Terms</li>
        <li>Privacy</li>
        <li>Cookies</li>
      </ul>
    </div>
  );
};

export default Footer;
