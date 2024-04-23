import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import GoogleLogin from "./components/GoogleLogin";
import CreateArea from "./pages/CreateArea";

const App = () => {
  return (
    <Routes>
      <Route path="/" Component={Home} />
      <Route path="/auth" Component={GoogleLogin} />
      <Route path="/create" Component={CreateArea} />
    </Routes>
  );
};

export default App;
