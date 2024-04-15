import HomeLayout from "@/components/HomeLayout";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Button } from "@/components/ui/button";

const Home = () => {
  const [userData, setUserData] = useState();
  console.log("res", userData);

  const fetchUserData = async () => {
    try {
      const res = await axios.get("http://localhost:5000/login/success", {
        withCredentials: true,
      });
      setUserData(res);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  const logOut = () => {
    window.open("http://localhost:5000/logout", "_self");
  };

  return (
    <div>
      <Button onClick={logOut}>Log out</Button>
      <HomeLayout />
    </div>
  );
};

export default Home;
