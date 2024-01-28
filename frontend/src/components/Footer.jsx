import { Github, Linkedin, Twitter } from "lucide-react";
import React from "react";

function Footer() {
  return (
    <div className="">
      <footer className="p-[40px] bg-gray-100 flex justify-between  text-gray-500">
        <span className="text-base sm:text-center">
          © 2023{" "}
          <a href="#" className="hover:underline">
            Artfolio
          </a>
        </span>
        <ul className="flex gap-8">
          <li href="#">
            <Github size={20} />
          </li>
          <li href="#">
            <Linkedin size={20} />
          </li>
          <li href="#">
            <Twitter size={20} />
          </li>
        </ul>
      </footer>
    </div>
  );
}

export default Footer;
