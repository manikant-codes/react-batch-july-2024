import {
  faLocationDot,
  faPaperPlane,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import React from "react";
import AddressInfo from "./AddressInfo";

const infos = [
  {
    id: 1,
    title: "Address",
    desc: "A108 Adam Street, New York, NY 535022",
    icon: faLocationDot,
  },
  {
    id: 2,
    title: "Call Us",
    desc: "+1 5589 55488 55",
    icon: faPhone,
  },
  {
    id: 3,
    title: "Email Us",
    desc: "info@example.com",
    icon: faPaperPlane,
  },
];

function Address() {
  return (
    <div className="flex flex-col gap-4 shadow-md p-4 rounded-lg border border-indigo-200 border-t-4 border-t-indigo-500">
      <div className="flex flex-col gap-4">
        {infos.map((info) => {
          return <AddressInfo key={info.id} info={info} />;
        })}
      </div>
      <div>
        <iframe
          title="map"
          className="w-full h-[250px] rounded-lg"
          frameborder="0"
          src="https://www.google.com/maps/embed/v1/place?q=lope+multimedia,+yogi+chowk,+surat,+gujarat,+india&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
        />
      </div>
    </div>
  );
}

export default Address;
