import React from "react";
// import ReactPlayer from "react-player";
// import { ReactVideo } from "reactjs-media";
import video from "../../Assets/video.mp4";
import "./videoFile.css";

const VideoFile = () => {
  return (
    <div>
      <video
        url="http://youtu.be/Oy6hk6Y7VHQ"
        src={video}
        className="video"
        // width={375}
        // height={200}
        controls={true}
      />
      {/* <ReactVideo
        src=""
        poster="/poster.png"
        primaryColor="red"
        autoPlay
      /> */}
    </div>
  );
};

export default VideoFile;
