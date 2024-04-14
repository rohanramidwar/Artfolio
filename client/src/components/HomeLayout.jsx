import React from "react";
import Post from "./Post";

import artist from "../assets/artist.jpg";
import blondeur from "../assets/blondeur.jpg";
import characterArt from "../assets/character-art.jpg";
import connieLee from "../assets/connie-lee.jpg";
import jade from "../assets/jade.jpg";
import kathuon from "../assets/kathuon.jpg";
import kuipr from "../assets/kuipr.jpg";
import nika from "../assets/nika.jpg";
import samIndia from "../assets/sam-india.jpg";
import smartAlec from "../assets/smart-alec.jpg";
import tasyaRey from "../assets/tasya-rey.jpg";

const HomeLayout = () => {
  const artSrc = [
    artist,
    blondeur,
    characterArt,
    connieLee,
    jade,
    kathuon,
    kuipr,
    nika,
    samIndia,
    smartAlec,
    tasyaRey,
  ];
  return (
    <div className="w-full columns-2 sm:columns-5 gap-5 p-5">
      {artSrc.map((src, index) => (
        <Post key={index} src={src} />
      ))}
    </div>
  );
};

export default HomeLayout;
