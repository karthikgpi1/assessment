import React from "react";
import "./thumbnail.css";

const Thumbnail = () => {
  return (
    <div className="thumbnail">
      {" "}
      <img src={require("../../Assets/video thumbnail.png")} alt="thumb" />
    </div>
  );
};

export default Thumbnail;
