import React from "react";

const InfoCard = ({ title, children }) => {
  return (
    <div className="info-card">
      <h3>{title}</h3>
      {children}
    </div>
  );
};

export default InfoCard;