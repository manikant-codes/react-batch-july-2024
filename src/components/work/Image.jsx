import React from "react";

function Image(props) {
  return (
    <img src={props.image.img} alt="" className="h-full w-full object-cover" />
  );
}

export default Image;
