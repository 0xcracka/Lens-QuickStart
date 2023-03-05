import React from "react";

const FollowMe = () => {
  const buttonStyle = {
    background: "#abfe2c",
    padding: "7px 14px",
    display: "flex",
    alignItems: "center",
    color: "#00501e",
    borderRadius: "7px",
    gap: "8px"
  };

  return (
      <div style={{ position: "fixed", textAlign: "right", right: 0, top: 0, padding: 10 }}>
      <a href="https://www.lensfrens.xyz/cracka.lens" target="_blank" rel="noopener noreferrer" style={buttonStyle} className="widget-button">
        Follow me on Lens Protocol 🧨
      </a>
    </div>
  );
};

export default FollowMe;
