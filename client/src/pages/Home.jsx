import HomeLayout from "@/components/HomeLayout";
import React, { useEffect } from "react";
import axios from "axios";

const Home = () => {
  const getUser = async () => {
    try {
      const res = await axios.get("http://localhost:5000/login/success", {
        withCredentials: true,
      });
      console.log("res", res);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <div>
      <HomeLayout />
    </div>
  );
};

export default Home;
