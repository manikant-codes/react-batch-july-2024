import React from "react";

function HeroImage(props) {
  return (
    <div style={{ position: "relative" }}>
      <video
        src={props.url}
        autoPlay
        loop
        muted
        type="video/mp4"
        className="h-[100vh] lg:h-[80vh] w-full object-cover"
      />

      <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-white text-center">
        <h2 className="text-6xl">{props.title}</h2>
        <p>{props.desc}</p>
      </div>
    </div>
  );
}

export default HeroImage;
