import React from "react";

function GalleryModal(props) {
  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 bg-[rgba(0,0,0,0.75)] p-8 flex flex-col gap-4 items-center justify-center">
      <button
        className="bg-white p-2 rounded absolute right-[32px] top-[32px]"
        onClick={props.toggleModal}
      >
        Close
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
