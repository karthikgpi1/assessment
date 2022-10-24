import React from "react";
import ReactPlayer from "react-player";

const VideoFile = () => {
  return (
    <div>
      <ReactPlayer
        
        url="https://youtu.be/Oy6hk6Y7VHQ"
    
        width={387}
        height={200}
        controls={true}
      />
    </div>
  );
};

export default VideoFile;
