import {
  faLocationDot,
  faMailForward,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { faLocation } from "@fortawesome/free-solid-svg-icons/faLocation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const data = [
  {
    id: 1,
    icon: faLocation,
    title: "Address",
    desc: "A108 Adam Street, New York, NY 535022",
  },
  {
    id: 2,
    icon: faPhone,
    title: "Call Us",
    desc: "+1 5589 55488 55",
  },
  {
    id: 3,
    icon: faMailForward,
    title: "Email Us",
    desc: "info@example.com",
  },
];

function ContactInfo() {
  return (
    <div className="shadow border-t-[3px] border-b-[3px] border-t-indigo-500 border-b-indigo-500 p-4 ">
      <div className="flex flex-col gap-5">
        {data.map(function (value) {
          return (
            <div className="flex items-center gap-2">
              <div className="rounded-full bg-indigo-700 h-[42px] w-[42px] flex items-center justify-center">
                <FontAwesomeIcon
                  icon={value.icon}
                  className="text-1xl text-white"
                />
              </div>
              <div>
                <p className="font-bold">{value.title}</p>
                <p>{value.desc}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ContactInfo;
