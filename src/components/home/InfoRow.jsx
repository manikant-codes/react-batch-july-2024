import React from "react";
import Title from "../common/Title";

function InfoRow(props) {
  return (
    <>
      {props.imageFirst ? (
        <div className="p-8">
          <Title title={props.title} />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="h-[400px] rounded-lg overflow-hidden ">
              <img
                src={props.img}
                alt=""
                className="h-full w-full object-cover"
              />
            </div>
            <div>
              <div id="para-container">
                <p id="my-para" className="text-xl mb-8">
                  {props.desc}
                </p>
              </div>
              <button className="bg-indigo-600 px-6 py-3 rounded-full text-white hover:bg-indigo-800">
                Know More
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="p-8">
          <Title title={props.title} />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="order-2 lg:order-1">
              <p className="text-xl mb-8">{props.desc}</p>
              <button className="bg-indigo-600 px-6 py-3 rounded-full text-white hover:bg-indigo-800">
                Know More
              </button>
            </div>
            <div className="h-[400px] rounded-lg overflow-hidden order-1 lg:order-2">
              <img
                src={props.img}
                alt=""
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default InfoRow;
