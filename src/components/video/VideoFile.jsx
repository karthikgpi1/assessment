import React from "react";
// import ReactPlayer from "react-player";
import video from "../../Assets/video.mp4";

const VideoFile = () => {
  return (
    <div>
      <video
        // url="http://youtu.be/Oy6hk6Y7VHQ"
        src={video}
        width={375}
        height={200}
        controls={true}
      />
    </div>
  );
};

export default VideoFile;
