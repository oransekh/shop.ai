import React from "react";

const CatagoryCard = ({ category }) => {
  return (
    <div className="rounded-lg overflow-hidden shadow-md">
      <img
        src={category}
        alt={category}
        className="h-70 items-center object-cover w-full transition-transform duration-300 hover:scale-105"
      />
    </div>
  );
};

export default CatagoryCard;
