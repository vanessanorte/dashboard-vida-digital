import React from "react";

const Card = ({ title, value, icon, color }) => {
  return (
    <div className={`p-4 rounded-2xl shadow-md text-white ${color}`}>
      <div className="flex items-center space-x-4">
        <div>{icon}</div>
        <div>
          <h2 className="text-xl font-semibold">{title}</h2>
          <p className="text-lg">{value}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
