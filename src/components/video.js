import React from "react"

const Video = ({ videoSrcURL, videoTitle, ...props }) => (
  <div 
  style={{
        gridArea: "1/1",
        width: "100%",
        margin: 0,
        padding: 0
        }}
    >
    <video
      disablePictureInPicture
      id="BgVideo"
      title={videoTitle}
      height="100%"
      width="100%"
      loop
      muted
      autoPlay={true}
      playsInline 
      preload="auto"
      type="video/mp4"
      >
      <source 
          src={videoSrcURL}
          type="video/mp4"
      />
      </video>
      
  </div>
)
export default Video