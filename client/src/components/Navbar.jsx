import React, { useEffect, useState } from "react";
import logo from "@/assets/logo.png";
import { Button } from "./ui/button";
import { Drawer, DrawerContent, DrawerTrigger } from "./ui/drawer";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Dialog, DialogContent, DialogTrigger } from "./ui/dialog";
import google from "@/assets/google.png";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import CreateProject from "./CreateProject";
import { useDispatch } from "react-redux";
import {
  getAllPosts,
  getCreatorProfile,
  getPostsBySearch,
} from "@/actions/postActions";
import { Search } from "lucide-react";
import axios from "axios";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const Navbar = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();
  const query = useQuery();

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const [search, setSearch] = useState("");

  const searchPost = () => {
    if (search.trim()) {
      dispatch(getPostsBySearch(search, navigate));
    } else {
      navigate("/");
    }
    setSearch("");
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      searchPost();
    }
  };

  const handleDrawerClose = () => {
    setIsDrawerOpen(false);
  };

  //to get user id
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));
  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("profile")));
  }, [location]);
  const creatorId = user?._id;

  const handleSignOut = () => {
    window.open("http://localhost:5000/logout", "_self");
    localStorage.clear();
  };

  //store user data in local storage
  const fetchUserData = async () => {
    try {
      const res = await axios.get("http://localhost:5000/login/success", {
        withCredentials: true,
      });
      setUser({ ...res.data.user });
      localStorage.setItem("profile", JSON.stringify({ ...res.data.user }));
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchUserData();
  }, []);

  const handleSignIn = () => {
    window.open("http://localhost:5000/auth/google/callback", "_self");
  };

  const handleCreatorProfile = () => {
    dispatch(getCreatorProfile({ creatorId, navigate }));
  };

  return (
    <div className="flex justify-between text-slate-700 px-8 py-3 border-b">
      <div className="flex gap-12 font-medium text-sm items-center">
        <Link to="/">
          <div onClick={() => dispatch(getAllPosts())}>
            <img className="w-12 h-12" src={logo} alt="logo" />
          </div>
        </Link>
        <ul className="lg:flex gap-12 hidden">
          <p>Find artist</p>
          <p>Inspiration</p>
          <p>Learn art</p>
          <p>Hire artist</p>
        </ul>
      </div>
      <div>
        {user ? (
          <div className="flex gap-3 lg:gap-8 items-center">
            <input
              className="hidden sm:block bg-gray-100 outline-none rounded-xl pl-4 py-3 pr-10 placeholder:text-slate-900 text-sm"
              placeholder="Search"
              onKeyDown={handleKeyPress}
              value={search} // Change here
              onChange={(e) => setSearch(e.target.value)}
            />
            <DropdownMenu>
              <DropdownMenuTrigger className="w-full">
                <img
                  className="w-11 h-11 rounded-full"
                  src={user?.profilePic}
                  alt="user"
                />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-60">
                <DropdownMenuLabel>
                  <div>
                    <p className="text-lg">{user?.displayName}</p>
                    <p className="text-sm text-gray-500 font-normal">
                      {user?.email}
                    </p>
                  </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />

                <DropdownMenuItem
                  onClick={handleCreatorProfile}
                  className="cursor-pointer"
                >
                  Profile
                </DropdownMenuItem>

                <DropdownMenuItem className="cursor-pointer">
                  Share work
                </DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer">
                  Settings
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem
                  className="cursor-pointer"
                  onClick={handleSignOut}
                >
                  Sign out
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <Drawer open={isDrawerOpen} onOpenChange={setIsDrawerOpen}>
              <DrawerTrigger className="w-full">
                <Button
                  className="rounded-xl h-auto py-3 bg-violet-500 hover:bg-violet-500"
                  onClick={() => setIsDrawerOpen(true)}
                >
                  Share work
                </Button>
              </DrawerTrigger>
              <DrawerContent className="h-[95%] rounded-3xl">
                <CreateProject onClose={handleDrawerClose} />
              </DrawerContent>
            </Drawer>
          </div>
        ) : (
          <Dialog>
            <DialogTrigger>
              <Button className="rounded-xl h-auto py-3 bg-violet-500 hover:bg-violet-500">
                Sign in
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:w-96">
              <div className="flex flex-col gap-5 items-center py-8">
                <img className="w-12 h-12" src={logo} alt="logo" />
                <p className="text-center">
                  By continuing, you are setting up a Artfolio account and agree
                  to our User Agreement and Privacy Policy.
                </p>
                <Button
                  onClick={handleSignIn}
                  className="flex gap-3 rounded-xl h-auto py-3"
                >
                  <img className="w-4 h-4" src={google} alt="G" />
                  Sign in with Google
                </Button>
              </div>
            </DialogContent>
          </Dialog>
        )}
      </div>
    </div>
  );
};

export default Navbar;
