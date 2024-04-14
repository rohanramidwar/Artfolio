import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import GoogleLogin from "./components/GoogleLogin";

const App = () => {
  return (
    <Routes>
      <Route path="/" Component={Home} />
      <Route path="/auth" Component={GoogleLogin} />
    </Routes>
  );
};

export default App;
