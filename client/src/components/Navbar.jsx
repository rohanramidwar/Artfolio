import React from "react";
import appLogo from "../assets/folio.png";
import { Search } from "lucide-react";
import { Button } from "./ui/button";

const Navbar = () => {
  return (
    <nav className="bg-white z-10 fixed w-full flex justify-between p-5 text-gray-800">
      <div className="flex gap-7">
        <img className="w-16    " src={appLogo} alt="Artfolio" />
        <Button className="rounded-full font-semibold h-12">Create</Button>
      </div>

      <div className="relative w-3/4">
        <Search className="absolute top-3 left-6 text-gray-400" size={20} />
        <input
          className="bg-zinc-200 w-full rounded-full h-12 pl-12 pr-6 outline-none placeholder:text-gray-400"
          placeholder="Search..."
        />
      </div>
      {/* right  */}
      <div className="flex gap-5">
        {/* <div>
          <img
            className="w-12 h-12 rounded-full"
            src="https://i.pinimg.com/280x280_RS/dd/73/58/dd73584f718d8fa359c5b8972baa7434.jpg"
            alt="user"
          />
        </div> */}

        {/* sign in  */}
        <div>
          <Button className="h-12 rounded-full font-semibold bg-purple-500 hover:bg-purple-600">
            Sign in
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
