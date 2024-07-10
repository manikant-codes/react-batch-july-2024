import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

function AddressInfo(props) {
  return (
    <div className="flex items-center gap-4">
      <div>
        <FontAwesomeIcon
          className="text-indigo-400 text-lg"
          icon={props.info.icon}
        />
      </div>
      <div>
        <h4 className="tetx-lg font-bold text-indigo-700">
          {props.info.title}
        </h4>
        <p>{props.info.desc}</p>
      </div>
    </div>
  );
}

export default AddressInfo;
