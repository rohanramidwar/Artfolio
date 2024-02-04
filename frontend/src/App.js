import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import ProjectDetailsPage from "./pages/ProjectDetailsPage";
import ShareWorkPage from "./pages/ShareWorkPage";
import ProfilePage from "./pages/ProfilePage";
import EditProfilePage from "./pages/EditProfilePage";
import Footer from "./components/Footer";
//fonts
import "@fontsource/exo-2";
import "@fontsource/exo-2/600.css";
import "@fontsource/exo-2/700.css";
import "@fontsource/exo-2/800.css";
import "@fontsource/karla";
import "@fontsource/karla/600.css";

function App() {
  return (
    <div className="min-h-[100vh] flex flex-col justify-between">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects/project" element={<ProjectDetailsPage />} />
        <Route path="/create" element={<ShareWorkPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/profile/edit" element={<EditProfilePage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
