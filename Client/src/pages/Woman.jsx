import React from "react";
import Hero from "../components/sections/Hero";
import { womanImages } from "../assets/assets"; 
const Woman = () => {
  return (
    <div>
      <Hero images={womanImages} />
    </div>
  );
};

export default Woman;
