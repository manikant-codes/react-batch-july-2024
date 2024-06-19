import React from "react";
import Title from "../../common/Title";

function ImageFirstRow(props) {
  return (
    <div className="p-8">
      <Title title={props.title} />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="h-[400px] rounded-lg overflow-hidden ">
          <img src={props.img} alt="" className="h-full w-full object-cover" />
        </div>
        <div>
          <p className="text-xl mb-8">{props.desc}</p>
          <button className="bg-indigo-600 px-6 py-3 rounded-full text-white hover:bg-indigo-800">
            Know More
          </button>
        </div>
      </div>
    </div>
  );
}

export default ImageFirstRow;
