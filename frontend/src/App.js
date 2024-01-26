import { React, useState } from "react";
import { Avatar } from "@mui/material";

//font
import "@fontsource/inter";
import "@fontsource/inter/400.css";

//logo
import AppLogo from "./assets/Artfolio-logos_black.png";

function App() {
  return (
    <div>
      <nav className="flex justify-between p-10">
        <div>
          <img src={AppLogo} width={101} alt="Artfolio" />
        </div>

        <div className="flex gap-4">
          <button>
            <Avatar>R</Avatar>
          </button>
          <button className="shadow-lg bg-purple-600 p-2.5 text-white rounded-full  ">
            Log out
          </button>
        </div>
      </nav>
    </div>
  );
}

export default App;
