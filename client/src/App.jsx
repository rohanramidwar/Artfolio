import React from "react";
import { Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import Home from "./pages/Home";
import GoogleLogin from "./components/GoogleLogin";
import CreateArea from "./pages/CreateArea";
import ProfilePage from "./pages/ProfilePage";

const App = () => {
  return (
    <div className="min-h-screen">
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/auth" Component={GoogleLogin} />
        <Route path="/create" Component={CreateArea} />
        <Route path="/profile/:id" Component={ProfilePage} />
      </Routes>
      <Toaster />
    </div>
  );
};

export default App;
