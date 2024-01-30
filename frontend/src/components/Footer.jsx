import React from "react";
import { Github, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer>
      <div className="flexCenter gap-6 text-gray-500 py-9 mt-28  ">
        <p>
          © 2023{" "}
          <a href="#" className="hover:underline">
            Artfolio
          </a>
        </p>
        <ul className="flex gap-6">
          <li>
            <Github size={20} />
          </li>
          <li>
            <Linkedin size={20} />
          </li>
          <li>
            <Twitter size={20} />
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
