import React from "react";
import "@fontsource/poppins";
import "@fontsource/poppins/600.css";
import "@fontsource/work-sans";
import "@fontsource/nunito-sans";
import "@fontsource/nunito-sans/900.css";
import { Heart, MessageCircle } from "lucide-react";
import { Avatar } from "@mui/material";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import CreateForm from "./pages/CreateForm";
import Auth from "./pages/Auth";
import Cart from "./pages/Cart";
import ArtDetailsPage from "./pages/ArtDetailsPage";
import ProfilePage from "./pages/ProfilePage";

function App() {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="create" element={<CreateForm />} />
        <Route path="auth" element={<Auth />} />
        <Route path="cart" element={<Cart />} />
        <Route path="art-details" element={<ArtDetailsPage />} />
        <Route path="profile" element={<ProfilePage />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
