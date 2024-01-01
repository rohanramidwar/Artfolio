import React from "react";
import { Route, Routes } from "react-router-dom";
import AppBar from "./components/AppBar";
import Home from "./pages/Home";
import CreateForm from "./pages/CreateForm";
import Cart from "./pages/Cart";

import "./App.css";

const App = () => {
  return (
    <div>
      <div>
        <AppBar />
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="create" element={<CreateForm />} />
        <Route path="cart" element={<Cart />} />
      </Routes>
    </div>
  );
};

export default App;
