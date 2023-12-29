import React from "react";
import AppBar from "./components/AppBar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import CreateArea from "./pages/CreateArea";
import Cart from "./pages/Cart";

import "@fontsource/inter";
import "@fontsource/inter/400.css";
import "./App.css";

const App = () => {
  return (
    <div>
      <div>
        <AppBar />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="create" element={<CreateArea />} />
        <Route path="cart" element={<Cart />} />
      </Routes>
    </div>
  );
};

export default App;
