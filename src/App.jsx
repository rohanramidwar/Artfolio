import React from "react";
import { Route, Routes } from "react-router-dom";
import AppBar from "./components/AppBar";
import Home from "./pages/Home";
import CreateForm from "./pages/CreateForm";
import Cart from "./pages/Cart";
import ProductView from "./pages/ProductView";
import Auth from "./pages/Auth";

import "@fontsource/nunito-sans";
import "@fontsource/nunito-sans/300.css";
import "@fontsource/nunito-sans/400.css";
import "@fontsource/nunito-sans/500.css";
import "@fontsource/nunito-sans/600.css";
import "@fontsource/nunito-sans/700.css";
import "@fontsource/nunito-sans/800.css";
import "@fontsource/nunito-sans/900.css";

import "./App.css";
import UserProfile from "./pages/UserProfile";

const App = () => {
  return (
    <div>
      <AppBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="create" element={<CreateForm />} />
        <Route path="cart" element={<Cart />} />
        <Route path="product" element={<ProductView />} />
        <Route path="Auth" element={<Auth />} />
        <Route path="profile" element={<UserProfile />} />
      </Routes>
    </div>
  );
};

export default App;
