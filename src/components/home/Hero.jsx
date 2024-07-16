import React from "react";

function Hero(props) {
  return (
    <div className="h-[70vh] overflow-hidden relative">
      <img src={props.url} alt="" className="h-full w-full object-cover" />
    </div>
  );
}

export default Hero;
