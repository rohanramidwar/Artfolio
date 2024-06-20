import React from "react";
import { Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import "@fontsource/inter";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";
import "@fontsource/inter/700.css";
import "@fontsource/inter/800.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import ProfilePage from "./pages/ProfilePage";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="relative flex flex-col min-h-screen">
      <Navbar />
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/posts/search" Component={Home} />
        <Route path="/profile-page/:id" Component={ProfilePage} />
      </Routes>
      <Footer />
      <Toaster />
    </div>
  );
};

export default App;
