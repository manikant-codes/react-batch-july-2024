import {
  faChevronLeft,
  faChevronRight,
  faClose,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

function GalleryModal(props) {
  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 bg-[rgba(0,0,0,0.75)] p-8 flex flex-col gap-4 items-center justify-center z-[2000]">
      <button
        className="bg-white rounded-full p-2 w-[40px] h-[40px] absolute right-[32px] top-[32px] flex items-center justify-center"
        onClick={props.toggleModal}
      >
        <FontAwesomeIcon icon={faClose} size="lg" />
      </button>
      <button
        className="bg-white p-2 rounded absolute left-[32px] top-[50%]"
        onClick={props.nextImg}
      >
        <FontAwesomeIcon icon={faChevronLeft} />
      </button>
      <button
        className="bg-white p-2 rounded absolute right-[32px] top-[50%]"
        onClick={props.nextImg}
      >
        <FontAwesomeIcon icon={faChevronRight} />
      </button>
      <div className="h-[100vh-80px] w-full overflow-hidden">
        <img
          className="h-full w-auto m-auto rounded-lg"
          src={props.images[props.activeIndex].img}
          alt=""
        />
      </div>
    </div>
  );
}

export default GalleryModal;
