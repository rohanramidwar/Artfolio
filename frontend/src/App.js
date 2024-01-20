import React from "react";
import "@fontsource/poppins";
import "@fontsource/poppins/600.css";
import "@fontsource/work-sans";
import "@fontsource/nunito-sans";
import "@fontsource/nunito-sans/900.css";
import { Heart, MessageCircle } from "lucide-react";
import { Avatar } from "@mui/material";
// import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";
// import { Route, Routes } from "react-router-dom";
// import Home from "./pages/Home";
// import CreateForm from "./pages/CreateForm";
// import Auth from "./pages/Auth";
// import Cart from "./pages/Cart";
// import ArtDetailsPage from "./pages/ArtDetailsPage";
// import ProfilePage from "./pages/ProfilePage";

function App() {
  return (
    <div>
      {/* <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="create" element={<CreateForm />} />
        <Route path="auth" element={<Auth />} />
        <Route path="cart" element={<Cart />} />
        <Route path="art-details" element={<ArtDetailsPage />} />
        <Route path="profile" element={<ProfilePage />} />
      </Routes>

      <Footer /> */}

      <div className="w-[282px] h-[410px] rounded-lg shadow-md m-14 bg-white p-2.5 flex flex-col gap-2 text-gray-700 transition duration-300 hover:scale-105 hover:shadow-lg">
        <img
          className="rounded"
          src="https://via.placeholder.com/349x261"
          alt="artwork img"
        />

        <div className="flex flex-col h-full justify-between">
          <div>
            <div className="flex gap-1 items-center">
              <Avatar sx={{ width: 24, height: 24, fontSize: 16 }}>H</Avatar>
              <p className="text-sm">Harry Potter</p>
            </div>
            <h2 className="mt-1 text-base font-semibold text-clamp-1">
              Lorem ipsum dolor sit amet
            </h2>
            <p className="mt-2 text-sm line-clamp-3">
              {" "}
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, Lorem ipsum dolor sit amet, consectetur
              adipiscing elit, sed do eiusmod tempor incididu
            </p>
          </div>

          <div className="flex gap-2 text-gray-600">
            <div className="flex gap-1 items-center">
              <Heart width={16} />
              <p className="text-sm">(1 likes)</p>
            </div>

            <div className="flex gap-1 items-center">
              <MessageCircle width={16} />
              <p className="text-sm">(1 comments)</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
